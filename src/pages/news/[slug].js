import React, { useEffect, useState } from "react";
import styles from "@/styles/NewDetails.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Footer from "../../../components/Footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Head from "next/head";
import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [dataToUse, setDataToUse] = useState({});
  const [additionalData, setAdditionalData] = useState([]);

  const newsData = [
    {
      tag: ["MARCH 15, 2024", "MUSSA QADER"],
      slug: "news-1",
      imageSrc: "/images/news/news1.jpg",
      newsTitle:
        "Quantum Edge will be the first solar module and solar cell component manufacturer in the United States ",
      newsDescription: `Quantum Edge, an emerging US machine shop, is set to be the first solar module and solar cell component manufacturer.  Quantum Edge is poised to play a significant role in the Renewable Energy industry by being the only solar wafer, solar ingot, and polysilicon component manufacturer nationally, all while maintaining a strong commitment to innovation and sustainability. Their steadfast commitment to advancing renewable energy solutions is essential and timely in a world where mitigating climate change and technological innovation are of utmost importance.
<br><br>
Quantum Edge presents itself as a catalyst for revolutionary change in the industry by forming strategic partnerships with top businesses at the forefront of solar technology development. Through these partnerships, we aim to create a future in which renewable energy technologies foster US economic development and social progress while simultaneously reducing their negative effects on the environment.
<br><br>
An all-encompassing approach to sustainable energy solutions is at the heart of Quantum Edge's purpose. Above and beyond precision engineering, we are dedicated to supporting the United States' switch to clean, renewable energy sources.
<br><br>
As a US machine shop, we are dedicated to reviving US-made manufacturing in order to strengthen the US economy and generate jobs domestically.
<br><br>
The state-of-the-art machine shop at Quantum Edge  is capable of producing high quality HJT/Perovskite, Topcon, and PERC solar frames that are <span class="bold">MADE IN THE USA</span>. Moreover, we possess the capability to domestically design and manufacture aerospace and defense components.
<br><br>
We understand how critical it is to transition to renewable energy sources, and their machine facility is equipped to meet the increasing demand for solar products that are kind to the environment. One of Quantum Edge's top priorities, is sustainability, we do this by employing energy-saving procedures to cut waste in our manufacturing operations
`,
    },
    {
      tag: ["MARCH 15, 2024", "MUSSA QADER"],
      slug: "news-2",
      imageSrc: "/images/news/news2.jpg",
      newsTitle:
        "Introducing Sentinel and Telecommunication Drones by Quantum Edge ",
      newsDescription: `Quantum Edge , a <span class="bold">MADE IN THE USA</span> company is actively developing the creation of advanced drone technology to serve the needs of the aerospace, defense, and telecommunications sectors. Quantum Edge is dedicated to providing innovative and customer-focused solutions. Through specialized drone technology, the company seeks to address the distinctive issues that exist present-day. We are positioning ourselves to provide dependable solutions that both meet and exceed customer expectations by utilizing their creative approach and expertise.
<br><br>
Quantum Edge is focused on the Research & Development of Sentinel and Telecommunication Drones. 
<br><br>
Quantum Edge is a firm that is pleased to be <span class="bold">MADE IN THE USA</span>, and as such, we place a high value on domestic production and manufacturing quality. In addition, the US production of the sentinel and telecommunication drones helps further the advancement of drone development. Enhancing the defense capabilities of the United States in aerospace and defense innovation are the goals of Quantum Edge, which places a strong emphasis on developing strategic collaborations and utilizing cutting-edge technology.

<br><br>
We have a deep commitment to quality and dependability in all facets of our business operations. By putting the needs of the client first and pursuing excellence relentlessly, we hopes to revolutionize drone development. Quantum Edge aims to establish itself as a reliable partner in the Aerospace and Defense industries, promoting advancement and safeguarding national security via the provision of exceptional products and unmatched service.`,
    },
    {
      tag: ["MARCH 15, 2024", "MUSSA QADER"],
      slug: "news-3",
      imageSrc: "/images/news/news3a.jpg",
      newsTitle: "US Machine Shop Emerges in the Aerospace Industry",
      newsDescription: `The US machine shop Quantum Edge is setting out on a bold mission to create state-of-the-art parts and components for the aerospace sector. With superior production and a forward-looking approach, Quantum Edge hopes to be a key player in the advancement of aerospace technology. Understanding the need of accuracy and dependability in the aerospace business, we dedicated to providing components that satisfy the industry's stringent standards.
<br><br>
Quantum Edge bases its aerospace component development on a customer-centric strategy that emphasizes customizing solutions to fit the unique requirements of its customers. By leveraging state-of-the-art technologies and employing a team of skilled professionals, we aim to be well-positioned to make a valuable contribution to the advancement of aerospace capabilities. The company's proactive approach, which continuously aims to push the limits of what is feasible in aerospace manufacturing, demonstrates its devotion to innovation.
<br><br>
Being a <span class="bold">MADE IN THE USA</span> business, Quantum Edge is motivated by a feeling of patriotism and a desire to participate in the expansion of the aerospace sector through component manufacturing. By means of strategic partnerships and an emphasis on sophisticated production methodologies, we hope to not only satisfy the needs of the aerospace industry but also establish standards for excellence and productivity. Quantum Edge aims to be a dependable partner for aerospace firms looking for high-quality parts and components for their cutting-edge projects because of their unrelenting commitment to perfection.
<br><br>
Quantum Edge is poised to leave a lasting impact on the industry, contributing to advancements that will shape the future of manufacturing aerospace components.`,
    },
    {
      tag: ["MARCH 15, 2024", "MUSSA QADER"],
      slug: "news-4",
      imageSrc: "/images/news/news4.jpg",
      newsTitle: "Cutting-Edge USA Machine Shop Launches in Defense Sector ",
      newsDescription: `
Quantum Edge, a manufacturing company, has the capacity to create parts and components for the Defense sector. Quantum Edge aims to create components that satisfy the strict criteria needed for military applications since we are unwaveringly committed to accuracy and quality. We have the capacity to carefully develop and construct components that are strong and dependable for the most demanding operating situations by utilizing cutting-edge technology and sophisticated engineering procedures.
<br><br>
Their dedication to manufacturing quality is matched by their emphasis on security and confidentiality in every facet of their business. Understanding the delicate nature of military projects, we follow stringent guidelines to protect intellectual property.
<br><br>
Quantum Edge is resolute in its objective to deliver state-of-the-art parts and components that improve the capabilities of the defense industry, even as we continue to push the frontiers of innovation and quality. We are prepared to assist potential clients in their efforts to safeguard and defend the country's security interests through component manufacturing. Moreover, we aim to support to the advancement of defense technology and support the mission-critical operations.`,
    },
  ];

  useEffect(() => {
    console.log(slug);
    // Find the data that matches the current slug
    const matchingData = newsData.find((item) => item.slug === slug);

    if (matchingData) {
      // Set matching data to dataToUse
      setDataToUse(matchingData);
      console.log(matchingData);
      // Filter out the non-matching data and store it in additionalData
      const nonMatchingData = newsData.filter((item) => item.slug !== slug);
      setAdditionalData(nonMatchingData);
    } else {
      // Handle the case where no matching slug is found
      // For example, you can set dataToUse to some default value
      // or redirect the user to a 404 page
      setDataToUse(newsData[0]);
      // Set all data as additional data since there's no match
      setAdditionalData(newsData);
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>Quantum Edge | News</title>
        <meta
          name="description"
          content="Quantum Edge  is a new cutting-edge machine shop providing manufacturing and engineering services to many industries including Aerospace, Defense, and Renewable Energy. We are proud to say that we are a fully certified and authorized MADE IN USA machine shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imageOverlay}></div>
          {dataToUse.imageSrc && (
            <Image
              className={styles.backgroundImage}
              src={`${dataToUse.imageSrc}`}
              width={1940}
              height={941}
              alt="Background Image"
            />
          )}
        </div>
      </div>
      <div className={styles.detailWrapper}>
        <div className={styles.detailContainer}>
          <div className={styles.mainTagContainer}>
            {dataToUse?.tag?.map((item, i) => (
              <p className={styles.mainTag}>{item}</p>
            ))}
            {/* <p className={styles.mainTag}>DAILY</p>
            <p className={styles.mainTag}>TRENDING</p> */}
          </div>
          <h2 className={styles.mainDetailHeading}>{dataToUse.newsTitle}</h2>

          {/* <p className={styles.mainDetailPara}>{dataToUse.newsDescription}</p> */}
          <p
            dangerouslySetInnerHTML={{ __html: dataToUse.newsDescription }}
            className={styles.mainDetailPara}
          >
            {/* {dataToUse.newsDescription} */}
          </p>
        </div>

        <div className={styles.line}></div>

        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay, Navigation]}
          navigation={true}
          // autoplay={{ delay: 3000 }} // Adjust the delay as needed (in milliseconds)

          breakpoints={{
            50: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            800: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1550: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
          className={`${"mySwiper"} ${styles.swiperContainer}`}
        >
          {additionalData.map((item, i) => (
            <SwiperSlide className={`${styles.card}`}>
              <Link href={`/news/${item.slug}`}>
                <Image
                  className={styles.cardImage}
                  src={`${item.imageSrc}`}
                  alt="Card Image"
                  width={400}
                  height={350}
                />
                <div className={styles.cardDetail}>
                  <div className={styles.tagContainer}>
                    {item.tag.map((tag, i) => (
                      <div className={styles.tag}>{tag}</div>
                    ))}
                    {/* <div className={styles.tag}>DAILY</div>
                    <div className={styles.tag}>TRENDING</div> */}
                  </div>
                  <h5 className={styles.cardText}>{item.newsTitle}</h5>
                  <Link
                    href={`/news/${item.slug}`}
                    className={styles.cardButton}
                  >
                    READ
                    <i class="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className={`${styles.card}`}>
            <Image
              className={styles.cardImage}
              src={"/images/news/cardPlaceholder.png"}
              alt="Card Image"
              width={400}
              height={350}
            />
            <div className={styles.cardDetail}>
              <div className={styles.tagContainer}>
                <div className={styles.tag}>NEWS</div>
                <div className={styles.tag}>DAILY</div>
                <div className={styles.tag}>TRENDING</div>
              </div>
              <h5 className={styles.cardText}>
                Lorem ipsum dolor sit amet consectetur. Eget accumsan
                scelerisque nunc . Lorem ipsum dolor sit amet consectetur. Eget
                accumsan scelerisque nunc .
              </h5>
              <Link href={"/news/lorem"} className={styles.cardButton}>
                READ
                <i class="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.card}`}>
            <Image
              className={styles.cardImage}
              src={"/images/news/cardPlaceholder.png"}
              alt="Card Image"
              width={400}
              height={350}
            />
            <div className={styles.cardDetail}>
              <div className={styles.tagContainer}>
                <div className={styles.tag}>NEWS</div>
                <div className={styles.tag}>DAILY</div>
                <div className={styles.tag}>TRENDING</div>
              </div>
              <h5 className={styles.cardText}>
                Lorem ipsum dolor sit amet consectetur. Eget accumsan
                scelerisque nunc . Lorem ipsum dolor sit amet consectetur. Eget
                accumsan scelerisque nunc .
              </h5>
              <Link href={"/news/lorem"} className={styles.cardButton}>
                READ
                <i class="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetails;
