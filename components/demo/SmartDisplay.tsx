/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { useUI } from '@/lib/state';

import StreamingConsole from './streaming-console/StreamingConsole';
import ControlTray from '../console/control-tray/ControlTray';
import Sidebar from '../Sidebar';
import CameraView from './CameraView';

export default function SmartDisplay() {
  const { isSidebarOpen, toggleSidebar } = useUI();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="relative w-[95vw] h-[95vh] max-w-[1400px] max-h-[900px] bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl text-white overflow-hidden flex flex-col p-6 font-sans">
      <Sidebar />
      {/* Header */}
      <header className="flex justify-between items-center mb-4 flex-shrink-0 z-20">
        <div className="flex items-center gap-4 text-2xl font-light">
          <span>{formattedTime.replace(' ', '').toUpperCase()}</span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">partly_cloudy_day</span>
            <span>3°C</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">Ver Mensagens</button>
          <button className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">Enviar Mensagem</button>
        </div>
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="Settings">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-black/20 rounded-2xl p-4 min-w-0 min-h-0 z-10">
          <StreamingConsole />
      </main>

      <div className="absolute bottom-24 right-8 w-64 h-40 rounded-2xl overflow-hidden z-20 shadow-lg border border-white/10">
        <CameraView />
      </div>

      {/* Footer */}
      <footer className="flex justify-center items-center pt-4 flex-shrink-0 z-20">
        <ControlTray />
      </footer>
    </div>
  );
}