import React from "react";
import img1 from "./imgs/1.jpeg";
import img2 from "./imgs/im.jpeg";
import img3 from "./imgs/2.jpeg";
import img4 from "./imgs/im.jpeg";
import img5 from "./imgs/im.jpeg";
import { CloudCog, DownloadCloud, ShoppingBag, UserPlus } from "lucide-react";


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
        title: "Descubre nuevos negocios sin ubicación",
        desc: "Al ver todos los negocios puedes filtrar por tu localidad, ciudad o por nombre o descripción.",
        colors: "from-pink-900/40 to-purple-800/40",
    },
    {
        src: img3,
        alt: "Pantalla 3",
        title: "Descubre nuevos negocios con ubicación",
        desc: "Visualiza productos organizados automáticamente según tu ubicación y demanda.",
        colors: "from-green-900/40 to-emerald-800/40",
    },
    {
        src: img4,
        alt: "Pantalla 4",
        title: "Pagos Seguros",
        desc: "Realiza compras rápidas y confiables sin salir de la aplicación.",
        colors: "from-yellow-900/40 to-orange-800/40",
    },
    {
        src: img5,
        alt: "Pantalla 5",
        title: "Perfil Personalizado",
        desc: "Recibe recomendaciones, ofertas y promociones hechas a tu medida.",
        colors: "from-cyan-900/40 to-sky-800/40",
    },
];
const steps = [
    {
        icon: <DownloadCloud className="w-12 h-12 text-purple-400 mx-auto group-hover:scale-110 group-hover:text-purple-300 transition-transform duration-300" />,
        title: "1. Descarga",
        desc: "Obtén la aplicación desde tu tienda favorita.",
        gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
        icon: <CloudCog className="w-12 h-12 text-cyan-400 mx-auto group-hover:scale-110 group-hover:text-cyan-300 transition-transform duration-300" />,
        title: "2. Latencia",
        desc: "Actualmente la aplicación corre en un servidor gratuito, lo cual puede generar ligeras demoras en la carga. Sin embargo, esto valida el concepto y demuestra que con infraestructura escalable de pago el rendimiento sería aún más ágil y robusto.",
        gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
        icon: <ShoppingBag className="w-12 h-12 text-green-400 mx-auto group-hover:scale-110 group-hover:text-green-300 transition-transform duration-300" />,
        title: "3. Disfruta",
        desc: "Explora las tiendas y empieza a comprar.",
        gradient: "from-green-500/10 to-emerald-500/10",
    },
];

export default function AppShowcase() {
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
                <p className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 relative z-10">
                    {m.desc}
                </p>
            </div>
        </div>
    ))}
</div>

    );
}
