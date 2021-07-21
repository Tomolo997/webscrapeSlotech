import React, { Fragment } from "react";
import styles from "./Header.module.css";
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
            <br></br> Filter the bullshit!
          </h1>
          <div className={styles.mainHeadingSearchDiv}>
            <input className={styles.searchInputJob} />
          </div>
        </div>
      </div>
    </div>
  );
}
