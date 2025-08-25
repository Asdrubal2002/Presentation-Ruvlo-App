import React from "react";
import img1 from "./imgs/primera.jpg";
import { Link } from "react-router-dom";
import vid from "./imgs/videoo.mp4"
import img2 from './imgs/colom.jpg'
import img8 from './imgs/octava.jpg'



function Landing() {
    return (
        <div className="font-sans text-gray-800 bg-black">
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
                {/* Columna izquierda - Contenido premium */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-28 py-16 relative overflow-hidden">
                    {/* Efectos de partículas luminosas */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-5 animate-float-slow"></div>
                        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-900 rounded-full mix-blend-screen filter blur-[120px] opacity-5 animate-float"></div>
                    </div>

                    {/* Contenido principal */}
                    <div className="relative z-10">
                        <header className="mb-12">
                            <div className="flex items-center mb-6 space-x-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 tracking-tighter">
                                    Ruvlo
                                </h1>
                                <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-blue-400 text-xs font-mono rounded-full">
                                    v1.0 BETA
                                </span>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
                                La <span className="text-blue-300">revolución digital</span> para emprendedores.
                            </p>
                        </header>

                        <section className="max-w-2xl mb-12">
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent mr-4"></div>
                                <h2 className="text-2xl md:text-3xl font-normal text-gray-100 tracking-tight">
                                    Economía popular <span className="text-blue-300">reinventada</span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg text-gray-400 font-light leading-relaxed">
                                    Ruvlo es la aplicación mobil que <span className="text-white">conecta directamente</span> a emprendedores con su audiencia, ofreciendo una experiencia <span className="text-white">personalizada, fluida y segura</span>.
                                </p>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Negocios digitales interactivos</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Marketing personalizado, estrategias comerciales</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Sistema de descubrimiento inteligente con GPS y QR</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Negocios Digitales con confianza Real</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <a href="https://appgallery.cloud.huawei.com/ag/n/app/C115034911?locale=es_US&source=appshare&subsource=C115034911&shareTo=com.android.bluetooth&shareFrom=appmarket&shareIds=7c0fe389d25b4bc193975d0a0009e387_com.android.bluetooth&callType=SHARE" target="_blank" rel="noopener noreferrer">
                                <button class="px-8 py-4 border border-gray-700 hover:border-gray-600 text-gray-200 font-medium rounded-lg transition-all duration-300 bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                    <span>Disponible en AppGallery</span>
                                </button>
                            </a>

                            <a href="https://github.com/Asdrubal2002/AppBackend" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-4 border border-gray-700 hover:border-gray-600 text-gray-200 font-medium rounded-lg transition-all duration-300 bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                    <span>Ver Repositorio</span>
                                </button>
                            </a>

                        </div>

                        {/* Badges de tiendas premium */}
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">

                                <span>Disponible en AppGallery y próximamente en más tiendas.</span>
                            </div>
                            <div className="flex space-x-4">
                                <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg p-3 border border-gray-700 shadow">
                                    <img src="https://img.icons8.com/ios-filled/200/FFFFFF/mac-os.png" alt="App Store" className="h-10" />
                                </div>
                                <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg p-3 border border-gray-700 shadow">
                                    <img src="https://img.icons8.com/fluent/200/FFFFFF/google-play.png" alt="Play Store" className="h-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna derecha - Visualización premium */}
                <div className="hidden md:flex flex-1 items-center justify-center p-12 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                    {/* Efecto de dispositivo premium */}
                    <div className="relative z-10 w-full max-w-md">
                        <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-blue-900/40 to-indigo-800/40 opacity-80 blur-xl animate-pulse-slow"></div>
                        <div className="relative overflow-hidden rounded-[32px] shadow-2xl border-2 border-gray-800/50">
                            {/* Mockup de dispositivo */}
                            <div className="absolute inset-0 border-[14px] border-gray-900 rounded-[24px] pointer-events-none z-10"></div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-lg z-10"></div>

                            {/* Imagen de la app */}
                            <img
                                src={img1}
                                alt="Interfaz Premium de Ruvlo"
                                className="w-full h-auto object-cover relative z-0 p-2"
                            />

                            {/* Efectos de pantalla */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/70 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Elementos decorativos dinámicos */}
                    <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-blue-900/30 filter blur-[100px] animate-float-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-900/30 filter blur-[120px] animate-float"></div>
                </div>
            </div>

            {/* Animaciones personalizadas */}
            <style jsx global>{`
     @keyframes float {
       0%, 100% { transform: translateY(0) translateX(0); }
       50% { transform: translateY(-20px) translateX(10px); }
     }
     @keyframes float-slow {
       0%, 100% { transform: translateY(0) translateX(0); }
       50% { transform: translateY(10px) translateX(-10px); }
     }
     @keyframes pulse-slow {
       0%, 100% { opacity: 0.8; }
       50% { opacity: 0.4; }
     }
     .animate-float { animation: float 8s ease-in-out infinite; }
     .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
     .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
   `}</style>




            {/* FUNCIONES */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/30 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/30 to-transparent"></div>
                </div>

                {/* Contenido principal */}
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Encabezado con efecto especial */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 mb-6">
                            Potenciar el Comercio Colombiano es la meta
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Descubre las herramientas para transformar tu experiencia de compra y venta
                        </p>
                    </div>

                    {/* Grid de características premium */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Tarjeta 1 - Negocio Digital */}
                        <div className="bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
                            <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">Negocio Digital</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Deslumbra a tus clientes con vitrinas digitales interactivas: catálogos vivos, ofertas en tiempo real y combos que venden solos, ¡todo en un mismo lugar!
                            </p>
                            {/* <div className="mt-6 pt-6 border-t border-gray-700/50 flex items-center">
                   <span className="text-sm text-blue-400 font-medium">Explorar más</span>
                   <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                 </div> */}
                        </div>

                        {/* Tarjeta 2 - Búsqueda Inteligente */}
                        <div className="bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
                            <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">Búsqueda Inteligente</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Encuentra exactamente lo que necesitas con nuestro sistema de geolocalización avanzada, reconocimiento por QR y filtros personalizados.
                            </p>
                            {/* <div className="mt-6 pt-6 border-t border-gray-700/50 flex items-center">
                   <span className="text-sm text-indigo-400 font-medium">Ver demo</span>
                   <svg className="w-4 h-4 ml-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                 </div> */}
                        </div>

                        {/* Tarjeta 3 - Compra Segura */}
                        <div className="bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
                            <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">Publicidad personalizada</h3>
                            <p className="text-gray-400 leading-relaxed">
                                En Ruvlo, cada publicación de tu negocio se convierte en un imán de clientes nuevos. ¡Publica, vende y crece, todo dentro de la app!              </p>
                            {/* <div className="mt-6 pt-6 border-t border-gray-700/50 flex items-center">
                   <span className="text-sm text-purple-400 font-medium">Cómo funciona</span>
                   <svg className="w-4 h-4 ml-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                   </svg>
                 </div> */}
                        </div>
                    </div>

                    {/* CTA inferior */}
                    {/* <div className="mt-20 text-center">
               <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                 <span>Explora todas las características</span>
                 <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                 </svg>
               </button>
             </div> */}
                </div>
            </section>


            <section className="py-20 px-6 bg-gray-100 relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent"></div>
                </div>

                {/* Contenido principal */}
                <div class="max-w-7xl mx-auto relative z-10">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500 mb-6">
                            Nuestros Objetivos de Desarrollo Sostenible
                        </h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ruvlo contribuye activamente a la Agenda 2030 de las Naciones Unidas
                        </p>
                    </div>

                    <div class="flex flex-wrap justify-center gap-8">
                        <div class="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-red-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div class="w-16 h-16 mb-4 rounded-lg bg-red-50 flex items-center justify-center">
                                <span class="text-2xl font-bold text-red-600">1</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2 text-center">Fin de la pobreza</h3>
                            <p class="text-gray-600 text-center">Reducir la pobreza en todas sus formas</p>
                        </div>

                        <div class="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-pink-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div class="w-16 h-16 mb-4 rounded-lg bg-pink-50 flex items-center justify-center">
                                <span class="text-2xl font-bold text-pink-600">5</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2 text-center">Igualdad de género</h3>
                            <p class="text-gray-600 text-center">Lograr la igualdad entre los géneros</p>
                        </div>

                        <div class="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-purple-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div class="w-16 h-16 mb-4 rounded-lg bg-purple-50 flex items-center justify-center">
                                <span class="text-2xl font-bold text-purple-600">8</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2 text-center">Trabajo decente</h3>
                            <p class="text-gray-600 text-center">Promover el crecimiento económico sostenido</p>
                        </div>

                        <div class="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-yellow-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div class="w-16 h-16 mb-4 rounded-lg bg-yellow-50 flex items-center justify-center">
                                <span class="text-2xl font-bold text-yellow-600">9</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2 text-center">Innovación e infraestructura</h3>
                            <p class="text-gray-600 text-center">Construir infraestructuras resilientes</p>
                        </div>

                        <div class="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-teal-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div class="w-16 h-16 mb-4 rounded-lg bg-teal-50 flex items-center justify-center">
                                <span class="text-2xl font-bold text-teal-600">10</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2 text-center">Reducción de desigualdades</h3>
                            <p class="text-gray-600 text-center">Reducir la desigualdad en y entre los países</p>
                        </div>

                        <div class="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-amber-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div class="w-16 h-16 mb-4 rounded-lg bg-amber-50 flex items-center justify-center">
                                <span class="text-2xl font-bold text-amber-600">11</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2 text-center">Ciudades sostenibles</h3>
                            <p class="text-gray-600 text-center">Lograr que las ciudades sean más inclusivas</p>
                        </div>
                    </div>


                </div>
            </section>


            {/* DEMO */}
            <section className="py-28 px-6 relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
                {/* Efectos de fondo dinámicos */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900 rounded-full filter blur-[100px] animate-float-slow"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-indigo-900 rounded-full filter blur-[120px] animate-float"></div>
                </div>

                {/* Contenido principal */}
                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Encabezado con efecto especial */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 mb-6">
                            Descubre la Experiencia Ruvlo
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Mira cómo podemos transformar la economía popular en una experiencia digital fluida e intuitiva
                        </p>
                    </div>

                    {/* Contenedor de video premium */}
                    <div className="relative group">
                        {/* Marco del dispositivo */}
                        <div className="absolute inset-0 rounded-[40px] border-2 border-gray-700/50 pointer-events-none z-20"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-6 bg-gray-800 rounded-b-lg z-20 border-l-2 border-r-2 border-b-2 border-gray-700/50 pointer-events-none"></div>



                        {/* Video embebido */}
                        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-all duration-500">
                            <iframe
                                className="w-full h-[500px]"
                                src={vid}
                                title="Demo Premium de Ruvlo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Efecto de brillo al hover */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>


                    {/* CTA inferior */}
                    {/* <div className="mt-16 text-center">
               <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
                 <span>Comienza tu prueba gratuita</span>
                 <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                 </svg>
               </button>
             </div> */}
                </div>
            </section>

            {/* Animaciones personalizadas */}
            <style jsx global>{`
     @keyframes float {
       0%, 100% { transform: translateY(0) translateX(0); }
       50% { transform: translateY(-20px) translateX(10px); }
     }
     @keyframes float-slow {
       0%, 100% { transform: translateY(0) translateX(0); }
       50% { transform: translateY(10px) translateX(-10px); }
     }
     .animate-float { animation: float 8s ease-in-out infinite; }
     .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
   `}</style>
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/80 px-8 py-16 shadow-2xl sm:rounded-[40px] sm:px-16 md:py-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:py-32 backdrop-blur-sm border border-gray-700/30">

                        {/* Efecto de gradiente circular */}
                        <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute top-1/2 left-1/2 -z-20 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="gradient">
                                    <stop stopColor="#221c97ff" />
                                    <stop offset={1} stopColor="#1c3dd1ff" />
                                </radialGradient>
                            </defs>
                        </svg>

                        {/* Contenido textual */}
                        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-22 lg:text-left">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Transformemos</span> la economía popular
                            </h2>
                            <p className="mt-6 text-xl leading-8 text-gray-300">
                                Únete a la revolución digital donde emprendedores y clientes se conectan sin fronteras. Potencia tus ventas con Ruvlo todo-en-uno.
                            </p>

                            {/* Botones de acción */}
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 lg:justify-start">
                                <Link
                                    to="/funtions"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center group"
                                >
                                    Descubre su funcionamiento
                                    <svg
                                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    to="/privacy"
                                    className="flex items-center text-lg font-medium text-blue-300 hover:text-blue-300 transition-colors duration-300 group"
                                >
                                    Ver política de privacidad
                                    <svg
                                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Mockup de aplicación */}
                        <div className="relative mt-16 h-96 lg:mt-8 lg:h-auto">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-800/30 to-indigo-800/30 opacity-80 blur-xl"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50">
                                <div className="absolute inset-0 border-[14px] border-gray-900/80 rounded-xl pointer-events-none z-10"></div>
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900/80 rounded-b-lg z-10"></div>
                                <img
                                    src={img2}
                                    alt="Interfaz Ruvlo"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/30 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animaciones personalizadas */}
            <style jsx global>{`
     @keyframes float {
       0%, 100% { transform: translateY(0) translateX(0); }
       50% { transform: translateY(-20px) translateX(10px); }
     }
     @keyframes float-slow {
       0%, 100% { transform: translateY(0) translateX(0); }
       50% { transform: translateY(10px) translateX(-10px); }
     }
     .animate-float { animation: float 8s ease-in-out infinite; }
     .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
   `}</style>
            {/* TECNOLOGÍAS */}
            <section className="py-28 px-6 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent"></div>
                </div>

                {/* Contenido principal */}
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Encabezado */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 mb-6">
                            Creación de la aplicación
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Construido con las mejores herramientas para ofrecerte una experiencia excepcional
                        </p>
                    </div>

                    {/* Tarjetas de tecnologías */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {/* React */}
                        <div className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div className="w-16 h-16 mb-4 rounded-lg bg-blue-50 flex items-center justify-center">
                                <svg className="w-10 h-10 text-blue-600" viewBox="0 0 128 128">
                                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1 2.3-2.3.7-4.5 1.5-6.9 2.3C8.2 50 1.4 56.6 1.4 64.8c0 8.1 6.9 14.8 15.3 16.3 2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.1.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.3-.7 4.5-1.5 6.9-2.3 8.5-1.5 15.3-8.1 15.3-16.3 0-8.2-6.8-14.8-15.2-16.3zM92.5 14.7c4.1 5.7 2.3 18-3.7 30.2-5.2-1.2-10.5-2-15.7-2.2-3.4-5-6.9-9.8-10.4-14 6.4-6.7 13-10.8 18-10.8 1.3 0 2.5.3 3.5.8.6.4 1.1.9 1.8 1.5 2.5.5zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6.1 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-6.9 1.4-10.5 1.9.6-2.5 1.1-5 1.5-7.6.5-2.7.9-5.4 1.2-8.1 2.1.6 4.3 3.1 8.5 4 12.5zm-25.6 27.1c-2.8-2.8-6.3-7.2-9.5-12.1 3.1-.2 6.1-.4 9.1-.7h.1c.5 0 1 0 1.5.1 3.1.3 6.1.5 9 .7-3.2 5-6.7 9.4-9.5 12.1-5.7 5.7-9.8 7.7-11.7 7.7-1.9-.1-6-2-11.7-7.7zm-26-58.7c-4.6-11.9-7.4-24.1-3.7-29.8.6-.4 1.1-.5 1.6-.5 4.9 0 11.5 4.1 18 10.8-3.5 4.2-7 9-10.4 14-5.2.2-10.5 1-15.7 2.2-5.9-12.1-7.7-24.4-3.8-30zm-15.2 70c1.5-3.5 2.7-6.9 3.8-10.3 1.4 4.1 3 8.3 4.8 12.5.4-2.7.8-5.4 1.2-8.1.4-2.6.9-5.1 1.5-7.6-3.6-.5-7.1-1.1-10.5-1.9.1-3.3.9-6.8 2.2-10.2-2.1-.7-4.2-1.5-6.2-2.3-6.5-1.1-11.4-4.3-11.4-7.4 0-3.2 4.9-6.4 11.4-7.4 5.4-.9 12.3-1.1 20-1.1h.1c3.5 0 7 .1 10.5.2 5.3 8.3 10.5 17.6 15.4 27.4-4.9 9.8-10.1 19.1-15.4 27.4-12.8 1.7-23.6 1.4-30.9 0-6.5-1.1-11.4-4.3-11.4-7.4 0-1.8 2-4 6.1-5.7 2-.8 4.2-1.5 6.4-2.2zm71.3-18.3c-1.4-4.1-3-8.3-4.8-12.5-.4 2.7-.8 5.4-1.2 8.1-.4 2.6-.9 5.1-1.5 7.6 3.6.5 7.1 1.1 10.5 1.9-1.1 3.3-2.3 6.8-3.8 10.2 2.1.7 4.2 1.5 6.2 2.3 6.5 1.1 11.4 4.3 11.4 7.4 0 3.2-4.9 6.4-11.4 7.4-7.3 1.3-18.1 1.6-30.9 0-5.3-8.3-10.5-17.6-15.4-27.4 4.9-9.8 10.1-19.1 15.4-27.4 3.5-.1 7-.2 10.5-.2h.1c7.7 0 14.6.2 20 1.1 6.5 1.1 11.4 4.3 11.4 7.4 0 3.1-4.9 6.3-11.4 7.4-2 .4-4.2 1-6.4 1.7z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">React Native</h3>
                            <p className="text-gray-600 text-center">Interfaces dinámicas y reactivas</p>
                        </div>

                        {/* Tailwind CSS */}
                        <div className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-indigo-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div className="w-16 h-16 mb-4 rounded-lg bg-indigo-50 flex items-center justify-center">
                                <svg className="w-10 h-10 text-indigo-500" viewBox="0 0 128 128">
                                    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
                            <p className="text-gray-600 text-center">Diseño ágil y consistente</p>
                        </div>

                        {/* Django */}
                        <div className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-green-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div className="w-16 h-16 mb-4 rounded-lg bg-green-50 flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" viewBox="0 0 128 128">
                                    <path fill="#092E20" d="M59.073 65.534c-1.61 0-3.14.28-4.59.83v23.08c1.45.55 2.98.83 4.59.83 8.66 0 15.93-7.47 24.38-22.4 25.4v-25.4H22.4V38.734h14.27v-8.66H0v77.32h36.67c3.68 0 6.32.55 7.94 1.66 3.23 2.21 4.84 6.07 4.84 11.59H128V38.735H59.073v26.8zm0 0"></path><path fill="#092E20" d="M59.073 38.734H90.93v8.66H59.073zm0 0"></path><path fill="#FFFFFF" d="M90.93 38.734h37.33v8.66H90.93zm0 0"></path><path fill="#092E20" d="M90.93 65.534h37.33v8.66H90.93zm0 0"></path><path fill="#092E20" d="M90.93 92.334h37.33v8.66H90.93zm0 0"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Python</h3>
                            <p className="text-gray-600 text-center">Backend robusto y seguro</p>
                        </div>

                        {/* PostgreSQL */}
                        <div className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-2xl p-8 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md flex flex-col items-center">
                            <div className="w-16 h-16 mb-4 rounded-lg bg-blue-50 flex items-center justify-center">
                                <svg className="w-10 h-10 text-blue-700" viewBox="0 0 128 128">
                                    <path d="M63.91 2.18C29.43 2.18 1.37 30.24 1.37 64.72c0 34.48 28.06 62.54 62.54 62.54 34.48 0 62.54-28.06 62.54-62.54 0-34.48-28.06-62.54-62.54-62.54zm30.48 102.6c-11.73 11.73-30.48 11.73-42.21 0-11.73-11.73-11.73-30.48 0-42.21 11.73-11.73 30.48-11.73 42.21 0 11.73 11.73 11.73 30.48 0 42.21z" fill="#336791"></path><path d="M63.91 22.45c-23.34 0-42.27 18.93-42.27 42.27 0 23.34 18.93 42.27 42.27 42.27 23.34 0 42.27-18.93 42.27-42.27 0-23.34-18.93-42.27-42.27-42.27zm30.48 62.54c-8.79 8.79-22.69 8.79-31.48 0-8.79-8.79-8.79-22.69 0-31.48 8.79-8.79 22.69-8.79 31.48 0 8.79 8.79 8.79 22.69 0 31.48z" fill="#FFFFFF"></path><path d="M63.91 42.72c-12.17 0-22.05 9.88-22.05 22.05 0 12.17 9.88 22.05 22.05 22.05 12.17 0 22.05-9.88 22.05-22.05 0-12.17-9.88-22.05-22.05-22.05zm15.34 22.05c0 8.47-6.87 15.34-15.34 15.34-8.47 0-15.34-6.87-15.34-15.34 0-8.47 6.87-15.34 15.34-15.34 8.47 0 15.34 6.87 15.34 15.34z" fill="#336791"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">PostgreSQL y MongoDB</h3>
                            <p className="text-gray-600 text-center">Base de datos empresarial</p>
                        </div>
                    </div>

                    {/* Nota adicional */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 italic">
                            Y muchas otras tecnologías que hacen de Ruvlo una aplicación móvil de alto rendimiento
                        </p>
                    </div>
                </div>
            </section>

            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-blue-400">El futuro está en lo local</h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                        Nuestra diferencia
                    </p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Cercanía a la comunidad</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        En Ruvlo encuentras negocios cercanos a ti y apoyas a emprendedores locales.                                    </p>
                                </div>
                                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[24px] border-x-[3px] border-t-[3px] border-gray-700 bg-gray-900 outline outline-white/20">
                                        <img
                                            alt=""
                                            src={img8}
                                            className="size-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Inteligencia artificial</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        Ruvlo personaliza tu experiencia y te conecta con negocios cercanos. Muy pronto, con IA, será aún más rápido e inteligente.

                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                                        className="w-full max-lg:max-w-xs"
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Seguridad y confianza</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        Todos los negocios en Ruvlo son verificados para darte confianza y seguridad al apoyar a emprendedores locales.


                                    </p>
                                </div>
                                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                                        className="h-[min(152px,40cqw)] object-cover"
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
                        </div>
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">APIs</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                                        Nuestra tecnología está pensada para escalar. Gracias a APIs robustas, Ruvlo podrá integrarse fácilmente con más servicios y crecer contigo.                                    </p>
                                </div>
                                <div className="relative min-h-120 w-full grow">
                                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                                        <div className="flex bg-gray-900 outline outline-white/5">
                                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                    NotificationSetting.jsx
                                                </div>
                                                <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-6 pb-14">



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                        </div>
                    </div>
                </div>
            </div>





            {/* FOOTER */}
            <footer className="bg-black text-white py-8 text-center">
                <p>© {new Date().getFullYear()} Ruvlo - Proyecto de Henry Rodríguez</p>
            </footer>
        </div>
    );
}

export default Landing;
