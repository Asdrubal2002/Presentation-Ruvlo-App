import React from "react";
import img1 from "./imgs/segunda.jpg";
import img2 from "./imgs/primera.jpg";
import img3 from "./imgs/tercera.jpg";
import img4 from "./imgs/cuarta.jpg";
import img5 from "./imgs/quinta.jpg";
import img6 from "./imgs/sexta.jpg";
import img7 from "./imgs/septima.jpg";


import { CloudCog, DownloadCloud, ShoppingBag, UserPlus } from "lucide-react";
import { useEffect } from "react";

const mockups = [
    {
        src: img1,
        alt: "Pantalla 1",
        title: "Encuentra negocios fácilmente",
        desc: "Usa la barra de búsqueda, toca el botón (Ver negocios cercanos) con GPS activado o presiona (Ver todos los negocios) sin GPS.",
        colors: "from-blue-900/40 to-indigo-800/40",
    },
    {
        src: img2,
        alt: "Pantalla 2",
        title: "Descubre negocios sin límites",
        desc: "Explora todos los negocios y utiliza filtros por localidad, ciudad, nombre o descripción.",
        colors: "from-pink-900/40 to-purple-800/40",
    },
    {
        src: img3,
        alt: "Pantalla 3",
        title: "Descubre negocios cerca de ti",
        desc: "Explora productos y negocios automáticamente según tu ubicación y tus preferencias.",
        colors: "from-green-900/40 to-emerald-800/40",
    },
    {
        src: img4,
        alt: "Pantalla 4",
        title: "Negocios seguros y atractivos",
        desc: "Descubre perfiles confiables y llamativos, diseñados para brindarte confianza y buena presentación.",
        colors: "from-yellow-900/40 to-orange-800/40",
    },
    {
        src: img5,
        alt: "Pantalla 5",
        title: "Encuentra lo que necesitas",
        desc: "Explora diferentes negocios y crea tus canastas sin complicarte.",
        colors: "from-cyan-900/40 to-sky-800/40",
    },
    {
        src: img6,
        alt: "Pantalla 6",
        title: "Descubre el contenido que te gusta",
        desc: "Sigue explorando productos, negocios, datos y entretenimiento creados y compartidos por tus favoritos.",
        colors: "from-cyan-900/40 to-sky-800/40",
    },
    {
        src: img7,
        alt: "Pantalla 7",
        title: "Inicia sesión para personalizar tus gustos",
        desc: "Crea tu cuenta y lánzate con tu emprendimiento en la aplicación móvil de Ruvlo.\n\nDatos de prueba:\nUsuario: Usuario1\nClave: 1234",
        colors: "from-cyan-900/40 to-sky-800/40",
    },
];
const steps = [
    {
        icon: <DownloadCloud className="w-12 h-12 text-purple-400 mx-auto group-hover:scale-110 group-hover:text-purple-300 transition-transform duration-300" />,
        title: "1. Descarga",
        desc: "Obtén la aplicación desde la tienda appgallery de Huawei.",
        gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
        icon: <CloudCog className="w-12 h-12 text-cyan-400 mx-auto group-hover:scale-110 group-hover:text-cyan-300 transition-transform duration-300" />,
        title: "2. Latencia",
        desc: "Actualmente la aplicación corre en un servidor gratuito, lo cual puede generar ligeras demoras en la carga. Sin embargo, esto valida el concepto y demuestra que con infraestructura escalable de pago el rendimiento sería aún más ágil y robusto.",
        gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
        icon: <UserPlus className="w-12 h-12 text-green-400 mx-auto group-hover:scale-110 group-hover:text-green-300 transition-transform duration-300" />,
        title: "3. Disfruta",
        desc: "Para explorar las funciones, inicia sesión con la cuenta de prueba incluida: Usuario: Usuario1, Clave: 1234, o crea tu cuenta personalizada.",
        gradient: "from-green-500/10 to-emerald-500/10",
    },
];

export default function AppShowcase() {
    useEffect(() => {
        // Al montar el componente, ir al inicio de la ventana
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col justify-center p-10 space-y-28 overflow-x-hidden">
            {/* 🔹 Sección de primeros pasos */}
            <section className="text-center space-y-10 relative">
                {/* Fondos decorativos difuminados */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white relative z-10">
                    Simples pasos para aprovechar <span className="text-blue-400">Ruvlo</span>
                </h1>

                <div className="grid md:grid-cols-3 gap-10 mt-10 relative z-10">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-700 relative overflow-hidden group"
                        >
                            {/* Fondo degradado interno */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-tr ${step.gradient} rounded-2xl`}
                            ></div>

                            <div className="relative z-10 space-y-4">
                                {step.icon}
                                <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                                <p className="text-gray-300">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🔹 Mockups con descripción + figuras decorativas */}
            {mockups.map((m, idx) => (
                <div
                    key={idx}
                    className={`flex flex-col lg:flex-row items-center gap-6 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"
                        }`}
                >
                    
                    {/* Mockup con ligera rotación */}
                    <div className="flex-1 relative">
                        <div
                            className={`relative z-10 w-full max-w-xs mx-auto aspect-[9/18] transform transition-transform duration-500 ${idx % 2 === 0 ? "rotate-3 hover:rotate-0" : "-rotate-3 hover:rotate-0"
                                }`}
                        >
                            {/* Glow */}
                            <div
                                className={`absolute -inset-3 rounded-[35px] bg-gradient-to-r ${m.colors} opacity-80 blur-xl animate-pulse-slow`}
                            ></div>

                            {/* Mockup */}
                            <div className="relative overflow-hidden rounded-[28px] shadow-2xl border-2 border-gray-800/50 h-full">
                                {/* Marco del dispositivo */}
                                <div className="absolute inset-0 border-[12px] border-gray-900 rounded-[24px] pointer-events-none z-10"></div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-lg z-10"></div>

                                {/* Imagen ajustada */}
                                <img
                                    src={m.src}
                                    alt={m.alt}
                                    className="w-full h-full object-contain relative z-0 p-0.5 bg-black"
                                />

                                {/* Efectos */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/70 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* Descripción con decoraciones */}
                    <div className="flex-1 text-center lg:text-left relative">
                        {/* Figuras de fondo */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
                            {m.title}
                        </h2>
                        <p className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 relative z-10 whitespace-pre-line">
                            {m.desc}
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
    );
}
