"use client";
import { links } from "@/lib/data";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

export default function Links() {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
          {/* {session ? (
            <>
              {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink link={{ title: "Login", path: "/login" }} />
          )} */}
        </div>
      )}
    </div>
  );
}
