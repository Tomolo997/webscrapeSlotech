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

  const sortbyPlacilo = () => {
    setJobs(jobsDataSorted);
  };
  const sortbyDate = () => {
    setJobs(JobsData);
  };
  useEffect(() => {
    console.log("yeaa");
    loadJobs();
  }, []);

  return (
    <div className={styles.mainContainerDiv}>
      <button onClick={sortbyPlacilo}> sort by placilo</button>
      <button onClick={sortbyDate}> sort by date</button>
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
