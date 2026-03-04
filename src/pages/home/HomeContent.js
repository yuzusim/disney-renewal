import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import MovieSlider from "components/movie/MovieSlider";
import Fqa from "components/fqa/Fqa";
import mainVisual from "assets/images/main_visual.jpg";
import paymentImg from "assets/images/payment_img.png";
import icon_1 from "assets/icon/icon_1.png";
import icon_2 from "assets/icon/icon_2.png";
import icon_3 from "assets/icon/icon_3.png";
import icon_4 from "assets/icon/icon_4.png";

function HomeContent() {
  return (
    <div className={styles.content}>
      {/* Section 01 : Main Visual */}
      <section
        className={`${styles.sec01}`}
        style={{ backgroundImage: `url(${mainVisual})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.title}>
          <h2 className={`mb-80`}>
            이 모든 이야기가 여기에 <br />
            지금 스트리밍 중
          </h2>
          <p className={`mb-70`}>
            디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star에서 제공하는
            최신작 등<br /> 다양하고 풍성한 콘텐츠를 디즈니+에서 만나보세요.
          </p>
          <Link to="/" className={`${styles.moreBtn}`}>
            시작하기
          </Link>
        </div>
      </section>
      {/* Section 02 : Movie 인기 콘텐츠 Slider */}
      <section className={`${styles.sec02}`}>
        <div className={styles.title}>
          <h2 className={`mb-30`}>놓치지 마, 인기 콘텐츠 한눈에</h2>
          <p className={`mb-50`}>
            수많은 인기 콘텐츠와 화제작, 흥행작을 지금 디즈니+에서 한 번에
            몰아보고 즐겨보세요.
          </p>
          <MovieSlider />
        </div>
      </section>
      {/* Section 03 :  결제, 지불방법  */}
      <section className={`${styles.sec03}`}>
        <div className={styles.title}>
          <h2 className={`mb-30`}>
            취향에 따라 골라보는 다양한 콘텐츠 모두 한자리에
          </h2>
          <p className={`mb-50`}>
            디즈니+는 디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star의
            최고 콘텐츠들을 모두 한곳에 모아 제공합니다.
          </p>
        </div>

        {/* <!--결제, 지불방법--> */}
        <div className={styles.paymentWrap}>
          <div className={styles.paymentLeft}>
            <div className={styles.priceBox}>
              <div className={`${styles.standard} ${styles.price}`}>
                <p>디즈니+ 스탠다드</p>
                <div className={`${styles.moreBtn}`}>
                  <Link to="/">월 9,900원</Link>
                </div>
              </div>
              <div className={`${styles.premium} ${styles.price}`}>
                <p>디즈니+ 프리미엄</p>
                <div className={`${styles.moreBtn}`}>
                  <Link to="/">월 13,900원</Link>
                </div>
              </div>
            </div>
            <div className={styles.paymenTxt}>
              <p>
                결제 화면에서 결제 주기를 선택할 수 있습니다.
                <br />
                프리미엄 연간 멤버십 또는 스탠다드 연간 멤버십으로 최대 16%
                할인*을 받을 수 있습니다.
                <br />더 자세한 사항은 모든 멤버십 유형 보기에서 확인해 보세요.
              </p>
              <span>
                디즈니+ 스탠다드는 월 9,900원부터, 디즈니+ 프리미엄은 월
                13,900원부터 구독 가능합니다.
              </span>
            </div>
          </div>
          <div
            className={styles.paymentRight}
            style={{ backgroundImage: `url(${paymentImg})` }}
          ></div>
        </div>
      </section>

      {/* Section 04 : 가입해야 하는 또 다른 이유 */}
      <section className={`${styles.sec04}`}>
        <div className={styles.title}>
          <h2 className={`mb-30`}>가입해야 하는 또 다른 이유</h2>
          <p className={`mb-50`}>
            디즈니+는 수백 편의 영화, 수천 회 이상의 에피소드, 다양한 디즈니+
            오리지널을 제공합니다.
            <br /> 다양하고 풍성한 콘텐츠를 디즈니+에서 만나보세요.
          </p>
        </div>
        <ul className={`${styles.bannerList}`}>
          <li>
            <Link to="/">
              <div className={styles.bnIcon}>
                <img src={icon_1} alt="TV로 즐기세요" />
              </div>
              <div className={styles.bnTxtBox}>
                <h3>TV로 즐기세요</h3>
                <p>
                  스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
                  플레이어 등 다양한 디바이스에서 시청하세요.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={styles.bnIcon}>
                <img src={icon_2} alt="즐겨 보는 콘텐츠" />
              </div>
              <div className={styles.bnTxtBox}>
                <h3>
                  즐겨 보는 콘텐츠를 저장해
                  <br /> 오프라인으로 시청하세요
                </h3>
                <p>간편하게 저장하고 빈틈없이 즐겨보세요.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={styles.bnIcon}>
                <img src={icon_3} alt="다양한 디바이스로 시청하세요" />
              </div>
              <div className={styles.bnTxtBox}>
                <h3>다양한 디바이스로 시청하세요</h3>
                <p>
                  각종 영화와 시리즈를 스마트폰, 태블릿,
                  <br /> 노트북, TV에서 무제한으로 스트리밍하세요.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={styles.bnIcon}>
                <img src={icon_4} alt="전용 프로필" />
              </div>
              <div className={styles.bnTxtBox}>
                <h3>전용 프로필을 만들어 보세요</h3>
                <p>
                  나만의 공간에서 취향의 콘텐츠와 함께하는 짜릿한 여정. 당신만을
                  위한 특별한 경험을 선물하세요. 디즈니 플러스 회원이라면
                  무료입니다.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      {/* Section 05 : 자주 묻는 질문 */}
      <section className={`${styles.sec05}`}>
        <div className={styles.title}>
          <h2 className={`mb-50`}>자주 묻는 질문</h2>
        </div>
        <Fqa />
      </section>
    </div>
  );
}

export default HomeContent;
