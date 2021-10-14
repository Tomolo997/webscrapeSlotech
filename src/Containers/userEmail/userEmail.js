import styles from "./userEmail.module.css"; // Import css modules stylesheet as styles
import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function UserEmail() {
  const [email, setEmail] = useState("");
  const [remote, setRemote] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [successNewUser, setSuccessNewUser] = useState(false);
  const [filters, setFilters] = useState([]);
  const [includesAfna, setIncludesAfna] = useState(false);

  const history = useHistory();
  function isValiEmail(val) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return "Invalid Email Address";
    }
  }
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
    setEmailError(false);
    setEmail(e.target.value);
    setIncludesAfna(false);
  };

  const joinEmailList = async (e) => {
    e.preventDefault();
    if (isValiEmail(email)) {
      setIncludesAfna(true);
    } else {
      if (!email.includes(".")) {
        setIncludesAfna(true);
        return;
      }
      const res = await axios.post("/api/v1/add-email", {
        email: email,
        filters: filters,
        isRemote: remote,
      });
      const status = res.data.status;
      const message = res.data.message;

      if (status === "error") {
        setEmailError(true);
        setIncludesAfna(false);
      }
      if (status == "success") {
        console.log(message);
        setSuccessNewUser(true);
        setTimeout(() => {
          history.push("/");
        }, 1000);
      }
    }
  };

  const removeJob = (e) => {
    console.log(e.target);

    let proglangFilter = e.target.getAttribute("filter");
    if (proglangFilter === "Remote") {
      document.getElementById("remoteInput").checked = false;
      setRemote(false);
    }
    let filtArray = [...filters];
    filtArray.splice(filtArray.indexOf(proglangFilter), 1);
    setFilters(filtArray);
  };

  const changeRemote = (e) => {
    console.log("CHAGNED");
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
      </header>
      <div className={styles.mainDiv}>
        <div className={styles.h2MainHeaderDiv}>
          {successNewUser ? (
            <h2 className={styles.h2MainHeader}>
              {" "}
              Your welcome Email has been send, get ready to receive jobs 💻
            </h2>
          ) : (
            ""
          )}
        </div>
        <form className={styles.outerLayer}>
          <div class={styles.loadingDiv}></div>
          <div className={styles.innerLayer}>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="textemail">
                USER EMAIL
              </label>

              <input
                onChange={changeEmail}
                className={styles.inputField}
                name="textemail"
                id="emailUser"
                type="email"
                required
                placeholder="example@gmail.com"
              />
              {EmailError ? (
                <div className={styles.errorDiv}>
                  User with this email already exist
                </div>
              ) : null}
              {includesAfna ? (
                <div className={styles.errorDiv}>Enter correct Email</div>
              ) : null}
              <p className={styles.textInputDiv}>
                Enter your email to receive new awesome jobs.{" "}
              </p>
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
                  id="remoteInput"
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
          <button
            type="submit"
            onClick={joinEmailList}
            className={styles.newsletterJoinButton}
          >
            JOIN EMAIL LIST
          </button>
        </form>
      </div>
      <footer className={styles.footer}>
        <div>
          <a class={styles.footerLink} href="/">
            Sloveniaitjobs.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default UserEmail;
