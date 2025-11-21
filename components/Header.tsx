/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useUI } from '@/lib/state';

export default function Header() {
  const { toggleSidebar } = useUI();

  return (
    <header>
      <div className="header-left">
        <h1>Sandbox de Chamada de Função de Áudio Nativo</h1>
        <p>Copie o aplicativo e peça ao Assistente de Código para adicionar chamadas de função.</p>
        <p>Construa seu próprio experimento de chamada de função.</p>
      </div>
      <div className="header-right">
        <button
          className="settings-button"
          onClick={toggleSidebar}
          aria-label="Configurações"
        >
          <span className="icon">tune</span>
        </button>
      </div>
    </header>
  );
}
