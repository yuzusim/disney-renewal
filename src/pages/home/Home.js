import React from "react";

import HomeContent from "pages/home/HomeContent";
import styles from "./Home.module.scss";

function Home({ loading, setLoading }) {
  return (
    <div className={styles.container}>
      <HomeContent />
    </div>
  );
}

export default Home;
