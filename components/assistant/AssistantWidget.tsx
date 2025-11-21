/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { useLiveAPIContext } from '@/contexts/LiveAPIContext';
import ControlTray from '../console/control-tray/ControlTray';
import StreamingConsole from '../demo/streaming-console/StreamingConsole';

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { connected } = useLiveAPIContext();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (connected) {
        setIsOpen(true);
    }
  }, [connected]);

  return (
    <>
      {/* Mobile Overlay Background when open */}
      <div 
        className={cn(
            "fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end pointer-events-none w-full md:w-auto md:bottom-6 md:right-6">
        {/* Chat Window */}
        <div 
          ref={widgetRef}
          className={cn(
            "pointer-events-auto bg-[#0f1115] md:bg-gray-900/95 md:backdrop-blur-xl border-t md:border border-white/10 md:shadow-2xl md:rounded-2xl overflow-hidden transition-all duration-500 ease-in-out flex flex-col",
            // Mobile Styles: Full screen, slide up from bottom
            "fixed inset-0 w-full h-[100dvh] md:static md:h-[600px] md:w-[400px] md:max-h-[85vh]",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100%] md:translate-y-10 pointer-events-none md:h-0"
          )}
        >
          {/* Header */}
          <div className="bg-black/40 md:bg-gradient-to-r md:from-gray-800 md:to-gray-900 p-4 flex justify-between items-center border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-inner">
                         <span className="material-symbols-outlined text-white text-xl">graphic_eq</span>
                    </div>
                    {connected && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  <div>
                      <h3 className="text-white font-semibold text-sm leading-tight">Consultor IA</h3>
                      <p className="text-xs text-gray-400 font-mono">{connected ? "Conectado" : "Aguardando início..."}</p>
                  </div>
              </div>
              <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                  title="Minimizar"
              >
                  <span className="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden relative bg-[#0f1115]">
              <StreamingConsole />
          </div>

          {/* Controls Footer */}
          <div className="p-4 md:p-6 bg-black/20 border-t border-white/5 shrink-0 safe-area-bottom">
               <div className="flex justify-center">
                  <ControlTray />
               </div>
          </div>
        </div>

        {/* Toggle Button (Floating Action Button) */}
        <div className="p-4 md:p-0 pointer-events-auto">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
                "w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 relative group",
                isOpen ? "bg-gray-800 text-white opacity-0 pointer-events-none absolute right-4 bottom-4" : "bg-blue-600 text-white"
            )}
            >
            {!isOpen && !connected && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
            )}
            
            <span className="material-symbols-outlined text-3xl">
                smart_toy
            </span>
            </button>
        </div>
      </div>
    </>
  );
}