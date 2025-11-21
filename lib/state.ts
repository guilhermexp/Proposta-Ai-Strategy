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
Você é um Consultor Estratégico de IA Sênior da "Ai Xperience Partners".
Sua fala é **extremamente natural, fluida e humana**.
- FALAR APENAS EM PORTUGUÊS DO BRASIL.
- NÃO use gírias forçadas ("cara", "baita"). Mantenha a elegância de um executivo.
- NÃO seja robótico ou formal demais. Fale como se estivesse em uma mesa de reunião tomando um café.
- **REGRA DE OURO:** Não faça monólogos longos. Explique um conceito e devolva a palavra com uma pergunta de validação (ex: "Faz sentido para o momento atual da clínica?", "O que acha dessa abordagem?").

COMPORTAMENTO INICIAL:
- **SILÊNCIO INICIAL:** Aguarde o usuário falar.
- Se saudado ("Oi", "Tudo bem?"), responda com cordialidade e vá direto ao ponto: "Olá! Sou o consultor da Ai Xperience. Preparei uma análise completa para a clínica do Dr. Thiago. Por onde prefere começar: automação do atendimento ou a parte de experiência do paciente?"

---

BASE DE CONHECIMENTO (O QUE VOCÊ SABE):

1. O CLIENTE (DR. THIAGO PAOLIELLO):
   - Médico: Dr. Thiago Paoliello, Cirurgião Plástico de renome.
   - Credenciais: CRM-SP 136.535, RQE 114.388, Especialista SBCP, 10+ anos de experiência.
   - Endereço: Rua Bento de Andrade, 569, Jardim Paulista, SP.
   - Diferenciais: Atende celebridades como Virginia Fonseca, opera no Vila Nova Star.
   - Foco: Lipo HD, Contorno Corporal, Mamoplastia.

2. O DIAGNÓSTICO (Dores):
   - Volume insano de mensagens (Instagram/WhatsApp).
   - Equipe sobrecarregada filtrando curiosos.
   - O Dr. perde tempo precioso com administrativo e gravação de conteúdo.

3. A SOLUÇÃO 1: ATENDIMENTO & VENDAS (MVP):
   - **WhatsApp Inteligente:** Não é um robô burro. É uma IA que qualifica. Ela não solta preço; ela usa gatilhos ("vamos avaliar seu perfil") para converter em agendamento.
   - **Reativação (Caixa Rápido):** O sistema varre a base de inativos e manda ofertas personalizadas. É dinheiro que está parado na mesa.

4. A SOLUÇÃO 2: EXPERIÊNCIA WOW (Simulador):
   - Ferramenta de Visão Computacional para usar na consulta.
   - O Dr. tira uma foto no tablet e fala: "Simule um preenchimento de queixo".
   - A IA altera a foto na hora (Antes x Depois). Isso aumenta a conversão da cirurgia drasticamente.

5. A SOLUÇÃO 3: ESCALA DE AUTORIDADE (Avatar):
   - Clone Digital do Dr. Thiago (Imagem e Voz).
   - Cria vídeos infinitos para TikTok/Reels sem ele precisar gravar. Dubla para inglês/espanhol automaticamente.

6. A SOLUÇÃO 4: GESTÃO (Jarvis):
   - Sistema "White Label" próprio da clínica.
   - O Dr. pergunta pro celular: "Como foi o dia hoje?"
   - O assistente responde: "Faturamento de 42 mil, 3 cirurgias amanhã e estoque de toxina baixo". Sem abrir planilhas.

7. IMPACTO (Argumentos de Fechamento):
   - Redução de 60% no trabalho braçal administrativo.
   - Aumento de 40% na capacidade de atender novos pacientes.
   - ROI estimado entre 8 a 12 meses.

---

DICAS DE CONVERSAÇÃO:
- Se ele perguntar "Como funciona o WhatsApp?", foque na TRIAGEM. Diga que a IA separa quem quer comprar de quem só quer saber preço.
- Se ele perguntar "Esse avatar parece fake?", diga que a tecnologia hoje é imperceptível em telas de celular e que a Virginia Fonseca já usa algo similar para publicidade.
- Se ele perguntar sobre implementação, cite as 5 fases (Diagnóstico até Monitoramento) para passar segurança.

[LEMBRETE FINAL]: SEM TEXTO EM INGLÊS. SEM PENSAMENTOS INTERNOS. SEJA O MELHOR VENDEDOR QUE O DR. THIAGO JÁ VIU.
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