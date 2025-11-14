import react from "react";
import img from "../assets/foto_principal.jpeg"

const me = () => {
    return (
        <div className="">
            <img src={img} alt="Foto de Sergio Martín García" className="w-48 h-48 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">Sergio Martín García</h2>
            <p className="text-center text-gray-600 mb-4">Desarrollador Frontend y Backend</p>
            {/* <p className="text-center text-gray-700">Apasionado por la tecnología y el desarrollo web, con experiencia en múltiples proyectos que abarcan desde aplicaciones frontend hasta soluciones backend completas. Siempre en busca de nuevos desafíos y oportunidades para aprender y crecer profesionalmente.</p> */}
            <p>
                Soy Sergio Martín García, estudiante de Programación en la UTN Tucumán y apasionado por el desarrollo de
                software, la tecnología y el aprendizaje constante.
            </p>
            <p>
                Me impulsa crear soluciones digitales que simplifiquen procesos, potencien negocios y generen impacto
              real.
            </p>
            <p>
                Además de ser programador, soy emprendedor: lidero <span className="font-semibold">Lion Store</span>, un
              emprendimiento de reparación y venta de accesorios para celulares, donde aplico mis valores de
              responsabilidad, innovación y servicio.
            </p>
            <p className="text-muted-foreground italic">
              Creo que el código no solo debe funcionar, sino también reflejar propósito, excelencia y crecimiento.
            </p>
        </div>
    );
};