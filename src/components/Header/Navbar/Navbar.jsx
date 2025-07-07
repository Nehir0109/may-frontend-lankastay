import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import useWindow from "@/hooks/useWindow"; 
import MobileNavbar from "../MobileNavbar/MobileNavbar.jsx";
import Button from "../../ui/Button/Button.jsx";
import styles from "./Navbar.module.scss";
import logo from "@/assets/logo.svg"; 

const Navbar = () => {
    const { windowSize } = useWindow();
    const isMobile = windowSize <= 870; //BURAYA BAK GERİ 

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/"); // Anasayfaya yönlendir
    };

    if (isMobile) {
    return <MobileNavbar isAuth={isLoggedIn} />;
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to="/"> <img src={logo} alt="Logo"/> </NavLink>
            </div>

            <div className={styles.navbarContent}>
                <ul className={styles.navLinks}>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? styles.navActive : ""}>Home</NavLink> </li>
                    <li><NavLink to="/hotels" className={({ isActive }) => isActive ? styles.navActive : ""}>Hotels</NavLink></li>
                    <li><NavLink to="/rooms" className={({ isActive }) => isActive ? styles.navActive : ""}>Rooms</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.navActive : ""}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.navActive : ""}>Contact</NavLink></li>
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
