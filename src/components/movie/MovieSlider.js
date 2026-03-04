import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// CSS는 기존대로
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import styles from "./MovieSlider.module.scss";
import { movieData } from "data/movieData"; // 데이터 분리 안하면 바로 배열 선언 가능

function MovieSlider() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        // navigation
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={false}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          767: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {movieData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slideItem}>
              <Link to={item.link} className={styles.card}>
                {/* 포스터 영역 */}
                <figure className={styles.posterWrap}>
                  <img
                    src={item.poster}
                    alt={item.title}
                    className={styles.poster}
                    loading="lazy"
                  />
                </figure>

                {/* 영화 정보 영역 */}
                <div className={styles.info}>
                  {/* 영화 타이틀 이미지 */}
                  <img
                    src={item.titleImg}
                    alt={`${item.title} 제목`}
                    className={styles.titleImg}
                  />

                  {/* 메타 정보 */}
                  <ul className={styles.meta}>
                    <li className={styles.ageWrap}>
                      <img
                        src={item.ageImg}
                        alt="관람등급"
                        className={styles.age}
                      />
                    </li>
                    <li className={styles.year}>{item.year}</li>
                  </ul>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieSlider;
