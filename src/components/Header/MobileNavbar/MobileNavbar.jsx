import { useState } from "react";
import { NavLink } from "react-router";
import Button from "@/components/ui/Button/Button.jsx";
import styles from "./MobileNavbar.module.scss";
import logo from "@/assets/logo.svg";

const MobileNavbar = ({ isAuth }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false); 
    };

    return (
        <div className={styles.mobileNavbar}>
            <div className={styles.topBar}>
                <NavLink to="/" className={styles.logo} onClick={closeMenu}>
                    <img src={logo} alt="Logo" />
                </NavLink>

                <div
                    className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
                    onClick={toggleMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>

            <nav className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
                <ul className={styles.navLinks}>
                    <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? styles.activeLink : ""}>Home</NavLink></li>
                    <li><NavLink to="/hotels" onClick={closeMenu} className={({ isActive }) => isActive ? styles.activeLink : ""}>Hotels</NavLink></li>
                    <li><NavLink to="/rooms" onClick={closeMenu} className={({ isActive }) => isActive ? styles.activeLink : ""}>Rooms</NavLink></li>
                    <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? styles.activeLink : ""}>About</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? styles.activeLink : ""}>Contact</NavLink></li>
                </ul>

                <div className={styles.authBtn}>
                    {isAuth ? (
                        <Button className={styles.button} onClick={() => console.log("Logout clicked")}>Logout</Button>
                    ) : (
                        <Button className={styles.button}>
                            <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
                        </Button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default MobileNavbar;
