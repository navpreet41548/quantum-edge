import React, { useState } from "react";
import styles from "@/styles/CapabilitieSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const CapabilitySection = () => {
  const [capability, setCapability] = useState("manufacturing");
  const handleButton = (capability) => {
    setCapability(capability);

    const button = document.getElementsByClassName(styles.button);
    button[0].classList.remove(styles.buttonActive);
    button[1].classList.remove(styles.buttonActive);

    if (capability == "manufacturing") {
      button[0].classList.add(styles.buttonActive);
    } else {
      button[1].classList.add(styles.buttonActive);
    }
  };
  return (
    <div id="capabilities" className={styles.containerWrapper}>
      <div className={styles.container}>
        <h1 className={styles.mainHeading}>CAPABILITIES</h1>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => handleButton("manufacturing")}
            className={`${styles.button} ${styles.buttonActive}`}
          >
            MANUFACTURING
          </button>
          <button
            onClick={() => handleButton("engineering")}
            className={styles.button}
          >
            ENGINEERING
          </button>
        </div>

        {capability == "manufacturing" ? (
          <>
            <div className={styles.cardRow}>
              <div className={styles.card}>
                <Image
                  className={styles.cardImage}
                  src="/images/manufacturing/sustainability.png"
                  width={240}
                  height={221}
                  alt="Sustainablity"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  SUSTAINABILITY
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  We prioritize sustainability, utilizing energy-efficient
                  processes and minimizing waste in our manufacturing practices.
                </motion.p>
              </div>
              <div className={styles.card}>
                <Image
                  className={styles.cardImage}
                  src="/images/manufacturing/machinery2.png"
                  width={240}
                  height={221}
                  alt="MACHINERY"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  MACHINERY
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  Our cutting-edge machinery is equipped with the latest
                  technology, ensuring unmatched precision, repeatability, and
                  efficiency in the manufacturing process.
                </motion.p>
              </div>
              <div className={`${styles.card} ${styles.cardDesktop}`}>
                <Image
                  className={styles.cardImage}
                  src="/images/manufacturing/quality2.png"
                  width={240}
                  height={221}
                  alt="QUALITY ASSURANCE"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  QUALITY ASSURANCE
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  Quality is in our DNA, with stringent control protocols &
                  certifications. Every component exceeds industry standards,
                  showcasing our unwavering commitment to quality.
                </motion.p>
              </div>
            </div>
            <div className={styles.cardRow}>
              <div className={`${styles.card} ${styles.cardMobile}`}>
                <Image
                  className={styles.cardImage}
                  src="/images/manufacturing/quality2.png"
                  width={240}
                  height={221}
                  alt="QUALITY ASSURANCE"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  QUALITY ASSURANCE
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  Quality is in our DNA, with stringent control protocols &
                  certifications. Every component exceeds industry standards,
                  showcasing our unwavering commitment to quality.
                </motion.p>
              </div>
              <div className={styles.card}>
                <Image
                  className={styles.cardImage}
                  src="/images/manufacturing/rapid2.png"
                  width={240}
                  height={221}
                  alt="RAPID PROTOTYPING"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  RAPID PROTOTYPING
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  Innovation is crucial in aerospace and technology. Our rapid
                  prototyping quickly transforms concepts into tangible
                  prototypes, expediting product development & time-to-market.
                </motion.p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.cardRow}>
              <div className={styles.card}>
                <Image
                  className={styles.cardImage}
                  src="/images/engineering/technology.png"
                  width={240}
                  height={221}
                  alt="Sustainablity"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  TECHNOLOGY INTEGRATION
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  We invest in state-of-the-art technology for streamlined
                  processes and superior efficiency, setting us apart with
                  advanced capabilities in 3D modeling, simulation, and
                  real-time quality control.
                </motion.p>
              </div>
              <div className={styles.card}>
                <Image
                  className={styles.cardImage}
                  src="/images/engineering/custom.png"
                  width={240}
                  height={221}
                  alt="MACHINERY"
                />
                <h2 className={styles.cardHeading}>CUSTOM SOLUTIONS</h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  We excel in designing, planning, and crafting custom solutions
                  for the Aerospace, Defense, and Renewable Energy Industries.
                </motion.p>
              </div>
              <div className={`${styles.card} ${styles.cardDesktop}`}>
                <Image
                  className={styles.cardImage}
                  src="/images/engineering/research2.png"
                  width={240}
                  height={221}
                  alt="QUALITY ASSURANCE"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  RESEARCH & DEVELOPMENT
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  A groundbreaking research and development center focused on
                  accelerating innovative solutions in Aerospace, Defense, and
                  Renewable Energy Industries.
                </motion.p>
              </div>
            </div>
            <div className={styles.cardRow}>
              <div className={`${styles.card} ${styles.cardMobile}`}>
                <Image
                  className={styles.cardImage}
                  src="/images/engineering/research2.png"
                  width={240}
                  height={221}
                  alt="QUALITY ASSURANCE"
                />
                <motion.h2
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
                  className={styles.cardHeading}
                >
                  RESEARCH & DEVELOPMENT
                </motion.h2>
                <motion.p
                  whileInView={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  initial={{
                    transform: "translateY(-30%)",
                    opacity: 0,
                  }}
                  // viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                  }}
                  className={styles.cardPara}
                >
                  A groundbreaking research and development center focused on
                  accelerating innovative solutions in Aerospace, Defense, and
                  Renewable Energy Industries.
                </motion.p>
              </div>
            </div>
          </>
        )}

        <div className={styles.side}>
          <h4 className={styles.number}>04</h4>
          <div className={styles.darkLine}></div>
          <div className={styles.lightLine}></div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitySection;
