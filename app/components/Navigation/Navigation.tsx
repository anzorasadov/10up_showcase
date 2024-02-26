"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const path = usePathname();
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link className={path === "/" ? "active" : ""} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={path === "/ui-architecture" ? "active" : ""} href="/ui-architecture">
            UI Architecture
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
