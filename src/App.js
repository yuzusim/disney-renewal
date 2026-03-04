import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "components/layout/Layout";
import Home from "pages/home/Home";
import Loader from "components/loader/Loader";

function App() {
  const [appLoading, setAppLoading] = useState(true);

  // useEffect(() => {
  //   // 앱 초기 로딩 (예시)
  //   setTimeout(() => {
  //     setAppLoading(false);
  //   }, 1500);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 앱 초기 로딩 중일 때는 Loader만 렌더
  if (appLoading) {
    return <Loader />; // 여기서만 Loader
  }

  // 로딩 끝나면 Layout + Routes 렌더
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
