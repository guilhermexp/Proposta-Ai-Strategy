/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { FunctionCall, useSettings, useUI, useTools } from '@/lib/state';
import cn from 'classnames';
import { DEFAULT_LIVE_API_MODEL, AVAILABLE_VOICES } from '@/lib/constants';
import { useLiveAPIContext } from '@/contexts/LiveAPIContext';
import { useState } from 'react';
import ToolEditorModal from './ToolEditorModal';

const AVAILABLE_MODELS = [
  DEFAULT_LIVE_API_MODEL
];

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useUI();
  const { systemPrompt, model, voice, setSystemPrompt, setModel, setVoice } =
    useSettings();
  const { tools, toggleTool, addTool, removeTool, updateTool } = useTools();
  const { connected } = useLiveAPIContext();

  const [editingTool, setEditingTool] = useState<FunctionCall | null>(null);

  const handleSaveTool = (updatedTool: FunctionCall) => {
    if (editingTool) {
      updateTool(editingTool.name, updatedTool);
    }
    setEditingTool(null);
  };

  return (
    <>
      <div
        className={cn(
          'absolute inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-40 transition-opacity duration-300',
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="bg-gray-800/50 backdrop-blur-xl border border-white/20 text-white p-6 rounded-2xl w-full max-w-4xl shadow-2xl relative mx-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-light">Configurações</h3>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: System Prompt & General Settings */}
            <div>
              <fieldset disabled={connected}>
                <label className="block mb-4">
                  <span className="text-gray-300 block mb-2">
                    Prompt do Sistema
                  </span>
                  <textarea
                    value={systemPrompt}
                    onChange={e => setSystemPrompt(e.target.value)}
                    rows={6}
                    placeholder="Descreva o papel e a personalidade da IA..."
                    className="w-full bg-black/30 p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                  />
                </label>
                <div className="flex gap-4">
                  <label className="flex-1">
                    <span className="text-gray-300 block mb-2">Modelo</span>
                    <select
                      value={model}
                      onChange={e => setModel(e.target.value)}
                      className="w-full bg-black/30 p-3 rounded-lg border border-white/10 appearance-none focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    >
                      {AVAILABLE_MODELS.map(m => (
                        <option key={m} value={m} className="bg-gray-800">
                          {m}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex-1">
                    <span className="text-gray-300 block mb-2">Voz</span>
                    <select
                      value={voice}
                      onChange={e => setVoice(e.target.value)}
                      className="w-full bg-black/30 p-3 rounded-lg border border-white/10 appearance-none focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    >
                      {AVAILABLE_VOICES.map(v => (
                        <option key={v} value={v} className="bg-gray-800">
                          {v}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </fieldset>
            </div>

            {/* Right Column: Tools */}
            <div>
              <h4 className="text-gray-300 mb-2">Ferramentas</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                {tools.map(tool => (
                  <div
                    key={tool.name}
                    className="flex items-center bg-black/20 p-2 rounded-lg"
                  >
                    <label className="flex items-center cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={tool.isEnabled}
                        onChange={() => toggleTool(tool.name)}
                        disabled={connected}
                        className="w-5 h-5 accent-blue-400 bg-gray-700 border-gray-600 rounded"
                      />
                      <span className="ml-3 text-gray-200">{tool.name}</span>
                    </label>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingTool(tool)}
                        disabled={connected}
                        aria-label={`Editar ${tool.name}`}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full disabled:opacity-50"
                      >
                        <span className="material-symbols-outlined text-base">
                          edit
                        </span>
                      </button>
                      <button
                        onClick={() => removeTool(tool.name)}
                        disabled={connected}
                        aria-label={`Excluir ${tool.name}`}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full disabled:opacity-50"
                      >
                        <span className="material-symbols-outlined text-base">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={addTool}
                className="mt-4 flex items-center gap-2 text-blue-300 hover:text-blue-200 disabled:opacity-50"
                disabled={connected}
              >
                <span className="material-symbols-outlined">add</span> Adicionar
                chamada de função
              </button>
            </div>
          </div>
        </div>
      </div>
      {editingTool && (
        <ToolEditorModal
          tool={editingTool}
          onClose={() => setEditingTool(null)}
          onSave={handleSaveTool}
        />
      )}
    </>
  );
}