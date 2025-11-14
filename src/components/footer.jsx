//este sera el footer de mi portafolio web

import React from "react";
import { Links } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <p>© 2025 Mi Portafolio Web. Todos los derechos reservados. || Sergio Martín García</p>
            {/* links a redes sociales y de contacto */}
            <button onClick={() => {window.location.href = "https://wa.me/3813487804"}}>WhatsApp</button>
            <button onClick={() => {window.location.href = "https://www.linkedin.com/in/sergio-martingarcia/"}}>LinkedIn</button>
            <button onClick={() => {window.location.href = "mailto:martingarcia.code@gmail.com"}}>Email</button>
        </footer>
    );
};

export default Footer;