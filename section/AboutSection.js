import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.left}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h3 className={styles.subHeading}>ABOUT US</h3>
            <h2 className={styles.heading}>FULLY CERTIFIED & AUTHORIZED</h2>
            <p className={styles.tagLine}>
              {" "}
              Quantum Edge will be the first solar module and solar cell
              component manufacturer in the United States.
            </p>
          </div>
        </div>
        <p className={styles.darkPara}>
          Quantum Edge Technology LLC is a new cutting-edge machine shop
          providing manufacturing and engineering services to the Aerospace,
          Defense, and Renewable Energy industries. We are proud to say that all
          of our manufacturing and engineering will be MADE in the USA.
        </p>
        <p className={styles.darkPara}>
          Our commitment to sustainable innovation and quality sets us apart.
          With certifications and production entirely in the United States, we
          are a precision engineering center ready to tackle challenging
          projects and contribute to the future of the Aerospace, Defense, and
          Renewable Energy.
        </p>
      </div>
      <div className={styles.right}>
        <motion.div
          whileInView={{
            transform: "translateY(0%)",
            opacity: 1,
          }}
          initial={{
            transform: "translateY(50%)",
            opacity: 0,
          }}
          // viewport={{ once: true }}
          transition={{
            delay: 0.6,
          }}
          className={styles.imageWrapper}
        >
          <Image
            className={styles.aboutImage}
            src={"/images/about.jpg"}
            alt="About Image"
            width={600}
            height={380}
          />
        </motion.div>
      </div>
      <div className={styles.side}>
        <h4 className={styles.number}>02</h4>
        <div className={styles.darkLine}></div>
        <div className={styles.lightLine}></div>
      </div>
    </div>
  );
};

export default AboutSection;
