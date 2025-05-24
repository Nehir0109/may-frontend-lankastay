import React from "react";
import styles from "./BreadCrumbs.module.scss";

const Breadcrumb = () => {
  const path = window.location.pathname;
  const segments = path.split("/").filter(Boolean);
  const last = segments[segments.length - 1] || "home";

  return (
    <nav className={styles.breadcrumb}>
      <a href="/" className={styles.link}>Home</a>
      {last !== "home" && (
        <>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>
            {decodeURIComponent(last)
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
