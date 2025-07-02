import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button.jsx";
import styles from "./Navbar.module.scss";
import logo from "@/assets/logo.svg"; 

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <img src={logo} alt="Logo" />
            </div>

            <div className={styles.navbarContent}>
                <ul className={styles.navLinks}>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/hotels")}>Hotels</li>
                    <li onClick={() => navigate("/rooms")}>Rooms</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li onClick={() => navigate("/contact")}>Contact</li>
                </ul>

                <div>
                    <Button className={styles.loginBtn} onClick={() => navigate("/login")}>Login</Button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
