import Card from "../components/studentProfileViewer/card";
import Info from "../components/studentProfileViewer/info";
import Header from "../components/sharedComponent/Header";
import Footer from "../components/sharedComponent/Footer";
// Iport Styles: This style sheet is used for all component of Profile Viewer
import styles from "../Styles/studentProfileViewer/SPV.module.css";

import axios from "axios";
import { useState, useEffect } from "react";

function ProfileViewer() {
  const [profileFromDB, setProfileFromDB] = useState([]);
  const [picFromDB, setPicFromDB] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/profile").then(function (res) {
      console.log(res.data);
      setProfileFromDB(res.data);
      setPicFromDB(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.profileViewerDisplay}>
        <Card picFromDB={picFromDB} />
        <Info profileFromDB={profileFromDB} />
      </div>
      <Footer />
    </>
  );
}

export default ProfileViewer;
