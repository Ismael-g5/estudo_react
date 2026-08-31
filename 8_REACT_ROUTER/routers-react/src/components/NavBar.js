import "./css/NavBar.css";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return <nav>
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} end>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} end>About</NavLink>
    </nav>;
}
export default NavBar;