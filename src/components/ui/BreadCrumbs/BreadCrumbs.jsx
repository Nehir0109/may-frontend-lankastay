import React from "react";
import styles from "./BreadCrumbs.module.scss";
import { Link, useLocation, useResolvedPath } from "react-router";

const Breadcrumb = () => {

  const location = useLocation();
  const resolved = useResolvedPath(location.pathname);
  const path = resolved.pathname;
  const segments = path.split("/").filter(Boolean);
  const last = segments[segments.length -1] || "home";
  

  return (
    <nav className={styles.breadcrumb}>
      <Link to="/" className={styles.link}>Home</Link>
      {last !== "home" && (
        <>
        <span className={styles.separator}> / </span>
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
