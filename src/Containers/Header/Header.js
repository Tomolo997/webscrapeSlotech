import React, { Fragment } from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.MainDiv}>
      <div className={styles.mainNav}>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div className={styles.PostJobDiv}>post a job</div>
      </div>
    </div>
  );
}
