import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Button from "../../ui/Button/Button.jsx";
import styles from "./Navbar.module.scss";
import logo from "@/assets/logo.svg"; 

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/"); // Anasayfaya yönlendir
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to="/"> <img src={logo} alt="Logo"/> </NavLink>
            </div>

            <div className={styles.navbarContent}>
                <ul className={styles.navLinks}>
                    <li> <NavLink to="/" className={({ isActive }) => isActive ? styles.navActive : undefined} >Home</NavLink> </li>
                    <li> <NavLink to="/hotels" className={({ isActive }) => isActive ? styles.navActive : undefined} >Hotels</NavLink> </li>
                    <li> <NavLink to="/rooms" className={({ isActive }) => isActive ? styles.navActive : undefined} >Rooms</NavLink> </li>
                    <li> <NavLink to="/about" className={({ isActive }) => isActive ? styles.navActive : undefined} >About</NavLink> </li>
                    <li> <NavLink to="/contact" className={({ isActive }) => isActive ? styles.navActive : undefined} >Contact</NavLink> </li>
                </ul>

                <div>
                    {isLoggedIn ? (
                        <Button className={styles.loginBtn} onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Button className={styles.loginBtn}>
                            <NavLink to="/login">Login</NavLink>
                        </Button>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
