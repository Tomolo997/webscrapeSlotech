import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import JobsData from "./jobs.json";
import jobsDataSorted from "./jobsSorted.json";
import styles from "./MainContainer.module.css"; // Import css modules stylesheet as styles
export default function MainContainer() {
  const [jobs, setJobs] = useState([]);

  //load jobs as inital

  const loadJobs = () => {
    setJobs(JobsData);
  };

  function compare(a, b) {
    if (a.maximumPlacilo < b.maximumPlacilo) {
      return -1;
    }
    if (a.maximumPlacilo > b.maximumPlacilo) {
      return 1;
    }
    return 0;
  }

  const sortbyPlacilo = () => {
    setJobs(jobsDataSorted);
  };
  useEffect(() => {
    console.log("yeaa");
    loadJobs();
  }, []);

  return (
    <div className={styles.mainContainerDiv}>
      <button onClick={sortbyPlacilo}> sort by placilo</button>
      {jobs.map((el) => (
        <div className={styles.Job}>
          <div className={styles.basicDetails_Job}>
            <div>{el.employer}</div>
            <div>{el.title}</div>
            <div className={styles.placiloInLokacija}>
              <div className={styles.lokacija}>📍 {el.lokacija}</div>
              <div className={styles.placilo}>💶 {el.placilo}</div>
            </div>
          </div>
          <div className={styles.programmingLanguages}>
            {el.programmingLanguages.map((el2) => (
              <div className={styles.language}>{el2}</div>
            ))}
          </div>
          <div className={styles.jobPostedDate}>⏰ {el.dateFrom}</div>
          <div>
            {" "}
            <a className={styles.linkButton} href={el.email}>
              Apply
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
