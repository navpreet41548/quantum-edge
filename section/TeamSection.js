import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import styles from "@/styles/TeamSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <div id="principal" className={styles.containerWrapper}>
      <div className={styles.container}>
        <h3 className={styles.subHeading}>PRINCIPAL</h3>
        {/* <h2 className={styles.heading}>
          FULLY CERTIFIED & <br></br> AUTHORIZED
        </h2> */}

        {/* <Swiper
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
            1500: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className={`${"mySwiper"} ${styles.swiperContainer}`}
        >
          <SwiperSlide>
            <div className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/team/Mussa Qader.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h4 className={styles.cardTitle}>Chairman & Founder</h4>
                <h3 className={styles.cardHeading}>MUSSA QADER</h3>
              </div>
              <div className={styles.cardOverlay}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/team/Franklin Cerball.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h4 className={styles.cardTitle}>CEO</h4>
                <h3 className={styles.cardHeading}>Franklin Cerball</h3>
              </div>
              <div className={styles.cardOverlay}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/team/Davi Meran.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h4 className={styles.cardTitle}>CFO</h4>
                <h3 className={styles.cardHeading}>Davi Meran</h3>
              </div>
              <div className={styles.cardOverlay}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/team/Sushant Sen.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h4 className={styles.cardTitle}>COO</h4>
                <h3 className={styles.cardHeading}>Sushant Sen</h3>
              </div>
              <div className={styles.cardOverlay}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/team/Mariel Vaca.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h4 className={styles.cardTitle}>CTO, Technical & Design</h4>
                <h3 className={styles.cardHeading}>Mariel Vaca</h3>
              </div>
              <div className={styles.cardOverlay}></div>
            </div>
          </SwiperSlide>
        </Swiper> */}
        {/* <div className={`${styles.swiperContainer}`}> */}
        {/* <div className={`${styles.card}`}>
            <Image
              className={styles.cardImage}
              src={"/images/team/Mussa Qader.jpg"}
              alt="Card Image"
              width={400}
              height={350}
            />
            <motion.div
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(30%)",
                opacity: 0,
              }}
              // viewport={{ once: true }}
              transition={{
                delay: 0.6,
              }}
              className={styles.cardText}
            >
              <h4 className={styles.cardTitle}>Chairman & Founder</h4>
              <h3 className={styles.cardHeading}>Mussa Qader</h3>
            </motion.div>
            <div className={styles.cardOverlay}></div>
          </div> */}
        {/* <div className={`${styles.card}`}>
            <Image
              className={styles.cardImage}
              src={"/images/team/Franklin Cerball.jpg"}
              alt="Card Image"
              width={400}
              height={350}
            />
            <motion.div
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(30%)",
                opacity: 0,
              }}
              // viewport={{ once: true }}
              transition={{
                delay: 0.6,
              }}
              className={styles.cardText}
            >
              <h4 className={styles.cardTitle}>CEO</h4>
              <h3 className={styles.cardHeading}>Franklin Cerball</h3>
            </motion.div>
            <div className={styles.cardOverlay}></div>
          </div>
          <div className={`${styles.card}`}>
            <Image
              className={styles.cardImage}
              src={"/images/team/Davi Meran.jpg"}
              alt="Card Image"
              width={400}
              height={350}
            />
            <motion.div
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(30%)",
                opacity: 0,
              }}
              // viewport={{ once: true }}
              transition={{
                delay: 0.6,
              }}
              className={styles.cardText}
            >
              <h4 className={styles.cardTitle}>CFO</h4>
              <h3 className={styles.cardHeading}>Davi Meran</h3>
            </motion.div>
            <div className={styles.cardOverlay}></div>
          </div>
          <div className={`${styles.card}`}>
            <Image
              className={styles.cardImage}
              src={"/images/team/Sushant Sen.jpg"}
              alt="Card Image"
              width={400}
              height={350}
            />
            <motion.div
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(30%)",
                opacity: 0,
              }}
              // viewport={{ once: true }}
              transition={{
                delay: 0.6,
              }}
              className={styles.cardText}
            >
              <h4 className={styles.cardTitle}>CTO</h4>
              <h3 className={styles.cardHeading}>Sushant Sen</h3>
            </motion.div>
            <div className={styles.cardOverlay}></div>
          </div>
          <div className={`${styles.card}`}>
            <Image
              className={styles.cardImage}
              src={"/images/team/Mariel Vaca.jpg"}
              alt="Card Image"
              width={400}
              height={350}
            />
            <motion.div
              whileInView={{
                transform: "translateY(0%)",
                opacity: 1,
              }}
              initial={{
                transform: "translateY(30%)",
                opacity: 0,
              }}
              // viewport={{ once: true }}
              transition={{
                delay: 0.6,
              }}
              className={styles.cardText}
            >
              <h4 className={styles.cardTitle}>
                Vice President of Communication
              </h4>
              <h3 className={styles.cardHeading}>Mariel Vaca</h3>
            </motion.div>
            <div className={styles.cardOverlay}></div>
          </div> */}
        {/* </div> */}

        <div className={styles.detailContainer}>
          <div className={styles.detailContainerLeft}>
            <Image
              className={styles.aboutImage}
              src={"/images/team/Mussa Qader.jpg"}
              alt="About Image"
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.detailContainerRight}>
            <h2 className={styles.mainHeading}>MUSSA QADER</h2>
            <h2 className={styles.titleHeading}>CHAIRMAN & FOUNDER</h2>
            <p className={styles.para}>
              Mussa is an accomplished inventor and innovator with extensive
              international experience in engineering cutting-edge technological
              solutions. With a deep understanding of the latest industrial
              technology and a proven track record of building, prototyping, and
              manufacturing products across diverse industries, Mussa brings a
              wealth of knowledge and expertise to every project.
            </p>
            <p className={styles.para}>
              As a specialist in the design and manufacturing of advanced drones
              for mission-specific use-cases, Mussa has consistently delivered
              innovative solutions that push the boundaries of what is possible.
              His work has garnered recognition from industry leaders and has
              positioned him as a go-to expert in the field.
            </p>
            <p className={styles.para}>
              Prior to his current endeavors, Mussa honed his skills as a
              technology consultant at renowned organizations such as McKinsey &
              Co, Google, and Amazon. His experience working with these industry
              giants has provided him with invaluable insights into the
              ever-evolving landscape of technology and has equipped him with
              the tools necessary to navigate complex business challenges.
            </p>

            <p className={styles.para}>
              With a rare combination o technical prowess, business acumen, and
              an unwavering commitment to innovation, Mussa is poised to make a
              significant impact in the wrld of advanced technology. His vision,
              coupled with his ability to execute, makes him an exceptional
              asset to any organization seeking to stay at the forefront of
              their industry.
            </p>
            <Link href={"/#contact"} className={styles.button}>
              CONTACT ME
            </Link>
          </div>
        </div>

        <div className={styles.side}>
          <h4 className={styles.number}>05</h4>
          <div className={styles.darkLine}></div>
          <div className={styles.lightLine}></div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
