/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';

import { memo, ReactNode, useEffect, useRef, useState } from 'react';
import { AudioRecorder } from '../../../lib/audio-recorder';
import { useSettings, useTools, useLogStore } from '@/lib/state';

import { useLiveAPIContext } from '../../../contexts/LiveAPIContext';

export type ControlTrayProps = {
  children?: ReactNode;
};

function ControlTray({ children }: ControlTrayProps) {
  const [audioRecorder] = useState(() => new AudioRecorder());
  const [muted, setMuted] = useState(false);
  const connectButtonRef = useRef<HTMLButtonElement>(null);

  const { client, connected, connect, disconnect } = useLiveAPIContext();

  useEffect(() => {
    if (!connected && connectButtonRef.current) {
      connectButtonRef.current.focus();
    }
  }, [connected]);

  useEffect(() => {
    if (!connected) {
      setMuted(false);
    }
  }, [connected]);

  useEffect(() => {
    const onData = (base64: string) => {
      client.sendRealtimeInput([
        {
          mimeType: 'audio/pcm;rate=16000',
          data: base64,
        },
      ]);
    };
    if (connected && !muted && audioRecorder) {
      audioRecorder.on('data', onData);
      audioRecorder.start();
    } else {
      audioRecorder.stop();
    }
    return () => {
      audioRecorder.off('data', onData);
    };
  }, [connected, client, muted, audioRecorder]);

  const handleMicClick = () => {
    if (connected) {
      setMuted(!muted);
    } else {
      connect();
    }
  };

  const handleExportLogs = () => {
    const { systemPrompt, model } = useSettings.getState();
    const { tools } = useTools.getState();
    const { turns } = useLogStore.getState();

    const logData = {
      configuration: {
        model,
        systemPrompt,
      },
      tools,
      conversation: turns.map(turn => ({
        ...turn,
        timestamp: turn.timestamp.toISOString(),
      })),
    };

    const jsonString = JSON.stringify(logData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    a.href = url;
    a.download = `live-api-logs-${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const micButtonTitle = connected
    ? muted
      ? 'Ativar microfone'
      : 'Desativar microfone'
    : 'Conectar e iniciar microfone';

  const connectButtonTitle = connected ? 'Parar streaming' : 'Iniciar streaming';

  return (
    <nav className="bg-black/40 border border-white/20 rounded-full flex items-center gap-2 p-2 shadow-lg">
      <button
        className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        onClick={handleMicClick}
        title={micButtonTitle}
      >
        {!muted ? (
          <span className="material-symbols-outlined">mic</span>
        ) : (
          <span className="material-symbols-outlined">mic_off</span>
        )}
      </button>
      <button
        className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        onClick={handleExportLogs}
        aria-label="Exportar Logs"
        title="Exportar logs da sessão"
      >
        <span className="material-symbols-outlined">download</span>
      </button>
      <button
        className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        onClick={useLogStore.getState().clearTurns}
        aria-label="Reiniciar Chat"
        title="Reiniciar logs da sessão"
      >
        <span className="material-symbols-outlined">refresh</span>
      </button>
      {children}
      <button
        ref={connectButtonRef}
        className={cn('w-16 h-16 flex items-center justify-center rounded-full text-black transition-colors', {
          'bg-red-500 hover:bg-red-600': connected,
          'bg-blue-500 hover:bg-blue-600': !connected,
        })}
        onClick={connected ? disconnect : connect}
        title={connectButtonTitle}
      >
        <span className="material-symbols-outlined text-4xl">
          {connected ? 'pause' : 'play_arrow'}
        </span>
      </button>
    </nav>
  );
}

export default memo(ControlTray);
