import axios from "axios";
import React, { useState, useEffect } from "react";
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.production.min";
import logo from "../../logo.svg";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styles from "./MainContainer.module.css"; // Import css modules stylesheet as styles
export default function MainContainer() {
  const [jobs, setJobs] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [fileteredBy, setFileteredBy] = useState([]);
  const [addingRemote, setAddingRemote] = useState("false");
  //load jobs as inital

  const loadJobs = async () => {
    //dev  =>
    const jobbs = await axios.get("/api/v1/jobs", {
      headers: {
        Authorization: `token thisisforyourbest123`,
      },
    });
    setFileteredBy([]);
    document.querySelector("#divremote").checked = false;
    console.log(jobbs.data.jobs[0]);
    setJobs(jobbs.data.jobs);
  };

  const getJobDetails = async (e) => {
    console.log(e.target.parentElement.parentElement);

    //če je odprti, torej je height 500px

    if (Number(window.screen.width) > 900) {
      if (e.target.parentElement.parentElement.style.height === "800px") {
        //spremeni height v 140px
        e.target.parentElement.parentElement.style.height = "100px";
        console.log(e.target.parentElement.parentElement.classList);
        //selectaj job description in ga odstarni AKA display:none
        document.querySelectorAll(
          `[data-jobdescription-id="${e.target.id}"]`
        )[0].style.display = "none";
        e.target.textContent = "Click here to show more";
      } else {
        e.target.parentElement.parentElement.style.height = "800px";

        document.querySelectorAll(
          `[data-jobdescription-id="${e.target.id}"]`
        )[0].style.display = "block";
        e.target.textContent = "Click here to show less";
      }
    } else if (Number(window.screen.width) < 600) {
      if (e.target.parentElement.parentElement.style.height === "800px") {
        //spremeni height v 500px
        e.target.parentElement.parentElement.style.height = "500px";
        //selectaj job description in ga odstarni AKA display:none
        document.querySelectorAll(
          `[data-jobdiv-id="${e.target.id}"]`
        )[0].style.display = "flex";
        document.querySelectorAll(
          `[data-jobdescription-id="${e.target.id}"]`
        )[0].style.display = "none";
        e.target.textContent = "Click here to show less";
      } else {
        e.target.parentElement.parentElement.style.height = "800px";

        document.querySelectorAll(
          `[data-jobdiv-id="${e.target.id}"]`
        )[0].style.display = "none";
        document.querySelectorAll(
          `[data-jobdescription-id="${e.target.id}"]`
        )[0].style.display = "block";
        e.target.textContent = "Click here to show more";
      }
    }

    // const id = e.target.id;
    // const job = await axios.get(`/api/v1/job/${id}`);
  };

  const loadAllJobs = async () => {
    //dev  =>
    const jobbs = await axios.get("/api/v1/jobs", {
      headers: {
        Authorization: `token thisisforyourbest123`,
      },
    });
    setFileteredBy([]);
    document.querySelector("#divremote").checked = false;
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
      loadJobs();
      for (
        let index = 0;
        index < document.querySelectorAll(`[data-expandable="yes"]`).length;
        index++
      ) {
        const element = document.querySelectorAll(`[data-expandable="yes"]`)[
          index
        ];
        const element2 = document.querySelectorAll(
          `[data-job-expandable="yes"]`
        )[index];
        const element3JobDiv = document.querySelectorAll(
          `[data-jobdiv-expandable="yes"]`
        )[index];
        if (Number(window.screen.width) > 900) {
          element2.style.height = "100px";
          element.style.display = "none";
        } else if (Number(window.screen.width) < 600) {
          element2.style.height = "500px";
          element.style.display = "none";
          element3JobDiv.style.display = "flex";
        }
      }
    } else {
      for (
        let index = 0;
        index < document.querySelectorAll(`[data-expandable="yes"]`).length;
        index++
      ) {
        const element = document.querySelectorAll(`[data-expandable="yes"]`)[
          index
        ];
        const element2 = document.querySelectorAll(
          `[data-job-expandable="yes"]`
        )[index];
        const element3JobDiv = document.querySelectorAll(
          `[data-jobdiv-expandable="yes"]`
        )[index];
        if (Number(window.screen.width) > 900) {
          element2.style.height = "100px";
          element.style.display = "none";
        } else if (Number(window.screen.width) < 600) {
          element2.style.height = "500px";
          element.style.display = "none";
          element3JobDiv.style.display = "flex";
        }
      }

      console.log(e.target.attributes);
      filters.splice(filters.indexOf(e.target.attributes.filter.value), 1);
      let filterDeep = [...filters];
      if (filterDeep.some((el) => el === "c#")) {
        filterDeep.splice(filterDeep.indexOf("c#"), 1, "chashtag");
      }

      console.log(filterDeep);
      const jobbs = await axios.get(
        `/api/v1/sort/langfilter=${filterDeep.join("-")}&remote=${addingRemote}`
      );
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
      // if (
      //   e.target.textContext === "Office" ||
      //   e.target.textContext === "remote"
      // ) {
      //   return;
      // }
      console.log(filters);
      if (!filters.includes(e.target.outerText)) {
        filters.push(e.target.outerText.toLowerCase());
      }

      for (
        let index = 0;
        index < document.querySelectorAll(`[data-expandable="yes"]`).length;
        index++
      ) {
        const element = document.querySelectorAll(`[data-expandable="yes"]`)[
          index
        ];
        const element2 = document.querySelectorAll(
          `[data-job-expandable="yes"]`
        )[index];
        const element3JobDiv = document.querySelectorAll(
          `[data-jobdiv-expandable="yes"]`
        )[index];
        console.log(window.screen.width);
        if (Number(window.screen.width) > 900) {
          element2.style.height = "100px";
          element.style.display = "none";
        } else if (Number(window.screen.width) < 600) {
          element2.style.height = "500px";
          element.style.display = "none";
          element3JobDiv.style.display = "flex";
        }
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
      const jobbs = await axios.get(
        `/api/v1/sort/langfilter=${filterDeep.join("-")}&remote=${addingRemote}`
      );

      setFileteredBy(filters);
      setJobs(jobbs.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const addLangFilter = async (e) => {
    try {
      let filters = fileteredBy;
      if (e.target.value === "office" || e.target.value === "remote") {
        return;
      }
      if (!filters.includes(e.target.value)) {
        filters.push(e.target.value.toLowerCase());
      }

      for (
        let index = 0;
        index < document.querySelectorAll(`[data-expandable="yes"]`).length;
        index++
      ) {
        const element = document.querySelectorAll(`[data-expandable="yes"]`)[
          index
        ];
        const element2 = document.querySelectorAll(
          `[data-job-expandable="yes"]`
        )[index];
        const element3JobDiv = document.querySelectorAll(
          `[data-jobdiv-expandable="yes"]`
        )[index];
        if (Number(window.screen.width) > 900) {
          element2.style.height = "100px";
          element.style.display = "none";
        } else if (Number(window.screen.width) < 600) {
          element2.style.height = "500px";
          element.style.display = "none";
          element3JobDiv.style.display = "flex";
        }
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
      console.log("addingRemote", addingRemote);
      console.log("addingRemote", document.querySelector("#divremote").value);

      if (
        document.querySelector("#divremote").value === "remote" ||
        document.querySelector("#divremote").value === undefined
      ) {
        setAddingRemote("true");
      } else if (document.querySelector("#divremote").value === "office") {
        setAddingRemote("false");
      }
      const jobbs = await axios.get(
        `/api/v1/sort/langfilter=${filterDeep.join("-")}&remote=${addingRemote}`
      );

      setFileteredBy(filters);
      setJobs(jobbs.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const AddRemoteFilter = async (e) => {
    setAddingRemote(e.target.checked);
    let filters = fileteredBy;

    for (
      let index = 0;
      index < document.querySelectorAll(`[data-expandable="yes"]`).length;
      index++
    ) {
      const element = document.querySelectorAll(`[data-expandable="yes"]`)[
        index
      ];
      const element2 = document.querySelectorAll(`[data-job-expandable="yes"]`)[
        index
      ];
      const element3JobDiv = document.querySelectorAll(
        `[data-jobdiv-expandable="yes"]`
      )[index];
      if (Number(window.screen.width) > 900) {
        element2.style.height = "100px";
        element.style.display = "none";
      } else if (Number(window.screen.width) < 600) {
        element2.style.height = "500px";
        element.style.display = "none";
        element3JobDiv.style.display = "flex";
      }
    }

    let filterDeep = [...filters];
    if (
      filterDeep.includes("c#") ||
      filterDeep.includes("C#") ||
      filterDeep.includes("c #")
    ) {
      filterDeep.splice(filterDeep.indexOf("c#"), 1, "chashtag");
    }
    const jobbs = await axios.get(
      `/api/v1/sort/text=${filterDeep.join("-")}&remote=${e.target.checked}`
    );

    setJobs(jobbs.data.jobs);
  };
  const addJoblink = async (e) => {
    console.log("a");
  };
  return (
    <div className={styles.mainContainerDiv}>
      <a
        href="/post-a-job"
        onClick={addJoblink}
        className={styles.addAJobButton}
      >
        Post a job
      </a>
      <a href="/user-email" className={styles.emailJob}>
        Get email for job of your liking
      </a>
      {/* <div className={styles.sortedDiv}>
        <button className={styles.buttonSort} onClick={sortbyPlacilo}>
          {" "}
          sort by pay
        </button>
        <button className={styles.buttonSort} onClick={sortbyDate}>
          {" "}
          sort by date
        </button>
      </div> */}
      <div className={styles.fillterDiv}>
        {" "}
        <div onChange={addLangFilter} className={styles.filteredDivOne}>
          <select placeholder="language" className={styles.selectDiv}>
            <option value="c#">c#</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="c++">c++</option>
            <option value="html">html</option>
            <option value="vue">vue</option>
            <option value="react">react</option>
            <option value="python">python</option>
            <option value="node">node</option>
            <option value="django">django</option>
            <option value="ios">ios</option>
            <option value="android">android</option>
            <option value="java">java</option>
            <option value="sql">sql</option>
            <option value=".net">.net</option>
            <option value="typescript">typescript</option>
            <option value="php">php</option>
            <option value="jquery">jquery</option>
            <option value="AWS">aws</option>
          </select>
          <div className={styles.selectDivremote}>
            <input
              id="divremote"
              value="office"
              type="checkbox"
              onClick={AddRemoteFilter}
            />{" "}
            <label htmlFor="divremote">Remote</label>
          </div>
          {/* <button
            value="paysort"
            onClick={sortbyPlacilo}
            className={styles.buttonByPay}
          >
            By Pay
          </button> */}
          <button onClick={loadAllJobs} className={styles.getAlldiv}>
            All Jobs
          </button>
        </div>
        <div className={styles.filteredDivTwo}>
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
      </div>
      <div className={styles.jobsFound}>{jobs.length} jobs found </div>
      {jobs.map((el, i) => (
        <div
          data-job-expandable="yes"
          data-job-id={el.id}
          id={i}
          key={i}
          className={styles.Job}
        >
          <div
            data-jobdiv-id={el.id}
            data-jobdiv-expandable="yes"
            className={styles.JobDiv}
          >
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
                <div className={styles.lokacija}>
                  <span>📍</span>
                  <span>
                    {el.lokacija}
                    {el.isRemote ? (
                      <span className={styles.remotePosition}>
                        {el.lokacija !== "" ? <span>, </span> : null}
                        Remote
                      </span>
                    ) : null}
                  </span>{" "}
                </div>
                <div className={styles.placilo}>
                  {" "}
                  💶 &nbsp;{/* */}
                  {el.placilo}
                  {el.isBruto == "bruto" ? (
                    <span>bruto</span>
                  ) : (
                    <span>neto</span>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.programmingLanguages}>
              {el.programmingLanguages.map((el2, j) => (
                <div
                  value={el2}
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
                  href={
                    el.email.includes("@") ? `mailto:${el.email}` : el.email
                  }
                >
                  Apply
                </a>
              </div>
              {/* {el.isRemote ? <div>Is remote </div> : null} */}
            </div>
            <div
              id={el.id}
              className={styles.jobDetails}
              onClick={getJobDetails}
            >
              Click here to show more
            </div>
          </div>
          <div
            data-jobdescription-id={el.id}
            data-expandable="yes"
            className={styles.jobDescription}
          >
            <div>
              <h1 className={styles.jobDescriptionHeading}>Job description</h1>
              <p className={styles.jobDescriptionParagraph}>
                {el.opisDelovnegaMesta}
              </p>
            </div>
            <div>
              <h1 className={styles.jobDescriptionHeading}>Job requirements</h1>
              <p className={styles.jobDescriptionParagraph}>{el.zahteve}</p>
            </div>
            <div>
              <h1 className={styles.jobDescriptionHeading}>How to Apply</h1>
              <p className={styles.jobDescriptionParagraph}>{el.kontakt}</p>
            </div>
            <div
              id={el.id}
              className={styles.jobDetailsMobile}
              onClick={getJobDetails}
            >
              Click here to show less
            </div>
            <a
              className={styles.linkButtonJobDescription}
              target={"_blank"}
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
