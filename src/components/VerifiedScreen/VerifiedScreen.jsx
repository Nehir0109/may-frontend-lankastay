import React from "react";
import { useNavigate } from "react-router";
import styles from "./VerifiedScreen.module.scss";

const VerifiedScreen = () => {
    const navigate = useNavigate();

    const handleViewDashboard = () => {
        navigate("/dashboard");
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h1 className={styles.logo}>
                    <span>Lanka</span>
                    <span>Stay.</span>
                </h1>
                <div className={styles.checkmark}><img src="/public/images/check_circle.svg" alt=""/></div>
                <p className={styles.text}>
                    Once we verified, You can Access Dashboard
                </p>
                <button onClick={handleViewDashboard} className={styles.button}>
                    View Dashboard
                </button>
            </div>
        </div>
    );
};

export default VerifiedScreen;