import React from "react";
import styles from "@/styles/Location.module.css";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

const Boise = () => {
  return (
    <>
      <Head>
        <title>Quantum Edge | Location</title>
        <meta
          name="description"
          content="Quantum Edge is a new cutting-edge machine shop providing manufacturing and engineering services to many industries including Aerospace, Defense, and Renewable Energy. We are proud to say that we are a fully certified and authorized MADE IN USA machine shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Navbar />

      <div id="location" className={styles.container}>
        <div className={styles.homeContent}>
          <h3 className={styles.tagHeading}>BOISE, IDAHO</h3>
          <h1 className={styles.mainHeading}>PROJECT X</h1>
          <h4 className={styles.subHeading}>
            Aerospace | Defense | Solar Component Manufacturing Facility
          </h4>
          <Link href={"#details"} className={styles.homeButton}>
            VIEW DETAIL
          </Link>
        </div>
        <div className={styles.homeBackground}>
          <video autoPlay muted loop playsInline>
            <source src="/images/location/boise.mp4" type="video/mp4" />
            {/* Add additional source elements for different video formats if needed */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div id="details" className={styles.workContainerWrapper}>
        <div className={styles.workContainer}>
          <h2 className={styles.workHeading}>WORK PROGRESS</h2>
          <div className={`${styles.phaseContainer} ${styles.phaseContainer1}`}>
            <div className={styles.phaseLeft}>
              <div className={styles.phaseDetail}>
                <div className={styles.phaseList}>
                  1,000,000 SF Class A build-to-suit facility
                </div>
                <div className={styles.phaseList}>
                  HJT solar cell and module production, utilizing cutting-edge
                  Perovskite technology
                </div>
                <div className={styles.phaseList}>
                  Advanced technology machine shop
                </div>
              </div>
            </div>
            <div className={styles.phaseRight}>
              <Image
                src={"/images/location/boisePhase1.png"}
                className={styles.phaseImage}
                width={600}
                height={600}
                alt="Phase Details"
              />
            </div>
          </div>
          <div className={`${styles.phaseContainer} ${styles.phaseContainer2}`}>
            <div className={styles.phaseLeft}>
              <Image
                src={"/images/location/boisePhase2.png"}
                className={styles.phaseImage}
                width={600}
                height={600}
                alt="Phase Details"
              />
            </div>
            <div className={styles.phaseRight}>
              <div className={styles.phaseDetail}>
                <div className={styles.phaseList}>
                  Solar Ingot and Wafer production{" "}
                </div>
                <div className={styles.phaseList}>Solar frame production</div>
                <div className={styles.phaseList}>
                  Research and Development lab
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.exampleContainerWrapper}>
        <div className={styles.exampleContainer}>
          <h2 className={styles.workHeading}>REAL EXAMPLE</h2>
          <div className={styles.imageContainer}>
            <Image
              className={styles.exampleImage}
              src={"/images/location/boise1.png"}
              width={400}
              height={500}
              alt="Example Image 1"
            />
            <Image
              className={styles.exampleImage}
              src={"/images/location/boise2.png"}
              width={400}
              height={500}
              alt="Example Image 2"
            />
            <Image
              className={styles.exampleImage}
              src={"/images/location/boise3.png"}
              width={400}
              height={500}
              alt="Example Image 3"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Boise;
