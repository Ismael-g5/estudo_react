// src/components/NavBar.jsx
import "./css/NavBar.css"; 
import { NavLink } from "react-router-dom";
import { autoRoutes } from "../autoRoutes"; // Importa a automação

const NavBar = () => {
    return (
        <nav>
            {autoRoutes.map((route) => (
                <NavLink 
                    key={route.path} 
                    to={route.path} 
                    className={({ isActive }) => isActive ? "active" : ""} 
                    end
                >
                    {route.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default NavBar;
