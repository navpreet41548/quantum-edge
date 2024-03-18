import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const removeClass = () => {
    setIsOpen(false);
    menuRef.current.classList.remove(`${styles.navCenterActive}`);
    navRef.current.classList.remove(`${styles.navActive}`);
    buttonRef.current.classList.remove(`${styles.navButtonActive}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    menuRef.current.classList.toggle(`${styles.navCenterActive}`);
    navRef.current.classList.toggle(`${styles.navActive}`);
    buttonRef.current.classList.toggle(`${styles.navButtonActive}`);
  };

  // Function to add the "stickyNav" class when scrolling down
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100 && navRef) {
      console.log("SCrolels");
      // Add the sticky class when scrolled a little bit (adjust as needed)
      navRef.current.classList.add(styles.stickyNav);
    } else {
      // Remove the sticky class when scrolled back to the top
      navRef?.current?.classList.remove(styles.stickyNav);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.navWrapper}>
        <Link href={"/"} className={styles.navLeft}>
          <Image
            className={styles.logo}
            width={150}
            height={76}
            alt="Logo"
            src={"/images/logoNew.png"}
          />
        </Link>
        <ul className={styles.navCenter} ref={menuRef}>
          <li>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/#home"}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/#about"}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/#industries"}
            >
              INDUSTRIES
            </Link>
          </li>
          <li>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/#capabilities"}
            >
              CAPABILITIES
            </Link>
          </li>
          <li className={styles.subLi}>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/news"}
            >
              LOCATION
            </Link>
            <div className={styles.dropdown}>
              <Link href="/location/howell" className={styles.dropdownLink}>
                HOWELL
                <i class="bx bx-chevron-right"></i>
              </Link>
              <Link href="/location/boise" className={styles.dropdownLink}>
                BOISE
                <i class="bx bx-chevron-right"></i>
              </Link>
            </div>
          </li>
          <li>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/#principal"}
            >
              PRINCIPAL
            </Link>
          </li>
          <li>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/news"}
            >
              NEWS
            </Link>
          </li>
          <li className={styles.mobileLi}>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/location/howell"}
            >
              HOWELL
            </Link>
          </li>
          <li className={styles.mobileLi}>
            <Link
              onClick={removeClass}
              className={styles.navLink}
              href={"/location/boise"}
            >
              BOISE
            </Link>
          </li>
        </ul>
        <div className={styles.navRight}>
          <Link className={styles.navButton} href={"/#contact"} ref={buttonRef}>
            CONTACT
          </Link>
        </div>
        <div className={styles.burger} onClick={toggleMenu}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
