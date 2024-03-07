import React from "react";
import styles from "@/styles/HomeSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeSection = () => {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.left}>
        <div className={styles.headingWrapper}>
          <motion.h1
            whileInView={{
              transform: "translateY(0%) rotate(0)",
              opacity: 1,
            }}
            initial={{
              transform: "translateY(120%) rotate(10deg)",
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
            }}
            className={styles.heading}
          >
            WE ARE INNOVATING IN
          </motion.h1>
        </div>
        <div className={styles.headingWrapper}>
          <motion.h1
            whileInView={{
              transform: "translateY(0%) rotate(0)",
              opacity: 1,
            }}
            initial={{
              transform: "translateY(120%) rotate(10deg)",
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
            }}
            className={`${styles.diff} ${styles.heading}`}
          >
            <span className={styles.diffColor}>MANUFACTURING</span> FOR
          </motion.h1>
        </div>
        <div className={styles.headingWrapper}>
          <motion.h1
            whileInView={{
              transform: "translateY(0%) rotate(0)",
              opacity: 1,
            }}
            initial={{
              transform: "translateY(120%) rotate(10deg)",
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
            }}
            className={styles.heading}
          >
            A SUSTAINABLE FUTURE
          </motion.h1>
        </div>
        <p className={styles.para}>
          We are poised to revolutionize the manufacturing and engineering
          landscape with our cutting-edge capabilities and precision,
          specializing in serving the Aerospace, Defense and Renewable energy
          sectors.
        </p>
        <Link href={"/#about"} className={styles.button}>
          Learn More
          <span className={styles.buttonIcon}>
            <i className="bx bx-chevron-right"></i>
          </span>
        </Link>
      </div>
      <motion.div
        whileInView={{
          transform: "translateY(0%) ",
          opacity: 1,
        }}
        initial={{
          transform: "translateY(-10%) ",
          opacity: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          duration: 0.6,
        }}
        className={styles.right}
      >
        <Image
          className={styles.homeImage}
          src={"/images/home2.jpg"}
          width={600}
          alt="Home Image "
          height={400}
          loading={"eager"}
        />
      </motion.div>
      {/* <Image
        className={styles.homeBackground}
        src={"/images/homeBackground.png"}
        width={1920}
        height={941}
        alt="Background Image"
      /> */}
      <div className={styles.homeBackground}>
        <video autoPlay muted loop playsInline>
          <source src="/images/homeVideo.mp4" type="video/mp4" />
          {/* Add additional source elements for different video formats if needed */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HomeSection;
