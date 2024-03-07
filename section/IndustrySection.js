import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import styles from "@/styles/IndustrySection.module.css";
import Image from "next/image";
import Link from "next/link";

// Renewable Energy, Aerospace & defaultMaxListeners,

const IndustrySection = () => {
  return (
    <div id="industries" className={styles.containerWrapper}>
      <div className={styles.container}>
        <h3 className={styles.subHeading}>INDUSTRIES</h3>
        {/* <h2 className={styles.heading}>
          FULLY CERTIFIED & <br></br> AUTHORIZED
        </h2> */}

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
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
          className={`${"mySwiper"} ${styles.swiperContainer}`}
        >
          <SwiperSlide>
            <Link href={"/industries/aerospace"} className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/industries/aerospace.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h3 className={styles.cardHeading}>AEROSPACE</h3>
                <div className={styles.cardButton}>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/industries/defense"} className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/industries/defense2.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h3 className={styles.cardHeading}>DEFENSE</h3>
                <div className={styles.cardButton}>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={"/industries/renewable-energy"}
              className={`${styles.card}`}
            >
              <Image
                className={styles.cardImage}
                src={"/images/industries/renewable.jpg"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h3 className={styles.cardHeading}>RENEWABLE ENERGY</h3>
                <div className={styles.cardButton}>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Link
              href={"/industries/manufacturing"}
              className={`${styles.card}`}
            >
              <Image
                className={styles.cardImage}
                src={"/images/industry1.png"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h3 className={styles.cardHeading}>MANUFACTURING</h3>
                <div className={styles.cardButton}>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.card}`}>
              <Image
                className={styles.cardImage}
                src={"/images/industry2.png"}
                alt="Card Image"
                width={400}
                height={350}
              />
              <div className={styles.cardText}>
                <h3 className={styles.cardHeading}>MANUFACTURING</h3>
                <div className={styles.cardButton}>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        <div className={styles.side}>
          <h4 className={styles.number}>03</h4>
          <div className={styles.darkLine}></div>
          <div className={styles.lightLine}></div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
