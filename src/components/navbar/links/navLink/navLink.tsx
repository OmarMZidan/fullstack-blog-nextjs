"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { links } from "@/lib/data";
import { usePathname } from "next/navigation";

// (typeof links)[number];
type LinkProps = {
  link: {
    title: string;
    path: string;
  };
};

export default function NavLink({ link }: LinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
}
