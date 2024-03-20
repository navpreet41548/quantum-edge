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
        "Quantum Edge, an American company, is at the forefront of developing advanced drone technology to meet the demands of the Aerospace industry. With a focus on innovation, we precisely design our drones to address specific challenges faced by our clients. Our cutting-edge solutions are meticulously crafted to be versatile and adaptable, ensuring they meet the unique requirements of each project.",
      para2:
        "As a proud supporter of US Aerospace initiatives, our commitment to manufacturing our products in the USA reflects our dedication to quality, reliability, and national innovation.",
      para3:
        "Quantum Edge is thrilled to be part of the movement to bring jobs back to the United States. By manufacturing our products domestically, we are not only ensuring high-quality standards but also contributing to job creation and economic growth within our communities. We take pride in our role in revitalizing American manufacturing and are committed to providing opportunities for skilled workers to thrive in the aerospace industry.",
      para4:
        "Bringing jobs back to the United States allows us to build a stronger, more resilient workforce while reinforcing our commitment to innovation and excellence.",
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
        "Quantum Edge is rapidly expanding its presence in the Defense industry, establishing a state-of-the-art machine shop dedicated to manufacturing a wide range of defense products. As a proud MADE in USA company with established contacts in the Defense sector, we are deeply committed to bolstering the United States' national defense initiative.",
      para2:
        "Our strategic focus is on becoming a cornerstone in the manufacturing and machining of defense industry-related parts and components, solidifying our position as a trusted partner in safeguarding national security.",
      para3:
        "Quantum Edge is dedicated to job creation in the USA and pioneering innovation in manufacturing and engineering to enhance national security through our work in the Defense sector.",
      para4:
        "Collaborating with industry-leading defense firms and leveraging advanced technologies, we're committed to bolstering the defense capabilities of the United States, all while fostering economic growth and job opportunities domestically.",
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
