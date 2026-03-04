import React from "react";
import styles from "./Loader.module.scss"; // 별도 SCSS 파일로 스타일 관리
import logo from "assets/images/logo.png";

function Loader() {
  return (
    <div className={styles.loader}>
      <div
        className={styles.loaderLogo}
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </div>
  );
}

export default Loader;
