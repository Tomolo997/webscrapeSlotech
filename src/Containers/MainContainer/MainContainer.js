import axios from "axios";
import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import styles from "./MainContainer.module.css"; // Import css modules stylesheet as styles
export default function MainContainer() {
  const [jobs, setJobs] = useState([]);
  const [fileteredBy, setFileteredBy] = useState([]);

  //load jobs as inital

  const loadJobs = async () => {
    //dev  => http://localhost:4001
    const jobbs = await axios.get("/api/v1/jobs");
    console.log(jobbs.data.jobs);
    setJobs(jobbs.data.jobs);
  };

  const sortbyPlacilo = async () => {
    const jobbs = await axios.get("/api/v1/jobs-sorted-by-pay");
    console.log(jobbs.data.jobs);
    setJobs(jobbs.data.jobs);
  };
  const sortbyDate = () => {
    loadJobs();
  };
  useEffect(() => {
    loadJobs();
  }, []);

  // const FilterByProgramingLang = async (e) => {
  //   try {
  //     let filters = fileteredBy;
  //     if (!filters.includes(e.target.textContent)) {
  //       filters.push(e.target.textContent);
  //     }

  //     const jobbs = await axios.get(
  //       `http://localhost:4001/api/v1/sort/${filters.join("&")}`
  //     );
  //     if (!filters.includes(e.target.textContent)) {
  //       filters.push(e.target.textContent);
  //     }
  //     setFileteredBy(filters);
  //     console.log();
  //     setJobs(jobbs.data.jobs);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
      {/* <div className="filteredBy">
        {" "}
        filtered By:
        {fileteredBy.map((el, i) => {
          return <div>{el}</div>;
        })}
      </div> */}
      {jobs.map((el, i) => (
        <div id={i} key={i} className={styles.Job}>
          {el.AddedByUser ? (
            <div title="Added by Company" className={styles.AddedByUser}>
              ✅
            </div>
          ) : null}
          <div className={styles.basicDetails_Job}>
            <div> 🏢 &nbsp; {el.employer}</div>
            <div> 🧑‍💻 &nbsp; {el.title}</div>
            <div className={styles.placiloInLokacija}>
              <div className={styles.lokacija}>📍 &nbsp; {el.lokacija}</div>
              <div className={styles.placilo}>
                {" "}
                💶 &nbsp;{/* */}
                {el.placilo}
              </div>
            </div>
          </div>
          <div className={styles.programmingLanguages}>
            {el.programmingLanguages.map((el2, j) => (
              <div
                // onClick={FilterByProgramingLang}
                key={j}
                className={styles.language}
              >
                {el2}
              </div>
            ))}
          </div>
          <div className={styles.jobsDivApplyAndDate}>
            <div className={styles.jobPostedDate}>⏰ &nbsp;{el.dateFrom}</div>
            <div className={styles.linkButtonDiv}>
              {" "}
              <a
                className={styles.linkButton}
                target={"_blank"}
                href={el.email.includes("@") ? `mailto:${el.email}` : el.email}
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
