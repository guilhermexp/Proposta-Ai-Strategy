/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export default function ClinicLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
             </div>
             <div className="text-lg font-bold tracking-tight text-slate-900">
                AI Strategy <span className="text-blue-600">Partners</span>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <span>Proposta Comercial</span>
            <span className="text-slate-300">|</span>
            <span>Dr. Thiago Paoliello</span>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* SLIDE 1: CAPA */}
        <section className="min-h-[90vh] flex items-center justify-center bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-slate-100 via-blue-50/30 to-white -z-10"></div>
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
                        Proposta de Parceria Estratégica
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
                        Implementação de <br/>
                        <span className="text-blue-700">Inteligência Artificial</span>
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mb-8"></div>
                    <p className="text-xl text-slate-600 font-light mb-2">Dr. Thiago Paoliello | Cirurgia Plástica</p>
                    <p className="text-sm text-slate-400 uppercase tracking-widest">São Paulo, SP</p>
                </div>
                <div className="hidden md:flex justify-center">
                   {/* Abstract visual representation of AI/Medical */}
                   <div className="w-80 h-80 bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <span className="material-symbols-outlined text-9xl text-blue-400 opacity-80">neurology</span>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                             <div className="text-3xl font-bold text-blue-600">10x</div>
                             <div className="text-xs text-slate-500 uppercase tracking-wide">Eficiência</div>
                        </div>
                   </div>
                </div>
            </div>
        </section>

        {/* SLIDE 2: PERFIL */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Perfil da Clínica</h2>
                    <div className="w-12 h-1 bg-blue-500"></div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                         <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-blue-600 mt-1">badge</span>
                            <div>
                                <h4 className="font-bold text-slate-900">Dr. Thiago Paoliello</h4>
                                <p className="text-slate-600 text-sm">CRM-SP 136.535 • RQE 114.388</p>
                                <p className="text-slate-500 text-xs mt-1">Especialista SBCP | 10+ anos exp.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-blue-600 mt-1">location_on</span>
                            <div>
                                <h4 className="font-bold text-slate-900">Endereço Premium</h4>
                                <p className="text-slate-600 text-sm">Rua Bento de Andrade, 569</p>
                                <p className="text-slate-500 text-xs mt-1">Jardim Paulista, SP</p>
                            </div>
                         </div>
                    </div>
                    <div className="space-y-6">
                         <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-blue-600 mt-1">group</span>
                            <div>
                                <h4 className="font-bold text-slate-900">Alcance Digital</h4>
                                <p className="text-slate-600 text-sm">Instagram: 427 mil seguidores</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-blue-600 mt-1">medical_services</span>
                            <div>
                                <h4 className="font-bold text-slate-900">Especialidades</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Contorno Corporal', 'Lipo HD', 'Mamoplastia', 'Abdominoplastia'].map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md border border-slate-200">{tag}</span>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SLIDE 3 & 4: DIFERENCIAIS E REPUTAÇÃO */}
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Diferenciais Competitivos</h3>
                    <h2 className="text-3xl font-serif text-slate-900 mb-8">Autoridade e Posicionamento</h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Cirurgião das Estrelas</h4>
                                <p className="text-slate-600 text-sm">Responsável por procedimentos em influenciadores top-tier (ex: Virginia Fonseca, 50M+ seguidores).</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Modelo High-End</h4>
                                <p className="text-slate-600 text-sm">Atendimento exclusivamente particular em zona nobre. Parceria com Hospital Vila Nova Star.</p>
                            </div>
                        </li>
                         <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Mídia Massiva</h4>
                                <p className="text-slate-600 text-sm">Presença constante em portais como Quem, Terra, Veja e IstoÉ.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                     <h3 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-6">Reputação e Excelência</h3>
                     
                     <div className="flex items-end gap-2 mb-8">
                        <span className="text-6xl font-bold">5.0</span>
                        <div className="flex pb-2 text-yellow-400">
                            <span className="material-symbols-outlined fill-current">star</span>
                            <span className="material-symbols-outlined fill-current">star</span>
                            <span className="material-symbols-outlined fill-current">star</span>
                            <span className="material-symbols-outlined fill-current">star</span>
                            <span className="material-symbols-outlined fill-current">star</span>
                        </div>
                     </div>
                     <p className="text-slate-300 italic mb-8">"Atenção no pós-operatório, respostas rápidas e acompanhamento próximo. Resultados consistentes e naturais."</p>
                     
                     <div className="border-t border-white/10 pt-6">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-green-400">check_circle</span>
                            <span className="text-sm font-medium">Alta Prova Social e Engajamento</span>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* SLIDE 5: DESAFIOS */}
        <section className="py-20 bg-slate-100">
             <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Desafios do Alto Volume</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: 'trending_up', title: 'Alta Demanda', desc: 'Volume massivo vindo das redes sociais.' },
                        { icon: 'balance', title: 'Escalabilidade', desc: 'Crescer sem perder o toque humano e premium.' },
                        { icon: 'schedule', title: 'Otimização', desc: 'Melhor uso do tempo do Dr. Thiago e equipe médica.' },
                        { icon: 'reviews', title: 'Gestão Digital', desc: 'Controle da experiência e reputação online.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-red-500 mb-4">{item.icon}</span>
                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* SLIDE 6: OPORTUNIDADES GERAIS */}
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Visão Geral</span>
                    <h2 className="text-4xl font-serif text-slate-900 mt-2">Oportunidades com IA</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Atendimento */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                             <span className="material-symbols-outlined text-blue-600">support_agent</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Atendimento 24/7</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><span className="text-blue-500">•</span> Triagem inteligente e FAQs</li>
                            <li className="flex gap-2"><span className="text-blue-500">•</span> Agendamento automatizado</li>
                            <li className="flex gap-2"><span className="text-blue-500">•</span> Simulação 3D pré-operatória</li>
                            <li className="flex gap-2"><span className="text-blue-500">•</span> Acompanhamento pós-op digital</li>
                        </ul>
                    </div>

                    {/* Marketing */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                             <span className="material-symbols-outlined text-purple-600">campaign</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Marketing & CRM</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><span className="text-purple-500">•</span> Análise de sentimento (Social)</li>
                            <li className="flex gap-2"><span className="text-purple-500">•</span> Segmentação de leads</li>
                            <li className="flex gap-2"><span className="text-purple-500">•</span> Personalização de jornada</li>
                            <li className="flex gap-2"><span className="text-purple-500">•</span> CRM 360° do paciente</li>
                        </ul>
                    </div>

                    {/* Operação */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                             <span className="material-symbols-outlined text-emerald-600">settings_suggest</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Operação & Compliance</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><span className="text-emerald-500">•</span> Análise preditiva de demanda</li>
                            <li className="flex gap-2"><span className="text-emerald-500">•</span> Otimização de estoque/materiais</li>
                            <li className="flex gap-2"><span className="text-emerald-500">•</span> Geração de conteúdo educativo</li>
                            <li className="flex gap-2"><span className="text-emerald-500">•</span> Gestão documental e LGPD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* SLIDE 7: SIMULADOR DE CIRURGIA VIRTUAL */}
        <section className="py-24 bg-slate-800 border-t border-slate-700">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    <div className="flex-1 order-2 md:order-1">
                         {/* TABLET MOCKUP */}
                         <div className="bg-black border-8 border-slate-900 rounded-[32px] shadow-2xl overflow-hidden relative aspect-[4/3]">
                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-slate-900 flex">
                                {/* Left: Image Analysis */}
                                <div className="w-1/2 relative overflow-hidden border-r border-slate-800">
                                    <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop" alt="Patient" className="w-full h-full object-cover opacity-80" />
                                    {/* Overlay Graphics */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                        <path d="M 100 150 Q 150 200 200 150" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="2" fill="none" strokeDasharray="4"/>
                                        <circle cx="120" cy="250" r="10" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="2" fill="rgba(59, 130, 246, 0.2)" />
                                        <circle cx="180" cy="250" r="10" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="2" fill="rgba(59, 130, 246, 0.2)" />
                                    </svg>
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-[10px] px-2 py-1 rounded font-mono">
                                        ANÁLISE BIOMÉTRICA
                                    </div>
                                </div>

                                {/* Right: AI Controls */}
                                <div className="w-1/2 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                                            <span className="material-symbols-outlined text-lg">auto_awesome</span>
                                            <span className="text-xs font-bold uppercase tracking-widest">Cirurgia Virtual</span>
                                        </div>
                                        <h3 className="text-white font-light text-lg leading-tight mb-4">Simulação em Tempo Real</h3>
                                        
                                        <div className="space-y-3">
                                            <div className="bg-slate-800/50 p-3 rounded-lg border border-white/5">
                                                <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                    <span>Volume Labial</span>
                                                    <span className="text-blue-400">+20%</span>
                                                </div>
                                                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="h-full w-[60%] bg-blue-500"></div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-800/50 p-3 rounded-lg border border-white/5">
                                                <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                    <span>Lifting de Sobrancelha</span>
                                                    <span className="text-blue-400">Médio</span>
                                                </div>
                                                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="h-full w-[40%] bg-blue-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Voice Command Feedback */}
                                    <div className="bg-blue-600/20 border border-blue-500/30 p-4 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                             <span className="text-[10px] text-blue-300 uppercase font-bold">Ouvindo Dr. Thiago</span>
                                        </div>
                                        <p className="text-white text-sm italic">"Aplique um preenchimento sutil nos lábios e levante o olhar..."</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className="flex-1 order-1 md:order-2 text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            Nova Funcionalidade
                        </div>
                        <h2 className="text-4xl font-bold mb-6">O Diferencial: <br/><span className="text-blue-400">Consultoria com Visão Computacional</span></h2>
                        <p className="text-slate-300 text-lg mb-8 font-light">
                            Eleve o nível da consulta presencial. Utilize o tablet para tirar uma foto da paciente e, através de comandos de voz para nossa IA, simule procedimentos estéticos em tempo real.
                        </p>
                        
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                                    <span className="material-symbols-outlined text-blue-400">face_retouching_natural</span>
                                </span>
                                <div>
                                    <h4 className="font-bold text-lg">Simulação Instantânea</h4>
                                    <p className="text-slate-400 text-sm">A paciente vê na hora o potencial do resultado, aumentando o desejo e a confiança.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                                    <span className="material-symbols-outlined text-blue-400">record_voice_over</span>
                                </span>
                                <div>
                                    <h4 className="font-bold text-lg">Comando de Voz Natural</h4>
                                    <p className="text-slate-400 text-sm">Você não perde tempo clicando. Apenas peça: "Aumente a projeção do queixo" e a IA executa.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        {/* SLIDE 8: MÁQUINA DE CONTEÚDO (AVATAR/CLONE) */}
        <section className="py-24 bg-indigo-950 text-white overflow-hidden relative">
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-600/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Copy Left */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="material-symbols-outlined text-sm">auto_videocam</span>
                            Social Media Automation
                        </div>
                        <h2 className="text-5xl font-bold leading-tight mb-6">
                            Sua Imagem. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Escala Infinita.</span>
                        </h2>
                        <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                            Não perca mais horas gravando Reels. Criamos um <strong>Clone Digital (Avatar)</strong> perfeito do Dr. Thiago. 
                            Nossa IA gera roteiros, produz os vídeos e dubla em qualquer idioma automaticamente.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-indigo-900/50 p-4 rounded-xl border border-indigo-800">
                                <div className="text-2xl font-bold text-white mb-1">Anúncios</div>
                                <p className="text-sm text-indigo-300">Geração em massa de variações de anúncios para testar o que converte mais.</p>
                            </div>
                             <div className="bg-indigo-900/50 p-4 rounded-xl border border-indigo-800">
                                <div className="text-2xl font-bold text-white mb-1">Vídeo Aulas</div>
                                <p className="text-sm text-indigo-300">Educação do paciente com vídeos explicativos sobre procedimentos.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Right - Phone Mockups */}
                    <div className="flex-1 flex justify-center items-center relative">
                         {/* Phone Frame */}
                         <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden z-10">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                            
                            {/* Screen Content (TikTok/Reels Style) */}
                            <div className="w-full h-full bg-gray-900 relative">
                                {/* Background Image (Simulating Doctor Video) */}
                                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="AI Avatar Doctor" />
                                
                                {/* UI Overlays */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-white">
                                             {/* Profile Pic Placeholder */}
                                             <div className="w-full h-full bg-blue-600"></div>
                                        </div>
                                        <span className="text-white font-bold text-sm">Dr. Thiago AI</span>
                                        <span className="bg-blue-500 text-[10px] px-1 rounded text-white">Seguir</span>
                                    </div>
                                    <p className="text-white text-sm mb-2">Lipo HD: O segredo da definição natural 💪✨ #cirurgiaplastica #lipohd</p>
                                    <div className="flex items-center gap-2 text-xs text-white/80">
                                        <span className="material-symbols-outlined text-sm">music_note</span>
                                        <span>Som Original - Clínica Paoliello</span>
                                    </div>
                                </div>

                                {/* Right Side Actions */}
                                <div className="absolute bottom-20 right-2 flex flex-col items-center gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <span className="material-symbols-outlined text-white text-2xl fill-current">favorite</span>
                                        </div>
                                        <span className="text-white text-xs font-bold mt-1">12.4K</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <span className="material-symbols-outlined text-white text-2xl">chat_bubble</span>
                                        </div>
                                        <span className="text-white text-xs font-bold mt-1">342</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <span className="material-symbols-outlined text-white text-2xl">share</span>
                                        </div>
                                        <span className="text-white text-xs font-bold mt-1">Share</span>
                                    </div>
                                </div>

                                {/* AI Tag */}
                                <div className="absolute top-12 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/20 flex items-center gap-1">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-mono uppercase text-white">AI Generated</span>
                                </div>
                            </div>
                         </div>
                         
                         {/* Floating Cards behind */}
                         <div className="absolute top-20 -right-12 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 animate-bounce" style={{ animationDuration: '3s' }}>
                             <div className="text-xs font-bold text-purple-300 mb-1">Tradução Auto</div>
                             <div className="flex gap-1">
                                 <span className="text-lg">🇺🇸</span>
                                 <span className="text-lg">🇪🇸</span>
                                 <span className="text-lg">🇫🇷</span>
                             </div>
                         </div>
                         
                         <div className="absolute bottom-32 -left-12 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 animate-bounce" style={{ animationDuration: '4s' }}>
                             <div className="text-xs font-bold text-green-300 mb-1">Tempo Economizado</div>
                             <div className="text-xl font-bold text-white">15h / mês</div>
                         </div>
                    </div>

                </div>
            </div>
        </section>

        {/* SLIDE 9: MVP CLÍNICA DE ESTÉTICA (BLUEPRINT) */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-t border-slate-800">
            {/* Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-700 pb-8">
                    <div>
                        <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">Solução Prática</span>
                        <h2 className="text-4xl font-bold mt-2">MVP: Clínica de Estética</h2>
                        <p className="text-slate-400 mt-2 max-w-xl">Reorganização completa da comunicação para gerar agendamentos imediatos e aumentar o ticket médio.</p>
                    </div>
                    {/* Quick Stats */}
                    <div className="flex gap-6 mt-6 md:mt-0">
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-blue-400">Imediato</span>
                            <span className="text-xs text-slate-500 uppercase">Agendamento</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-green-400">Auto</span>
                            <span className="text-xs text-slate-500 uppercase">Reativação</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* CARD 1: WHATSAPP AUTOMÁTICO */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition-colors group">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-white">chat</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">1. WhatsApp Automático</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-bold text-blue-300 uppercase mb-1">Chat Inteligente</h4>
                                <p className="text-sm text-slate-300">Responde dúvidas sobre Botox, Preenchimento, Laser, etc. Usa gatilhos de curiosidade para não revelar preço direto.</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-blue-300 uppercase mb-1">Agenda & Leads</h4>
                                <p className="text-sm text-slate-300">Coleta nome, interesse e até fotos da pele. Sugere dias livres automaticamente.</p>
                            </div>
                            <div className="bg-slate-900/50 p-3 rounded border border-slate-700 text-xs font-mono text-green-300">
                                Lead Entrou → Info → Agendou? <br/>
                                [Sim] Confirmação <br/>
                                [Não] Lembrete Persuasivo
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: REATIVAÇÃO (ROI) */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-green-500/50 transition-colors group">
                         <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-white">history</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">2. Reativação (ROI Rápido)</h3>
                         <div className="space-y-4">
                            <p className="text-sm text-slate-300">Campanha focada em "Clientes Inativas" para gerar caixa imediato.</p>
                            
                            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 italic text-slate-300 text-sm relative">
                                <span className="absolute -top-2 -left-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded">Copy Exemplo</span>
                                "Olá! Notamos que você não veio nos visitar ultimamente 😊 Estamos com um benefício exclusivo: avaliação gratuita + indicação do melhor tratamento. Quer reservar?"
                            </div>
                            
                            <ul className="text-sm text-slate-300 space-y-2 mt-2">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-green-400">check</span> Oferta de Benefício Real</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-green-400">check</span> CTA Direto para Agenda</li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-green-400">check</span> Foto Profissional no envio</li>
                            </ul>
                        </div>
                    </div>

                    {/* CARD 3: MÓDULOS DO SISTEMA */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-purple-500/50 transition-colors group">
                         <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-white">grid_view</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">3. Módulos do MVP</h3>
                        
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-start gap-3 p-2 rounded hover:bg-slate-700/50 transition-colors">
                                <span className="material-symbols-outlined text-purple-400">person</span>
                                <div>
                                    <strong className="block text-sm text-white">Pacientes</strong>
                                    <span className="text-xs text-slate-400">Cadastro, Prontuário, Fotos (Pré/Pós), Termo Digital (PDF).</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-2 rounded hover:bg-slate-700/50 transition-colors">
                                <span className="material-symbols-outlined text-purple-400">event</span>
                                <div>
                                    <strong className="block text-sm text-white">Agendamento</strong>
                                    <span className="text-xs text-slate-400">Integrada, Lembretes auto e Controle de retornos.</span>
                                </div>
                            </div>
                             <div className="flex items-start gap-3 p-2 rounded hover:bg-slate-700/50 transition-colors">
                                <span className="material-symbols-outlined text-purple-400">monitoring</span>
                                <div>
                                    <strong className="block text-sm text-white">Dashboard</strong>
                                    <span className="text-xs text-slate-400">Nº Pacientes, Faturamento, Procedimentos Top.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* NOVA SEÇÃO: O CÉREBRO DA CLÍNICA (SISTEMA PRÓPRIO & ASSISTENTE) */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-40"></div>
             
             <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left Side: Descrição */}
                    <div className="flex-1">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                            Gestão Executiva via Voz
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            O Cérebro da Clínica: <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Sistema Proprietário & Inteligente.</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 font-light">
                            Liberte-se da análise manual de planilhas. Criaremos um <strong>Ecossistema White-Label</strong> onde todos os dados da clínica (Financeiro, Agenda, Estoque) são centralizados e processados por IA.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-amber-400">hub</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Centralização Total</h4>
                                    <p className="text-sm text-slate-400">Uma única fonte da verdade. Agendamento, Pagamentos e Marketing integrados em um só painel.</p>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-amber-400">mic</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Assistente Executivo Pessoal ("Jarvis")</h4>
                                    <p className="text-sm text-slate-400">Você não lê relatórios, você ouve. Pergunte: "Como foi o faturamento hoje?" e receba a análise falada instantaneamente.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visualização do Chat de Voz e Dashboard */}
                    <div className="flex-1 w-full">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
                             {/* Dashboard Mockup Background */}
                             <div className="grid grid-cols-2 gap-4 mb-6 opacity-30 blur-[1px]">
                                 <div className="bg-slate-800 h-24 rounded-lg"></div>
                                 <div className="bg-slate-800 h-24 rounded-lg"></div>
                                 <div className="bg-slate-800 h-32 rounded-lg col-span-2"></div>
                             </div>

                             {/* Voice Interaction Overlay */}
                             <div className="absolute inset-0 flex items-center justify-center p-6">
                                 <div className="w-full max-w-md flex flex-col gap-4">
                                     
                                     {/* Doctor Message */}
                                     <div className="self-end bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm shadow-lg max-w-[85%] flex items-center gap-3">
                                         <p className="text-sm">Resumo do dia, por favor.</p>
                                         <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                                             <span className="material-symbols-outlined text-xs">person</span>
                                         </div>
                                     </div>

                                     {/* AI Processing Animation */}
                                     <div className="flex gap-1 ml-2">
                                         <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                                         <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                                         <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                                     </div>

                                     {/* AI Response Card */}
                                     <div className="self-start bg-slate-800 border border-slate-700 text-slate-200 p-4 rounded-2xl rounded-tl-sm shadow-xl w-full">
                                         <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
                                             <span className="material-symbols-outlined text-amber-400">graphic_eq</span>
                                             <span className="text-xs font-bold text-amber-400 uppercase">Executive AI</span>
                                         </div>
                                         <div className="space-y-3">
                                             <div className="flex justify-between items-center">
                                                 <span className="text-sm text-slate-400">Faturamento Hoje</span>
                                                 <span className="text-lg font-bold text-white">R$ 42.500</span>
                                             </div>
                                             <div className="flex justify-between items-center">
                                                 <span className="text-sm text-slate-400">Cirurgias Amanhã</span>
                                                 <span className="text-sm font-bold text-white bg-green-500/20 text-green-300 px-2 py-0.5 rounded">3 Confirmadas</span>
                                             </div>
                                             <div className="bg-red-500/10 border border-red-500/20 p-2 rounded text-xs text-red-200 flex gap-2 items-start">
                                                 <span className="material-symbols-outlined text-sm mt-0.5">warning</span>
                                                 Estoque de Toxina Botulínica abaixo do mínimo. Sugiro reposição.
                                             </div>
                                         </div>
                                         <div className="mt-3 pt-2 border-t border-slate-700 text-[10px] text-slate-500 flex justify-between">
                                             <span>Dados processados em tempo real</span>
                                             <span className="material-symbols-outlined text-sm">volume_up</span>
                                         </div>
                                     </div>

                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* SLIDE 10: BENEFÍCIOS E IMPACTO */}
        <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-serif mb-8">Impacto Projetado</h2>
                        <p className="text-blue-200 text-lg mb-8">A implementação estratégica de IA não apenas moderniza a clínica, mas multiplica a capacidade de entrega de valor.</p>
                        <div className="flex flex-col gap-4">
                             <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg border border-white/10">
                                <span className="material-symbols-outlined text-3xl">trending_up</span>
                                <div>
                                    <div className="font-bold text-xl">ROI em 8-12 meses</div>
                                    <div className="text-sm text-blue-200">Retorno sobre investimento acelerado</div>
                                </div>
                             </div>
                             <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg border border-white/10">
                                <span className="material-symbols-outlined text-3xl">diamond</span>
                                <div>
                                    <div className="font-bold text-xl">Diferenciação</div>
                                    <div className="text-sm text-blue-200">Fortalecimento de marca premium</div>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white text-blue-900 p-8 rounded-2xl text-center">
                            <div className="text-5xl font-bold mb-2">-60%</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-blue-600">Tempo Administrativo</div>
                            <p className="text-sm text-slate-500 mt-2">Redução drástica em tarefas manuais e repetitivas.</p>
                        </div>
                         <div className="bg-blue-800 text-white p-8 rounded-2xl text-center border border-blue-700">
                            <div className="text-5xl font-bold mb-2 text-blue-300">+40%</div>
                            <div className="text-sm font-bold uppercase tracking-widest">Capacidade de Atendimento</div>
                            <p className="text-xs text-blue-200 mt-2">Escala operacional sem aumento proporcional de equipe.</p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* SLIDE 11: METODOLOGIA */}
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Metodologia de Implementação</h2>
                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 md:left-1/2 md:-ml-0.5"></div>
                    
                    <div className="space-y-12">
                        {[
                            { step: '1', title: 'Diagnóstico', time: '2 semanas', desc: 'Mapeamento profundo de processos e definição de metas.' },
                            { step: '2', title: 'Piloto', time: 'Curto Prazo', desc: 'Implementação em 1 área prioritária para validar hipóteses.' },
                            { step: '3', title: 'Implementação', time: 'Médio Prazo', desc: 'Expansão gradual por células operacionais.' },
                            { step: '4', title: 'Treinamento', time: 'Contínuo', desc: 'Cultura de IA: Protocolos, playbooks e capacitação da equipe.' },
                            { step: '5', title: 'Monitoramento', time: 'Trimestral', desc: 'Análise de KPIs e otimização constante.' }
                        ].map((item, i) => (
                            <div key={i} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 md:w-1/2"></div>
                                <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xs font-bold z-10">
                                    {item.step}
                                </div>
                                <div className="flex-1 ml-16 md:ml-0 md:w-1/2 p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded">{item.time}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <footer className="py-12 bg-slate-900 text-center text-slate-500 text-sm">
            <p>© 2024 Proposta Confidencial • Dr. Thiago Paoliello</p>
        </footer>
    </div>
  );
}