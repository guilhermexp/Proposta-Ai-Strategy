/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface PopUpProps {
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 text-white p-8 rounded-2xl max-w-xl w-11/12 shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-300 mb-4">Bem-vindo ao Sandbox de Chamada de Função de Áudio Nativo</h2>
        <p className="mb-4">Seu ponto de partida para construir com áudio nativo e chamada de função.</p>
        <p className="mb-4">Para começar:</p>
        <ol className="list-none space-y-3 mb-6">
          <li className="flex items-center">
            <span className="material-symbols-outlined text-blue-300 mr-4">play_circle</span>
            <span>Pressione Play para iniciar a transmissão de áudio.</span>
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined text-blue-300 mr-4">save_as</span>
            <span>Copie este sandbox para criar sua própria versão.</span>
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined text-blue-300 mr-4">auto_awesome</span>
            <span>Use o Assistente de Código para personalizar e testar sua criação.</span>
          </li>
        </ol>
        <div className="text-right">
            <button 
                onClick={onClose} 
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Começar a Construir
            </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
