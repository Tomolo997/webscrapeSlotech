import axios from "axios";
import React, { useState, useEffect } from "react";
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.production.min";
import logo from "../../logo.svg";
import styles from "./MainContainer.module.css"; // Import css modules stylesheet as styles
export default function MainContainer() {
  const [jobs, setJobs] = useState([]);
  const [fileteredBy, setFileteredBy] = useState([]);
  //load jobs as inital

  const loadJobs = async () => {
    //dev  =>http://localhost:4001
    const jobbs = await axios.get("/api/v1/jobs", {
      headers: {
        Authorization: `token thisisforyourbest123`,
      },
    });
    setFileteredBy([]);
    setJobs(jobbs.data.jobs);
  };

  const sortbyPlacilo = async () => {
    const jobbs = await axios.get("/api/v1/jobs-sorted-by-pay");
    setFileteredBy([]);
    setJobs(jobbs.data.jobs);
  };
  const sortbyDate = () => {
    loadJobs();
  };
  useEffect(() => {
    loadJobs();
  }, []);

  const showTitle = (e) => {
    const documentElement = e.target.childNodes;
    if (documentElement[1] === undefined || documentElement[2] === undefined) {
      return;
    }
    documentElement[1].style.display = "block";
    documentElement[2].style.display = "block";
  };

  const hideTitle = (e) => {
    const documentElement = e.target.childNodes;
    if (documentElement[1] === undefined || documentElement[2] === undefined) {
      e.target.style.display = "none";
      e.target.parentNode.childNodes[1].style.display = "none";
      return;
    }
    documentElement[1].style.display = "none";
    documentElement[2].style.display = "none";
  };

  const removeFilter = async (e) => {
    // try {
    let filters = fileteredBy;
    if (filters.length === 1) {
      filters = [];
      setFileteredBy(filters);
      const jobbs = await axios.get(`/api/v1/jobs`, {
        headers: {
          Authorization: `token thisisforyourbest123`,
        },
      });
      setJobs(jobbs.data.jobs);
    } else {
      filters.splice(filters.indexOf(e.target.attributes.filter.value), 1);
      let filterDeep = [...filters];
      if (filterDeep.some((el) => el === "c#")) {
        filterDeep.splice(filterDeep.indexOf("c#"), 1, "chashtag");
      }

      console.log(filterDeep);

      const jobbs = await axios.get(`/api/v1/sort/${filterDeep.join("&")}`);
      setJobs(jobbs.data.jobs);
    }
    //remove the filter and then call the api

    //   if (!filters.includes(e.target.textContent)) {
    //     filters.push(e.target.textContent);
    //   }

    //   if (!filters.includes(e.target.textContent)) {
    //     filters.push(e.target.textContent);
    //   }
    //   setFileteredBy(filters);
    //   setJobs(jobbs.data.jobs);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const FilterByProgramingLang = async (e) => {
    try {
      let filters = fileteredBy;
      console.log(e.target.textContent);
      if (!filters.includes(e.target.textContent)) {
        filters.push(e.target.textContent.toLowerCase());
      }

      let filterDeep = [...filters];
      if (
        filterDeep.includes("c#") ||
        filterDeep.includes("C#") ||
        filterDeep.includes("c #")
      ) {
        filterDeep.splice(filterDeep.indexOf("c#"), 1, "chashtag");
      }

      console.log(filterDeep);
      const jobbs = await axios.get(`/api/v1/sort/${filterDeep.join("&")}`);

      setFileteredBy(filters);
      setJobs(jobbs.data.jobs);
    } catch (error) {
      console.log(error);
    }
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
      <div className={styles.fillterDiv}>
        {" "}
        <span className={styles.filteredBySpan}> Filter: </span>
        {fileteredBy.map((el, i) => {
          return (
            <div filter={el} className={styles.filter}>
              {el} &nbsp;
              <span
                filter={el}
                onClick={removeFilter}
                className={styles.deleteFilter}
              >
                ❌
              </span>
            </div>
          );
        })}
      </div>
      {jobs.map((el, i) => (
        <div id={i} key={i} className={styles.Job}>
          {el.AddedByUser ? (
            <div
              title="Added by Company"
              onMouseOver={showTitle}
              onMouseLeave={hideTitle}
              className={styles.AddedByUser}
            >
              ✅<div className={styles.arrowUp}></div>
              <div className={styles.AddedByUserPopDown}>original post</div>
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
                onClick={FilterByProgramingLang}
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
