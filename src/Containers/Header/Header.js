import React, { Fragment, useState } from "react";
import styles from "./Header.module.css";
import Image from "react-image-webp";

export default function Header() {
  return (
    <div className={styles.MainDiv}>
      <div className={styles.mainNav}>
        <div className={styles.mainHeadingDiv}>
          <h1 className={styles.mainHeadingH1}>
            No bullshit Slovenian IT jobs
          </h1>
          <h1 className={styles.mainHeadingH2}>
            Salary, Programming language and employment level
            <br></br>
          </h1>
          {/* comment here
          <div className={styles.mainHeadingSearchDiv}>
            <button className={styles.searchButton}>
              <img
                className={styles.searchPicture}
                src="https://img.icons8.com/ios-filled/30/000000/search--v1.png"
              />
            </button>
            <input className={styles.searchInputJob} />
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
