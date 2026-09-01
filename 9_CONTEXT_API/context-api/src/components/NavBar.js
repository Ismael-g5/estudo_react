// src/components/NavBar.js
import "./css/NavBar.css"; 
import { NavLink } from "react-router-dom";
import { autoRoutes } from "../autoRoutes"; 

const NavBar = () => {
    return (
        <nav>
            {/* O .filter deixa passar apenas as rotas que possuem inMenu igual a true */}
            {autoRoutes
                .filter((route) => route.inMenu === true)
                .map((route) => (
                    <NavLink 
                        key={route.path} 
                        to={route.path} 
                        className={({ isActive }) => isActive ? "active" : ""} 
                        end
                    >
                        {route.label}
                    </NavLink>
                ))
            }
        </nav>
    );
}

export default NavBar;
