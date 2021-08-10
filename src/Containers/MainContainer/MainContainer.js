import React from "react";
import logo from "../../logo.svg";

import styles from "./MainContainer.module.css"; // Import css modules stylesheet as styles
export default function MainContainer() {
  return (
    <div className={styles.mainContainerDiv}>
      <div className={styles.Job}>
        <div className={styles.basicDetails_Job}>
          <div>4FUTURE AGENCY</div>
          <div>Backend developer</div>
          <div className={styles.placiloInLokacija}>
            <div className={styles.lokacija}>Ljubljana</div>
            <div className={styles.placilo}>1800-2500 EUR / mesec</div>
          </div>
        </div>
        <div className={styles.programmingLanguages}>
          <div className={styles.language}>JAVASCRIPT</div>
          <div className={styles.language}>PYTHON</div>
          <div className={styles.language}>PYTHON</div>
          <div className={styles.language}>PYTHON</div>
          <div className={styles.language}>PYTHON</div>
          <div className={styles.language}>PYTHON</div>
        </div>
        <div className={styles.jobPostedDate}>⏰ 10. aug 2021 ob 08:45:06</div>
        <div>
          {" "}
          <button className={styles.applyButton}>Apply to job</button>{" "}
        </div>
      </div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
      <div className={styles.Job}></div>
    </div>
  );
}
