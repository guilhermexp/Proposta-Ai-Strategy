/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useEffect, useRef } from 'react';
import { LiveConnectConfig, Modality, LiveServerContent } from '@google/genai';

import { useLiveAPIContext } from '../../../contexts/LiveAPIContext';
import {
  useSettings,
  useLogStore,
  useTools,
  ConversationTurn,
} from '@/lib/state';

const formatTimestamp = (date: Date) => {
  const pad = (num: number, size = 2) => num.toString().padStart(size, '0');
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const milliseconds = pad(date.getMilliseconds(), 3);
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

const renderContent = (text: string) => {
  const parts = text.split(/(`{3}json\n[\s\S]*?\n`{3})/g);

  return parts.map((part, index) => {
    if (part.startsWith('```json')) {
      const jsonContent = part.replace(/^`{3}json\n|`{3}$/g, '');
      return (
        <pre key={index} className="bg-black/30 border border-white/10 rounded-lg p-3 my-2 overflow-x-auto">
          <code className="font-mono text-sm text-gray-300 whitespace-pre">{jsonContent}</code>
        </pre>
      );
    }

    const boldParts = part.split(/(\*\*.*?\*\*)/g);
    return boldParts.map((boldPart, boldIndex) => {
      if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
        return <strong key={boldIndex} className="font-bold text-white">{boldPart.slice(2, -2)}</strong>;
      }
      return boldPart;
    });
  });
};


export default function StreamingConsole() {
  const { client, setConfig } = useLiveAPIContext();
  const { systemPrompt, voice } = useSettings();
  const { tools } = useTools();
  const turns = useLogStore(state => state.turns);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enabledTools = tools
      .filter(tool => tool.isEnabled)
      .map(tool => ({
        functionDeclarations: [
          {
            name: tool.name,
            description: tool.description,
            parameters: tool.parameters,
          },
        ],
      }));

    const config: any = {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: {
            voiceName: voice,
          },
        },
      },
      inputAudioTranscription: {},
      outputAudioTranscription: {},
      systemInstruction: {
        parts: [
          {
            text: systemPrompt,
          },
        ],
      },
      tools: enabledTools,
    };

    setConfig(config);
  }, [setConfig, systemPrompt, tools, voice]);

  useEffect(() => {
    const { addTurn, updateLastTurn } = useLogStore.getState();

    const handleInputTranscription = (text: string, isFinal: boolean) => {
      const turns = useLogStore.getState().turns;
      const last = turns[turns.length - 1];
      if (last && last.role === 'user' && !last.isFinal) {
        updateLastTurn({
          text: last.text + text,
          isFinal,
        });
      } else {
        addTurn({ role: 'user', text, isFinal });
      }
    };

    const handleOutputTranscription = (text: string, isFinal: boolean) => {
      const turns = useLogStore.getState().turns;
      const last = turns[turns.length - 1];
      if (last && last.role === 'agent' && !last.isFinal) {
        updateLastTurn({
          text: last.text + text,
          isFinal,
        });
      } else {
        addTurn({ role: 'agent', text, isFinal });
      }
    };

    const handleContent = (serverContent: LiveServerContent) => {
      const text =
        serverContent.modelTurn?.parts
          ?.map((p: any) => p.text)
          .filter(Boolean)
          .join(' ') ?? '';
      const groundingChunks = serverContent.groundingMetadata?.groundingChunks;

      if (!text && !groundingChunks) return;

      const turns = useLogStore.getState().turns;
      const last = turns[turns.length - 1];

      if (last?.role === 'agent' && !last.isFinal) {
        const updatedTurn: Partial<ConversationTurn> = {
          text: last.text + text,
        };
        if (groundingChunks) {
          updatedTurn.groundingChunks = [
            ...(last.groundingChunks || []),
            ...groundingChunks,
          ];
        }
        updateLastTurn(updatedTurn);
      } else {
        addTurn({ role: 'agent', text, isFinal: false, groundingChunks });
      }
    };

    const handleTurnComplete = () => {
      const last = useLogStore.getState().turns[useLogStore.getState().turns.length - 1];
      if (last && !last.isFinal) {
        updateLastTurn({ isFinal: true });
      }
    };

    client.on('inputTranscription', handleInputTranscription);
    client.on('outputTranscription', handleOutputTranscription);
    client.on('content', handleContent);
    client.on('turncomplete', handleTurnComplete);

    return () => {
      client.off('inputTranscription', handleInputTranscription);
      client.off('outputTranscription', handleOutputTranscription);
      client.off('content', handleContent);
      client.off('turncomplete', handleTurnComplete);
    };
  }, [client]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [turns]);

  return (
    <div className="h-full w-full flex flex-col text-lg">
      {turns.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center p-6">
            <span className="material-symbols-outlined text-4xl mb-4 opacity-50 text-blue-500">graphic_eq</span>
            <p className="text-sm max-w-[200px]">Pressione Play para falar com a IA da Clínica.</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2 space-y-5 pb-44" ref={scrollRef}>
          {turns.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col ${!t.isFinal ? 'opacity-60' : ''} ${
                t.role === 'system' ? 'bg-black/30 rounded-xl p-4' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <div className={`font-bold text-sm uppercase tracking-wider ${
                  t.role === 'user' ? 'text-blue-300' : 
                  t.role === 'agent' ? 'text-green-300' : 'text-gray-400'
                }`}>
                  {t.role === 'user'
                    ? 'Você'
                    : t.role === 'agent'
                      ? 'Consultor'
                      : 'Sistema'}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {formatTimestamp(t.timestamp)}
                </div>
              </div>
              <div className="text-white whitespace-pre-wrap break-words">
                {renderContent(t.text)}
              </div>
              {t.groundingChunks && t.groundingChunks.length > 0 && (
                <div className="mt-3 text-sm opacity-80">
                  <strong className="font-bold text-gray-300">Fontes:</strong>
                  <ul className="list-decimal pl-5 mt-1 space-y-1">
                    {t.groundingChunks
                      .filter(chunk => chunk.web && chunk.web.uri)
                      .map((chunk, index) => (
                        <li key={index}>
                          <a
                            href={chunk.web!.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:underline"
                          >
                            {chunk.web!.title || chunk.web!.uri}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
