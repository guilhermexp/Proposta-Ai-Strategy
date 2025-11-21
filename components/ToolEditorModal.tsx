/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useEffect, useState } from 'react';
import { FunctionCall } from '@/lib/state';
import { FunctionResponseScheduling } from '@google/genai';

type ToolEditorModalProps = {
  tool: FunctionCall;
  onClose: () => void;
  onSave: (updatedTool: FunctionCall) => void;
};

export default function ToolEditorModal({
  tool,
  onClose,
  onSave,
}: ToolEditorModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [parametersStr, setParametersStr] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [scheduling, setScheduling] = useState<FunctionResponseScheduling>(
    FunctionResponseScheduling.INTERRUPT,
  );

  useEffect(() => {
    if (tool) {
      setName(tool.name);
      setDescription(tool.description || '');
      setParametersStr(JSON.stringify(tool.parameters || {}, null, 2));
      setScheduling(tool.scheduling || FunctionResponseScheduling.INTERRUPT);
      setJsonError(null);
    }
  }, [tool]);

  const handleSave = () => {
    let parsedParameters;
    try {
      parsedParameters = JSON.parse(parametersStr);
      setJsonError(null);
    } catch (error) {
      setJsonError('Formato JSON inválido para parâmetros.');
      return;
    }

    onSave({
      ...tool,
      name,
      description,
      parameters: parsedParameters,
      scheduling,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-gray-800/50 backdrop-blur-xl border border-white/20 text-white p-6 rounded-2xl w-full max-w-2xl shadow-2xl relative mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-light">Editar Chamada de Função</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="tool-name" className="block text-sm font-medium text-gray-300 mb-1">
              Nome
            </label>
            <input
              id="tool-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-black/30 p-2 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="tool-description" className="block text-sm font-medium text-gray-300 mb-1">
              Descrição
            </label>
            <textarea
              id="tool-description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
              className="w-full bg-black/30 p-2 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="tool-scheduling" className="block text-sm font-medium text-gray-300 mb-1">
              Comportamento de Agendamento
            </label>
            <select
              id="tool-scheduling"
              value={scheduling}
              onChange={e =>
                setScheduling(e.target.value as FunctionResponseScheduling)
              }
              className="w-full bg-black/30 p-2 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-400 focus:outline-none transition appearance-none"
            >
              <option value={FunctionResponseScheduling.INTERRUPT} className="bg-gray-800">
                Interromper
              </option>
              <option value={FunctionResponseScheduling.WHEN_IDLE} className="bg-gray-800">
                Quando Ocioso
              </option>
              <option value={FunctionResponseScheduling.SILENT} className="bg-gray-800">
                Silencioso
              </option>
            </select>
            <p className="text-gray-400 text-xs mt-1">
              Determina quando a resposta do modelo é reproduzida. 'Interromper' reproduz imediatamente.
            </p>
          </div>

          <div>
            <label htmlFor="tool-parameters" className="block text-sm font-medium text-gray-300 mb-1">
              Parâmetros (Esquema JSON)
            </label>
            <textarea
              id="tool-parameters"
              value={parametersStr}
              onChange={e => setParametersStr(e.target.value)}
              rows={8}
              className="w-full bg-black/30 p-2 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-400 focus:outline-none transition font-mono text-sm"
            />
            {jsonError && <p className="text-red-400 text-sm mt-1">{jsonError}</p>}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}