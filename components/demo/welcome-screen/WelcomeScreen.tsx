/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { useTools, Template } from '../../../lib/state';
import { useLiveAPIContext } from '@/contexts/LiveAPIContext';

const welcomeContent: Record<Template, { title: string; description: string; prompts: string[] }> = {
  'customer-support': {
    title: 'Suporte ao Cliente',
    description: 'Lide com as perguntas dos clientes e veja como as chamadas de função podem automatizar tarefas.',
    prompts: [
      "Gostaria de devolver um item.",
      "Qual é o status do meu pedido?",
      "Posso falar com um representante?",
    ],
  },
  'personal-assistant': {
    title: 'Assistente Pessoal',
    description: 'Gerencie sua agenda, envie e-mails e defina lembretes.',
    prompts: [
      'Crie um evento no calendário para uma reunião amanhã às 10h.',
      'Envie um e-mail para jane@example.com.',
      'Defina um lembrete para comprar leite.',
    ],
  },
  'navigation-system': {
    title: 'Sistema de Navegação',
    description: 'Encontre rotas, lugares próximos e obtenha informações de trânsito.',
    prompts: [
      'Encontre uma rota para a cafeteria mais próxima.',
      'Existem parques por perto?',
      "Como está o trânsito a caminho do aeroporto?",
    ],
  },
};

const WelcomeScreen: React.FC = () => {
  const { template, setTemplate } = useTools();
  const { title, description, prompts } = welcomeContent[template];
  const { client, connect, connected } = useLiveAPIContext();

  const handlePromptClick = async (prompt: string) => {
    if (!connected) {
      await connect();
    }

    // Allow some time for the connection to establish before sending the message
    setTimeout(() => {
      client.send([{ text: prompt }]);
    }, 500);
  };

  return (
    <div className="flex justify-center items-center h-full text-center text-gray-400">
      <div className="max-w-lg">
        <div className="flex flex-col items-center mb-2">
            <span className="material-symbols-outlined text-7xl text-gray-300 mb-4">mic</span>
          <div className="relative inline-block">
            <select 
              value={template} 
              onChange={(e) => setTemplate(e.target.value as Template)} 
              aria-label="Selecione um modelo"
              className="text-3xl font-bold text-gray-200 bg-transparent border-none appearance-none pr-8 cursor-pointer focus:outline-none text-center"
            >
              <option className="bg-gray-800" value="customer-support">Suporte ao Cliente</option>
              <option className="bg-gray-800" value="personal-assistant">Assistente Pessoal</option>
              <option className="bg-gray-800" value="navigation-system">Sistema de Navegação</option>
            </select>
            <span className="material-symbols-outlined absolute top-1/2 right-0 -translate-y-1/2 text-3xl text-gray-300 pointer-events-none">arrow_drop_down</span>
          </div>
        </div>
        <p className="text-lg mb-6">{description}</p>
        <div className="flex flex-col justify-center gap-3">
          {prompts.map((prompt, index) => (
            <button 
              key={index}
              onClick={() => handlePromptClick(prompt)}
              className="bg-black/30 hover:bg-black/50 transition-colors py-3 px-5 rounded-lg text-base text-gray-200 w-full"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;