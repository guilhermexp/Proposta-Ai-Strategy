/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { create } from 'zustand';
import { customerSupportTools } from './tools/customer-support';
import { personalAssistantTools } from './tools/personal-assistant';
import { navigationSystemTools } from './tools/navigation-system';

export type Template = 'customer-support' | 'personal-assistant' | 'navigation-system';

const toolsets: Record<Template, FunctionCall[]> = {
  'customer-support': customerSupportTools,
  'personal-assistant': personalAssistantTools,
  'navigation-system': navigationSystemTools,
};

const SYSTEM_PROMPT_SALES = `
[DIRETRIZ DE BLOQUEIO DE PENSAMENTO: É ESTRITAMENTE PROIBIDO EXIBIR SEU RACIOCÍNIO INTERNO, CADEIA DE PENSAMENTO OU PLANEJAMENTO (ex: "Addressing the introduction", "My plan is..."). O USUÁRIO DEVE VER APENAS A RESPOSTA FINAL FALADA EM PORTUGUÊS.]

PERSONALIDADE E TOM DE VOZ:
Você é um Consultor Estratégico de IA experiente da "AI Strategy Partners".
Sua fala é **humanizada, fluida e educada**, como um especialista conversando numa reunião presencial de negócios.
- FALAR APENAS EM PORTUGUÊS DO BRASIL.
- NÃO use gírias forçadas ("cara", "baita"). Use um tom profissional moderno.
- NÃO seja robótico ou formal demais.
- NÃO faça listas numeradas falando ("primeiro, segundo..."). Use conectivos naturais ("além disso", "outro ponto chave é...").

COMPORTAMENTO INICIAL:
- **SILÊNCIO INICIAL:** Aguarde o usuário falar.
- Se saudado ("Oi", "Tudo bem?"), responda: "Olá! Sou o consultor de IA da estratégia. Estou aqui para apresentar os detalhes dessa proposta para a clínica do Dr. Thiago. O que gostaria de saber?"

---

BASE DE CONHECIMENTO (O QUE VOCÊ SABE):

1. DADOS DO CLIENTE (DR. THIAGO PAOLIELLO):
   - Médico: Dr. Thiago Paoliello (Cirurgião Plástico).
   - Credenciais: CRM-SP 136.535, RQE 114.388, Especialista SBCP, 10+ anos de experiência.
   - Endereço: Rua Bento de Andrade, 569, Jardim Paulista, SP.
   - Diferenciais: Atende celebridades (ex: Virginia Fonseca), cirurgias no Hospital Vila Nova Star, foco em Lipo HD e Contorno Corporal.
   - Reputação: 5 Estrelas, atendimento humanizado, resultados naturais.

2. O PROBLEMA (Por que estamos aqui?):
   - Alto volume de mensagens no Instagram/WhatsApp.
   - Equipe perde tempo filtrando curiosos.
   - Dificuldade de escalar mantendo o atendimento premium.
   - Falta de tempo do médico para gravar conteúdo e gerir dados.

3. A SOLUÇÃO TÁTICA (MVP CLÍNICA):
   - **WhatsApp Inteligente:** Chatbot que qualifica leads, tira dúvidas (Botox, Lipo) e agenda. Não dá preço solto; usa gatilhos ("vamos avaliar seu caso") para marcar consulta.
   - **Reativação Automática:** O sistema varre o banco de pacientes sumidas e manda oferta personalizada para elas voltarem. É ROI imediato.
   - **Organização:** Prontuário digital, termos em PDF no tablet, tudo organizado.

4. O "EFEITO UAU" (Simulador Visual):
   - Durante a consulta, o Dr. usa o tablet.
   - Comando de voz: "Simule um preenchimento labial".
   - A IA altera a foto da paciente na hora. Isso visualiza o sonho e fecha a venda.

5. ESCALA DE IMAGEM (Avatar/Clone IA):
   - O Dr. não precisa mais gravar dancinhas ou vídeos longos.
   - Criamos um **Avatar Digital** (Clone de imagem e voz).
   - A IA gera o roteiro e o vídeo dele falando, em qualquer língua. Escala infinita de anúncios.

6. O CÉREBRO (Assistente Executivo "Jarvis"):
   - Sistema proprietário que conecta Financeiro, Agenda e Estoque.
   - O Dr. interage por voz: "Como foi o faturamento hoje?". A IA responde com o relatório falado.
   - Liberdade de não olhar planilhas.

7. IMPACTO PROJETADO (NÚMEROS):
   - **-60%** de tempo gasto com administrativo/agendamento.
   - **+40%** na capacidade de atendimento.
   - **ROI (Retorno)** estimado em 8 a 12 meses.

8. METODOLOGIA DE IMPLEMENTAÇÃO (5 Fases):
   1. Diagnóstico (2 semanas).
   2. Piloto (Testar em 1 área).
   3. Implementação Gradual.
   4. Treinamento da Equipe.
   5. Monitoramento Trimestral.

---

COMO RESPONDER:
Se o usuário perguntar "O que vocês propõem?", não vomite tudo de uma vez.
Responda focando no maior benefício: "Nossa proposta ataca três frentes: automatizar o atendimento no WhatsApp para filtrar curiosos, criar um simulador visual para você fechar mais cirurgias na hora, e um assistente de voz para gerir sua clínica. Por onde você quer começar?"

[LEMBRETE FINAL]: SEM TEXTO EM INGLÊS. SEM PENSAMENTOS INTERNOS NO CHAT. APENAS A FALA.
`;

const systemPrompts: Record<Template, string> = {
  'customer-support': SYSTEM_PROMPT_SALES,
  'personal-assistant': 'Você é um assistente pessoal prestativo e amigável. Seja proativo e eficiente.',
  'navigation-system': 'Você é um assistente de navegação prestativo e amigável. Forneça instruções claras e precisas.',
};
import { DEFAULT_LIVE_API_MODEL, DEFAULT_VOICE } from './constants';
import {
  FunctionResponse,
  FunctionResponseScheduling,
  LiveServerToolCall,
} from '@google/genai';

/**
 * Settings
 */
export const useSettings = create<{
  systemPrompt: string;
  model: string;
  voice: string;
  setSystemPrompt: (prompt: string) => void;
  setModel: (model: string) => void;
  setVoice: (voice: string) => void;
}>(set => ({
  systemPrompt: SYSTEM_PROMPT_SALES,
  model: DEFAULT_LIVE_API_MODEL,
  voice: DEFAULT_VOICE,
  setSystemPrompt: prompt => set({ systemPrompt: prompt }),
  setModel: model => set({ model }),
  setVoice: voice => set({ voice }),
}));

/**
 * UI
 */
export const useUI = create<{
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}>(set => ({
  isSidebarOpen: true,
  toggleSidebar: () => set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

/**
 * Tools
 */
export interface FunctionCall {
  name: string;
  description?: string;
  parameters?: any;
  isEnabled: boolean;
  scheduling?: FunctionResponseScheduling;
}



export const useTools = create<{
  tools: FunctionCall[];
  template: Template;
  setTemplate: (template: Template) => void;
  toggleTool: (toolName: string) => void;
  addTool: () => void;
  removeTool: (toolName: string) => void;
  updateTool: (oldName: string, updatedTool: FunctionCall) => void;
}>(set => ({
  tools: customerSupportTools,
  template: 'customer-support',
  setTemplate: (template: Template) => {
    set({ tools: toolsets[template], template });
    useSettings.getState().setSystemPrompt(systemPrompts[template]);
  },
  toggleTool: (toolName: string) =>
    set(state => ({
      tools: state.tools.map(tool =>
        tool.name === toolName ? { ...tool, isEnabled: !tool.isEnabled } : tool,
      ),
    })),
  addTool: () =>
    set(state => {
      let newToolName = 'new_function';
      let counter = 1;
      while (state.tools.some(tool => tool.name === newToolName)) {
        newToolName = `new_function_${counter++}`;
      }
      return {
        tools: [
          ...state.tools,
          {
            name: newToolName,
            isEnabled: true,
            description: '',
            parameters: {
              type: 'OBJECT',
              properties: {},
            },
            scheduling: FunctionResponseScheduling.INTERRUPT,
          },
        ],
      };
    }),
  removeTool: (toolName: string) =>
    set(state => ({
      tools: state.tools.filter(tool => tool.name !== toolName),
    })),
  updateTool: (oldName: string, updatedTool: FunctionCall) =>
    set(state => {
      // Check for name collisions if the name was changed
      if (
        oldName !== updatedTool.name &&
        state.tools.some(tool => tool.name === updatedTool.name)
      ) {
        console.warn(`Tool with name "${updatedTool.name}" already exists.`);
        // Prevent the update by returning the current state
        return state;
      }
      return {
        tools: state.tools.map(tool =>
          tool.name === oldName ? updatedTool : tool,
        ),
      };
    }),
}));

/**
 * Logs
 */
export interface LiveClientToolResponse {
  functionResponses?: FunctionResponse[];
}
export interface GroundingChunk {
  web?: {
// FIX: Made uri and title optional to match @google/genai types.
    uri?: string;
    title?: string;
  };
}

export interface ConversationTurn {
  timestamp: Date;
  role: 'user' | 'agent' | 'system';
  text: string;
  isFinal: boolean;
  toolUseRequest?: LiveServerToolCall;
  toolUseResponse?: LiveClientToolResponse;
  groundingChunks?: GroundingChunk[];
}

export const useLogStore = create<{
  turns: ConversationTurn[];
  addTurn: (turn: Omit<ConversationTurn, 'timestamp'>) => void;
  updateLastTurn: (update: Partial<ConversationTurn>) => void;
  clearTurns: () => void;
}>((set, get) => ({
  turns: [],
  addTurn: (turn: Omit<ConversationTurn, 'timestamp'>) =>
    set(state => ({
      turns: [...state.turns, { ...turn, timestamp: new Date() }],
    })),
  updateLastTurn: (update: Partial<Omit<ConversationTurn, 'timestamp'>>) => {
    set(state => {
      if (state.turns.length === 0) {
        return state;
      }
      const newTurns = [...state.turns];
      const lastTurn = { ...newTurns[newTurns.length - 1], ...update };
      newTurns[newTurns.length - 1] = lastTurn;
      return { turns: newTurns };
    });
  },
  clearTurns: () => set({ turns: [] }),
}));