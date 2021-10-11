import styles from "./userEmail.module.css"; // Import css modules stylesheet as styles
import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function UserEmail() {
  const [email, setEmail] = useState("");
  const [remote, setRemote] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [filters, setFilters] = useState([]);

  const addFilter = (e) => {
    console.log(e.target.value);
    let filtArray = [...filters];
    if (filtArray.includes(e.target.value)) {
      console.log("includes");
      return;
    } else {
      filtArray.push(e.target.value);
      console.log(filtArray);
      setFilters(filtArray);
    }
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const addToFilters = (e) => {};

  const removeJob = (e) => {
    console.log(e.target);
    let proglangFilter = e.target.getAttribute("filter");
    let filtArray = [...filters];
    filtArray.splice(filtArray.indexOf(proglangFilter), 1);
    setFilters(filtArray);
  };

  const changeRemote = (e) => {
    setRemote(e.target.checked);
    if (e.target.checked) {
      let filtArray = [...filters];
      filtArray.push("Remote");
      setFilters(filtArray);
    }
    if (!e.target.checked) {
      let filtArray = [...filters];
      filtArray.splice(filtArray.indexOf("Remote"), 1);
      setFilters(filtArray);
    }
  };
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div></div>
        <div>
          <h1 className={styles.h1MainHeader}>
            Get email for every new job you desire
          </h1>
        </div>
        <div></div>
      </header>
      <div className={styles.mainDiv}>
        <div className={styles.outerLayer}>
          <div className={styles.innerLayer}>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="email">
                USER EMAIL
              </label>

              <input
                onChange={changeEmail}
                className={styles.inputField}
                name="email"
                id="companyId"
                type="email"
              />
              {EmailError ? (
                <div className={styles.errorDiv}>
                  Please fill out the required field
                </div>
              ) : (
                <div>&nbsp;</div>
              )}
              <p className={styles.textInputDiv}>Fill out the</p>
            </div>
            <div className={styles.inputDivFilters}>
              <label className={styles.inputLabel} for="language">
                FILTERS
              </label>
              <select
                onChange={addFilter}
                placeholder="language"
                className={styles.selectDiv}
              >
                <option slected disabled value="">
                  Language
                </option>
                <option value="typescript">typescript</option>
                <option value="javascript">javascript</option>
                <option value="css">css</option>
                <option value="c#">c#</option>
                <option value="c++">c++</option>
                <option value="html">html</option>
                <option value="vue">vue</option>
                <option value="angular">angular</option>
                <option value="react">react</option>
                <option value="python">python</option>
                <option value="node">node</option>
                <option value="django">django</option>
                <option value="ios">ios</option>
                <option value="android">android</option>
                <option value="java">java</option>
                <option value="sql">sql</option>
                <option value=".net">.net</option>
                <option value="php">php</option>
                <option value="jquery">jquery</option>
                <option value="AWS">aws</option>
              </select>
              <div className={styles.remoteLocation}>
                <input
                  className={styles.inputCheckBoxremote}
                  name="companyName"
                  id="companyId"
                  type="checkbox"
                  onChange={changeRemote}
                />
                <label
                  className={styles.inputLabelLocationRemote}
                  for="language"
                >
                  Remote
                </label>
              </div>
              <div
                className={styles.inputFieldProgrammingLanguages}
                name="progLang"
                id="progLang"
              >
                {filters.map((el) => (
                  <div key={el} className={styles.filter}>
                    {el}
                    <span
                      onClick={removeJob}
                      filter={el}
                      className={styles.deleteFilter}
                    >
                      ❌
                    </span>
                  </div>
                ))}
              </div>
              <p className={styles.textInputDiv}>
                Add filters to your job search
              </p>
            </div>
          </div>
          <button className={styles.newsletterJoinButton}>
            JOIN EMAIL LIST
          </button>
        </div>
      </div>
      <footer>footer</footer>
    </main>
  );
}

export default UserEmail;
