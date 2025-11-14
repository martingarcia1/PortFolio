//este es el navbar de mi portafolio web 
import React from "react";
import { Link,NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to ="/" className="">Inicio
            </Link>

            <div className="">
                <NavLink to ="/about" className="">Acerca de
                </NavLink>

                <NavLink to="/skills" className="">Habilidades
                </NavLink>

                <NavLink to ="/proyects" className="">Proyectos
                </NavLink>

                <NavLink to ="/contact" className="">Contacto
                </NavLink>

            </div>
        </nav>
    );
};