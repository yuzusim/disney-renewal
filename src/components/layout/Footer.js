import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import logo from "assets/images/logo.png";
import { snsLinks, menuLinks } from "data/footerLinks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.ftIn} w14`}>
        <Link
          to="/"
          className={styles.fLogo}
          style={{ backgroundImage: `url(${logo})` }}
        ></Link>
        <ul className={`${styles.ftSns} pt-80 pb-80`}>
          {snsLinks.map((item) => (
            <li key={item.name}>
              <Link to={item.url} aria-label={item.name}>
                <i className={item.iconClass}></i> {/* Font Awesome 아이콘 */}
                {/* <span className={styles.srOnly}>{item.name}</span>{" "} */}
                {/* 화면 읽기용 */}
                {/* {item.name} */}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`${styles.ftMenu} pb-80`}>
          {menuLinks.map((item) => (
            <li key={item.name}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.ftInfo}>
          <p>
            타사의 사이트로 이동시 , 해당 타사의 약관 및 개인정보처리방침의
            적용을 받습니다.
            <br />
            월트디즈니컴퍼니코리아 유한책임회사 | 대표자: 김소연 | 서울특별시
            강남구 테헤란로 152, 7층 (우편번호: 06236) | Email:
            help@disneyplus.kr
            <br />
            연락처: 080 822 1416 | 사업자등록번호:220-81-03347 | 통신판매업
            신고번호: 제2021-서울강남-05456호 | 비디오물배급업 신고번호:
            제2016-16호
            <br />
            호스팅서비스 사업자: NSOne 디즈니+의 콘텐츠는 서비스 여부에 따라
            달라질 수 있습니다.
            <br className={styles.copy} />© 2025 Disney and its related
            entities. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
