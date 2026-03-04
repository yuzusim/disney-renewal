import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "assets/images/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerPc} w16`}>
        <Link
          to="/"
          className={styles.pcLogo}
          style={{ backgroundImage: `url(${logo})` }}
        ></Link>
        <Link to="/" className={`${styles.logoIn} ${styles.btn}`}>
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
