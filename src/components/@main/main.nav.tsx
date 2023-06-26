"use client";

import Link from "next/link";
import styles from "./main.nav.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const MainNav = () => {
  const pathname = usePathname();

  const underline = useRef<HTMLHRElement>(null);
  const homeNavRef = useRef<HTMLLIElement>(null);
  const settingNavRef = useRef<HTMLLIElement>(null);
  const historyNavRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (underline.current) {
      if (pathname.startsWith("/")) {
        if (homeNavRef.current) {
          underline.current.style.left = "0";
          underline.current.style.width = homeNavRef.current.offsetWidth + "px";
        }
      }

      if (pathname.startsWith("/setting")) {
        if (homeNavRef.current && settingNavRef.current) {
          underline.current.style.left =
            homeNavRef.current.offsetWidth + 32 + "px";
          underline.current.style.width =
            settingNavRef.current.offsetWidth + "px";
        }
      }

      if (pathname.startsWith("/history")) {
        if (
          settingNavRef.current &&
          homeNavRef.current &&
          historyNavRef.current
        ) {
          underline.current.style.left =
            settingNavRef.current.offsetWidth +
            homeNavRef.current.offsetWidth +
            64 +
            "px";
          underline.current.style.width =
            historyNavRef.current.offsetWidth + "px";
        }
      }
    }
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles["col-1"]} ref={homeNavRef}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles["col-2"]} ref={settingNavRef}>
          <Link href={"/setting"}>Setting</Link>
        </li>
        <li className={styles["col-3"]} ref={historyNavRef}>
          <Link href={"/history"}>History</Link>
        </li>
        <hr ref={underline} id="nav_slide_click" />
      </ul>
    </nav>
  );
};

export default MainNav;
