import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerUpper}>
        <Image
          className={styles.footerLogo}
          src={"/images/favicon.png"}
          width={200}
          height={200}
          alt="Footer Logo"
        />
        <h2 className={styles.footerHeading}>Quantum Edge Technology LLC</h2>
        <h3 className={styles.footerSubHeading}>Utah | Idaho | Virginia </h3>
        <ul className={styles.footerUl}>
          <li className={styles.footerLi}>
            <Link href={"/#about"}>ABOUT</Link>
          </li>
          <li className={styles.footerLi}>
            <Link href={"/#industries"}>INDUSTRIES</Link>
          </li>
          <li className={styles.footerLi}>
            <Link href={"/#capabilities"}>CAPABILITIES</Link>
          </li>
          <li className={`${styles.footerLi} ${styles.footerLiDropdown}`}>
            <a>LOCATION</a>
            <ul className={styles.dropdown}>
              <li className={styles.footerLi}>
                <Link href={"/location/howell"}>HOWELL</Link>
              </li>
              <li className={styles.footerLi}>
                <Link href={"/location/boise"}>BOISE</Link>
              </li>
            </ul>
          </li>
          <li className={styles.footerLi}>
            <Link href={"/#principal"}>PRINCIPAL</Link>
          </li>
          <li className={styles.footerLi}>
            <Link href={"/news"}>NEWS</Link>
          </li>
          <li className={styles.footerLi}>
            <Link href={"/#contact"}>CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        © 2024 Quantum Edge Technology LLC. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
