import React, { useEffect } from "react";

function Privacy() {
     useEffect(() => {
            // Al montar el componente, ir al inicio de la ventana
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 p-8 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-gray-950/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-gray-800">
                <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    Política de Privacidad
                </h1>

                <p className="mb-4 leading-relaxed text-lg">
                    En <span className="font-semibold text-blue-400">Ruvlo</span>, valoramos tu
                    privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu
                    información.
                </p>

                <p className="mb-4 leading-relaxed text-lg">
                    Tu información personal <span className="text-green-400">nunca será compartida</span>{" "}
                    con terceros sin tu consentimiento.
                    Puedes contactarnos en{" "}
                    <a
                        href="mailto:soporte@ruvlo.com"
                        className="text-blue-400 hover:underline"
                    >
                        soporte@ruvlo.com
                    </a>{" "}
                    para más detalles.
                </p>

                <p className="leading-relaxed text-lg">
                    Recopilamos datos personales que nos proporcionas al registrarte, como{" "}
                    <span className="font-medium text-gray-300">
                        nombre, usuario, teléfono y PIN
                    </span>
                    . También recolectamos datos técnicos para mejorar la app.
                </p>


                <p className="mb-4 leading-relaxed text-lg">
                    Usamos tus datos para crear y administrar tu cuenta, comunicarnos contigo y mejorar nuestros servicios.

                </p>

                <p className="mb-4 leading-relaxed text-lg">
                    Tratamos tus datos con tu consentimiento explícito al aceptar esta política y para cumplir el contrato de servicio.

                </p>

                <p className="mb-4 leading-relaxed text-lg">
                    No vendemos tus datos. Podemos compartirlos con proveedores que ayudan a operar la app bajo acuerdos de confidencialidad.

                </p>

                <p className="mb-4 leading-relaxed text-lg">
                    Implementamos medidas para proteger tus datos contra accesos no autorizados.

                </p>

                <p className="mb-4 leading-relaxed text-lg">
                    Puedes solicitar acceso, corrección o eliminación de tus datos contactándonos en soporte@ruvlo.com.co

                </p>

                <p className="mb-4 leading-relaxed text-lg">
                    Guardamos tus datos mientras tu cuenta esté activa o según obligaciones legales.

                </p>


                <p className="mb-4 leading-relaxed text-lg">
                    Actualizaremos esta política cuando sea necesario y te notificaremos.

                </p>


                <p className="mb-4 leading-relaxed text-lg">
                    Si tienes preguntas sobre privacidad, contáctanos en soporte@ruvlo.com.co

                </p>
            </div>
        </div>

    );
}

export default Privacy;
