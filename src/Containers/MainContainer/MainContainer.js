import axios from "axios";
import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import styles from "./MainContainer.module.css"; // Import css modules stylesheet as styles
export default function MainContainer() {
  const [jobs, setJobs] = useState([]);

  //load jobs as inital

  const loadJobs = async () => {
    const jobbs = await axios.get("http://localhost:8000/api/v1/jobs");
    console.log(jobbs.data.jobs);
    setJobs(jobbs.data.jobs);
  };

  const sortbyPlacilo = async () => {
    const jobbs = await axios.get(
      "http://localhost:8000/api/v1/jobs-sorted-by-pay"
    );
    console.log(jobbs.data.jobs);
    setJobs(jobbs.data.jobs);
  };
  const sortbyDate = () => {
    loadJobs();
  };
  useEffect(() => {
    loadJobs();
  }, []);

  const expandMe = (e) => {
    console.log("EXPANDED");
    console.log(e.target.id);
  };
  return (
    <div className={styles.mainContainerDiv}>
      <div className={styles.sortedDiv}>
        <button className={styles.buttonSort} onClick={sortbyPlacilo}>
          {" "}
          sort by pay
        </button>
        <button className={styles.buttonSort} onClick={sortbyDate}>
          {" "}
          sort by date
        </button>
      </div>
      {jobs.map((el, i) => (
        <div onClick={expandMe} id={i} key={i} className={styles.Job}>
          <div className={styles.basicDetails_Job}>
            <div> 🏢  {" "} {el.employer}</div>
            <div> 🧑‍💻  {" "} {el.title}</div>
            <div className={styles.placiloInLokacija}>
              <div className={styles.lokacija}>📍 {el.lokacija}</div>
              <div className={styles.placilo}>
                {" "}
                💶 {/* */} {el.placilo}
              </div>
            </div>
          </div>
          <div className={styles.programmingLanguages}>
            {el.programmingLanguages.map((el2, j) => (
              <div key={j} className={styles.language}>
                {el2}
              </div>
            ))}
          </div>
          <div className={styles.jobPostedDate}>⏰ {el.dateFrom}</div>
          <div>
            {" "}
            <a
              className={styles.linkButton} target={"_blank"}
              href={el.email.includes("@") ? `mailto:${el.email}` : el.email}
            >
              Apply
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
