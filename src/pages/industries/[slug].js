import React, { useEffect, useState } from "react";
import styles from "@/styles/IndustryDetail.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import { useRouter } from "next/router";
import Head from "next/head";

const IndustryDetail = () => {
  const [dataToUse, setDataToUse] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  const data = [
    {
      mainImage: "/images/industries/aerospaceDefenseBackground.jpg",
      slug: "aerospace",
      name: "AEROSPACE",
      headingPart1: "AEROSPACE CAPABILITIES",
      headingPart2: "",
      para1:
        "We are in the development of high-tech drones to serve the Aerospace industry. We plan on tackling our client's problems through cutting-edge solutions that are custom tailored to their needs. Our innovative approach allows us to help our clients reliably achieve their goals.",
      para2:
        "Quantum Edge, an American company with MADE in USA products, is committed to assisting United States' Aerospace initiative.",
      para3:
        "With a dedication to manufacturing excellence and domestic production, we aim to contribute to national security while supporting the growth of the aerospace industrial base.",
      para4:
        "Through strategic partnerships and advanced technologies, Quantum Edge plans on contributing to the aerospace capabilities of the United States.",
      image1: "/images/industries/aerospace.jpg",
      image2: "/images/industries/defense.jpg",
    },
    {
      mainImage: "/images/industries/defenseBackground.jpg",
      slug: "defense",
      name: "DEFENSE",
      headingPart1: "DEFENSE CAPABILITIES",
      headingPart2: "",
      para1:
        "Quantum Edge is expanding its capabilities in the Defense industry, focusing on creating a cutting-edge machine shop that can manufacture a range of defense products in the industry. As a MADE in USA company with Defense industry contacts, we are committed to serving the United States' national defense initiative. ",
      para2:
        "Our future endeavors are aimed at developing components and parts in the defense sector. ",
      para3:
        "With our commitment to creating jobs in the USA and our focus on innovation in manufacturing and engineering, we aim to contribute to national security through our work in the Defense sector.",
      para4:
        "Through working with industry leading defense firms and through our advanced technologies and innovative offerings, Quantum Edge plans on contributing to the defense capabilities of the United States, supporting national security efforts.",
      image1: "/images/industries/defense1.jpg",
      image2: "/images/industries/defense2.jpg",
    },
    {
      mainImage: "/images/industries/renewableBackground.jpg",
      slug: "renewable-energy",
      name: "RENEWABLE ENERGY",
      headingPart1: "RENEWABLE ENERGY",
      headingPart2: "CAPABILITIES",
      para1:
        "From innovation and sustainability, we will serve key companies in the renewable energy sector by manufacturing components and parts for solar panels. In a rapidly evolving landscape where climate change mitigation and technological advancement are paramount, our commitment to driving progress in renewable energy solutions is unwavering.",
      para2:
        "By aligning ourselves with leading companies at the forefront of solar technology development, we position ourselves as catalysts for transformative change.",
      para3:
        "Through these strategic collaborations, we envision a future where renewable energy technologies not only mitigate environmental impact but also drive economic growth and societal well-being. Our dedication to advancing solar technology extends beyond mere innovation; it encompasses a holistic approach to sustainable energy solutions, fostering a transition towards clean, renewable power sources. ",
      para4:
        "By leveraging partnerships with pioneering solar technology developers, we aim to accelerate the adoption of solar energy across diverse sectors, from residential and commercial applications to industrial-scale power generation.",
      image1: "/images/industries/renewable.jpg",
      image2: "/images/industries/renewable2.jpg",
    },
  ];

  useEffect(() => {
    // Find the data that matches the current slug
    const matchingData = data.find((item) => item.slug === slug);

    // If matching data is found, set it to dataToUse
    if (matchingData) {
      setDataToUse(matchingData);
    } else {
      // Handle the case where no matching slug is found
      // For example, you can set dataToUse to some default value
      // or redirect the user to a 404 page
      setDataToUse({});
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>Quantum Edge | Industries</title>
        <meta
          name="description"
          content="Quantum Edge Technology LLC is a new cutting-edge machine shop providing manufacturing and engineering services to many industries including Aerospace, Defense, and Renewable Energy. We are proud to say that we are a fully certified and authorized MADE IN USA machine shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.mainHeading}>{dataToUse.name}</h1>
            <h5 className={styles.subHeading}>INDUSTRIES / {dataToUse.name}</h5>
            <Link className={styles.button} href={"/#contact"}>
              INQUIRE NOW
            </Link>
          </div>
          <div className={styles.imageOverlay}></div>
          {dataToUse.mainImage && (
            <Image
              className={styles.backgroundImage}
              src={`${dataToUse.mainImage}`}
              width={1940}
              height={941}
              alt="Background Image"
            />
          )}
        </div>
        <div className={styles.detailWrapper}>
          <div className={styles.detailContainer}>
            <div className={styles.detailTop}>
              <div className={styles.detailTopLeft}>
                {/* <h3 className={styles.detailTagLine}>LEARN MORE</h3> */}
                <h2 className={styles.detailHeading}>
                  {dataToUse.headingPart1} <br></br> {dataToUse.headingPart2}
                </h2>
                <p className={styles.darkPara}>{dataToUse.para1}</p>
                <p className={styles.darkPara}>{dataToUse.para2}</p>
              </div>
              <div className={styles.detailTopRight}>
                <Image
                  className={styles.detailImage}
                  src={dataToUse.image1}
                  width={500}
                  height={375}
                  alt="Industry Image"
                />
              </div>
            </div>
            <div className={styles.detailBottom}>
              <div className={styles.detailBottomLeft}>
                <Image
                  className={styles.detailImage}
                  src={dataToUse.image2}
                  width={500}
                  height={375}
                  alt="Industry Image"
                />
              </div>
              <div className={styles.detailBottomRight}>
                <p className={styles.darkPara}>{dataToUse.para3}</p>
                <p className={styles.darkPara}>{dataToUse.para4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndustryDetail;
