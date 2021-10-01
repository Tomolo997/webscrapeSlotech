import React, { useState, useEffect } from "react";
import styles from "./PostAJob.module.css"; // Import css modules stylesheet as styles
import axios from "axios";

function PostAJob() {
  const [companyName, setCompanyName] = useState("");
  const [salary, setSalary] = useState([]);
  const [salaryFrom, setSalaryFrom] = useState(null);
  const [salaryTo, setSalaryTo] = useState(null);
  const [location, setLocation] = useState([]);
  const [position, setPosition] = useState("");
  const [progLang, setProgLang] = useState([]);
  const [applyLink, setApplyLink] = useState("");
  const [euroToMonth, setEuroToMonth] = useState("€/m");
  const [applyEmail, setApplyEmail] = useState("");
  const [fromDifferentLocation, setFromDifferentLocation] = useState("");
  const [bruto, setBruto] = useState("bruto");
  const [remote, setRemote] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createdAtTIme, setCreatedAtTime] = useState("");

  const changeFromElsewhere = (e) => {
    setFromDifferentLocation(e.target.value);
  };
  const addToLocationFromElsewhere = () => {
    if (fromDifferentLocation === "") {
      return;
    }
    let locationArray = [...location];
    locationArray.push(fromDifferentLocation);
    setLocation(locationArray);
    setFromDifferentLocation("");
  };

  //remote
  const removeLocation = (e) => {
    let filterLocation = e.target.getAttribute("filter");
    let locationTemo = [...location];
    locationTemo.splice(location.indexOf(filterLocation), 1);
    setLocation(locationTemo);
  };
  const removeJob = (e) => {
    console.log(e.target);
    let proglangFilter = e.target.getAttribute("filter");
    let progLangTemp = [...progLang];
    progLangTemp.splice(progLang.indexOf(proglangFilter), 1);
    setProgLang(progLangTemp);
  };
  const changeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const changePosition = (e) => {
    setPosition(e.target.value);
  };
  const changeEuroToMonth = (e) => {
    setEuroToMonth(e.target.value);
  };
  const setBrutoFunction = (e) => {
    setBruto(e.target.value);
  };
  const applyEmailTo = (e) => {
    setApplyEmail(e.target.value);
  };

  const applyURLlink = (e) => {
    setApplyLink(e.target.value);
  };
  const addLocation = (e) => {
    console.log(e.target.value);
    let locationArray = [...location];
    if (locationArray.includes(e.target.value)) {
      console.log("includes");
      return;
    } else {
      locationArray.push(e.target.value);
      console.log(locationArray);
      setLocation(locationArray);
    }
  };
  const changeSalaryFrom = (e) => {
    setSalaryFrom(e.target.value);
  };
  const changeSalaryTo = (e) => {
    setSalaryTo(e.target.value);
  };
  const addProgrammingLanguage = (e) => {
    console.log(e.target.value);
    let progArray = [...progLang];
    if (progArray.includes(e.target.value)) {
      console.log("includes");
      return;
    } else {
      progArray.push(e.target.value);
      console.log(progArray);
      setProgLang(progArray);
    }
  };
  const isRemote = (e) => {
    setRemote(e.target.checked);
  };

  const createTime = () => {
    var time = new Date();
    const mothnArray = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    var theyear = time.getFullYear();
    var themonth = time.getMonth();
    var thetoday = time.getDate();

    let theSecond = time.getSeconds();
    let theMinute = time.getMinutes();
    let theHour = time.getHours();
    if (theMinute < 9) {
      theMinute = "0" + theMinute;
    }
    if (theSecond < 9) {
      theSecond = "0" + theSecond;
    }
    return (
      thetoday +
      " " +
      mothnArray[themonth] +
      ". " +
      theyear +
      " " +
      theHour +
      ":" +
      theMinute +
      ":" +
      theSecond
    );
  };

  const postAJob = async (e) => {
    try {
      await axios.post(`http://localhost:4001/api/v1/post-job`, {
        title: position,
        employer: companyName,
        numberOfJob: 10000,
        addedByUser: true,
        placilo:
          salaryFrom != ""
            ? salaryFrom + " - " + salaryTo + " " + euroToMonth
            : salaryTo + " " + euroToMonth,
        lokacija: location.length > 1 ? location.join(",") : location[0],
        email: applyLink !== "" ? applyLink : applyEmail,
        zahteve: "",
        kontakt: "",
        isBruto: bruto,
        dateFrom: createTime(),
        isRemote: remote,
        maximumPlacilo: salaryTo,
        opisDelovnegaMesta: "",
        programmingLanguages: progLang,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const [companyName, setCompanyName] = useState("");
  // const [salary, setSalary] = useState([]);
  // const [salaryFrom, setSalaryFrom] = useState(null);
  // const [salaryTo, setSalaryTo] = useState(null);
  // const [location, setLocation] = useState([]);
  // const [position, setPosition] = useState("");
  // const [progLang, setProgLang] = useState([]);
  // const [applyLink, setApplyLink] = useState("");
  // const [euroToMonth, setEuroToMonth] = useState("€/m");
  // const [applyEmail, setApplyEmail] = useState("");
  // const [fromDifferentLocation, setFromDifferentLocation] = useState("");
  // const [remote, setRemote] = useState(false);
  // const [loading, setLoading] = useState(false);
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div></div>
        <div>
          <h1 className={styles.h1MainHeader}>Hire Sloveninan IT</h1>
        </div>
        <div></div>
      </header>
      <div className={styles.mainDiv}>
        <div className={styles.outerLayer}>
          <div className={styles.innerLayer}>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="companyName">
                COMPANY NAME *
              </label>
              <input
                onChange={changeCompanyName}
                className={styles.inputField}
                name="companyName"
                id="companyId"
              />
              <p className={styles.textInputDiv}>
                Write only the company name inside, without d.o.o, s.p. etc.
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="position">
                POSITION *
              </label>
              <input
                className={styles.inputField}
                name="position"
                id="position"
                onChange={changePosition}
              />
              <p className={styles.textInputDiv}>
                Write the position you are looking for. Software engineer,
                Devops, Frontend developer etc.
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="location">
                LOCATION *
              </label>
              <div className={styles.outerDivLocation}>
                <select
                  onChange={addLocation}
                  placeholder="location"
                  className={styles.selectDiv}
                >
                  <option slected disabled value="">
                    Location
                  </option>
                  <option value="Lj">Ljubljana</option>
                  <option value="Mb">Maribor</option>
                  <option value="Ce">Celje</option>
                  <option value="Nm">Novo Mesto</option>
                  <option value="Ms">Murska Sobota</option>
                  <option value="Kop">Koper</option>
                  <option selected value="Kr">
                    Kranj
                  </option>
                </select>
                <div className={styles.LocationInDiv}>
                  <label className={styles.inputLabelLocation} for="location">
                    From elsewhere
                  </label>
                  <input
                    onChange={changeFromElsewhere}
                    className={styles.inputFieldLocation}
                    name="companyName"
                    id="companyId"
                    value={fromDifferentLocation}
                  />
                  <button
                    onClick={addToLocationFromElsewhere}
                    className={styles.addButton}
                  >
                    Add
                  </button>
                </div>

                <div className={styles.remoteLocation}>
                  <input
                    className={styles.inputCheckBoxremote}
                    name="companyName"
                    id="companyId"
                    type="checkbox"
                    onChange={isRemote}
                  />
                  <label
                    className={styles.inputLabelLocationRemote}
                    for="language"
                  >
                    Remote
                  </label>
                </div>
              </div>
              <div
                className={styles.inputFieldProgrammingLanguages}
                name="progLang"
                id="progLang"
              >
                {location.map((el) => (
                  <div key={el} className={styles.filter}>
                    {el}
                    <span
                      filter={el}
                      onClick={removeLocation}
                      className={styles.deleteFilter}
                    >
                      ❌
                    </span>
                  </div>
                ))}
                {remote ? <div className={styles.filter}>Remote</div> : null}
              </div>
              <p className={styles.textInputDiv}>Location of the job</p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="language">
                PROGRAMMING LANGUAGES
              </label>
              <select
                onChange={addProgrammingLanguage}
                placeholder="language"
                className={styles.selectDiv}
              >
                <option slected disabled value="">
                  Language
                </option>
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
                <option value="typescript">typescript</option>
                <option value="php">php</option>
                <option value="jquery">jquery</option>
                <option value="AWS">aws</option>
              </select>
              <div
                className={styles.inputFieldProgrammingLanguages}
                name="progLang"
                id="progLang"
              >
                {progLang.map((el) => (
                  <div key={el} className={styles.filter}>
                    {el}
                    <span
                      filter={el}
                      onClick={removeJob}
                      className={styles.deleteFilter}
                    >
                      ❌
                    </span>
                  </div>
                ))}
              </div>
              <p className={styles.textInputDiv}>
                Select all of the programming lanugages that your job requires
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="position">
                SALARY *
              </label>
              <div className={styles.salaryOutDiv}>
                <div className={styles.salaryInDiv}>
                  <label className={styles.inputLabelSalary} for="fromSalary">
                    From
                  </label>
                  <input
                    onChange={changeSalaryFrom}
                    type="number"
                    className={styles.inputSalary}
                    name="fromSalary"
                  />
                </div>
                <div className={styles.salaryInDiv}>
                  <label className={styles.inputLabelSalary} for="toSalary">
                    To
                  </label>
                  <input
                    onChange={changeSalaryTo}
                    type="number"
                    className={styles.inputSalary}
                    name="toSalary"
                  />
                </div>
                <select
                  onChange={changeEuroToMonth}
                  placeholder="language"
                  className={styles.selectDivSalary}
                >
                  <option slected disabled value="">
                    Salary
                  </option>
                  <option value="€/m">€/m</option>
                  <option value="€/uro">€/uro</option>
                </select>
                <select
                  onChange={setBrutoFunction}
                  placeholder="language"
                  className={styles.selectDivSalary}
                >
                  <option slected disabled value="">
                    Vrsta placila
                  </option>
                  <option value="bruto">bruto</option>
                  <option value="neto">neto</option>
                </select>
              </div>

              <p className={styles.textInputDiv}>
                Select the ranges you are willing to pay the candidates, also
                select if it is bruto or neto
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="companyName">
                JOB DESCRIPTION (coming soon)
              </label>
              <textarea
                maxlength="50"
                className={styles.inputFieldJobDescription}
                name="companyName"
                id="companyId"
              ></textarea>
              <p className={styles.textInputDiv}>
                Write about your company, What is it about, what do you do etc.
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="companyName">
                JOB REQUIREMENTS (coming soon)
              </label>
              <textarea
                maxlength="50"
                className={styles.inputFieldJobDescription}
                name="companyName"
                id="companyId"
              ></textarea>
              <p className={styles.textInputDiv}>
                Write in short what do you need, who are you looking for and so
                on.
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="companyName">
                HOW TO APPLY (coming soon)
              </label>
              <textarea
                maxlength="50"
                className={styles.inputFieldJobDescription}
                name="companyName"
                id="companyId"
              ></textarea>
              <p className={styles.textInputDiv}>
                How to apply to the job. Should they send the CV to the mail or
                should they click on your website and apply there
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="companyName">
                APPLY URL *
              </label>
              <input
                onChange={applyURLlink}
                placeholder="https://"
                className={styles.inputField}
                name="companyName"
                id="companyId"
              />
              <p className={styles.textInputDiv}>
                Give URL for the users to click on it and apply to your job, its
                more effiecient then the email
              </p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="companyName">
                APPLY EMAIL or COMPANY EMAIL *
              </label>
              <input
                onChange={applyEmailTo}
                placeholder="example@gmail.com"
                className={styles.inputField}
                name="companyName"
                id="companyId"
              />
              <p className={styles.textInputDiv}>
                Write the company email, to let the people know how to contact
                you if everything else fails
              </p>
            </div>
            {/* <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="companyName">
                HOW TO APPLY
              </label>
              <textarea
                maxlength="50"
                className={styles.inputField}
                name="companyName"
                id="companyId"
              ></textarea>
              <p className={styles.textInputDiv}>
                Write about your company, What is it about, what do you do etc.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.Job}>
          <div className={styles.basicDetails_Job}>
            <div> 🏢 &nbsp; {companyName}</div>
            <div> 🧑‍💻 &nbsp; {position}</div>
            <div className={styles.placiloInLokacija}>
              <div className={styles.lokacija}>
                <span>📍</span>
                <span className={styles.spanLocation}>
                  {location.map((el) => (
                    <div>{el},</div>
                  ))}
                  {remote ? <div> Remote</div> : null}
                  {/* {el.isRemote ? (
                    <span className={styles.remotePosition}>
                      {el.lokacija.length !== 0 ? <span>, </span> : null}
                      Remote
                    </span>
                  ) : null} */}
                </span>{" "}
              </div>
              <div className={styles.placilo}>
                {" "}
                💶 &nbsp;{/* */}
                {/* {el.placilo}21 */}
                {salaryFrom ? salaryFrom + " - " : null}
                {salaryTo}
                &nbsp;
                {euroToMonth}
                <br />
                {bruto}
                {/* {el.isBruto == "bruto" ? <span>bruto</span> : <span>neto</span>} */}
              </div>
            </div>
          </div>
          <div className={styles.programmingLanguages}>
            {progLang.map((el) => (
              <div key={el} className={styles.filterLang}>
                {el}
                <span
                  filter={el}
                  // onClick={removeFilter}
                  className={styles.deleteFilter}
                >
                  ❌
                </span>
              </div>
            ))}
          </div>
          <div className={styles.jobsDivApplyAndDate}>
            <div className={styles.jobPostedDate}>⏰ &nbsp; Created at</div>
            <div className={styles.linkButtonDiv}>
              {" "}
              <a
                className={styles.linkButton}
                target={"_blank"}
                // href={el.email.includes("@") ? `mailto:${el.email}` : el.email}
              >
                Apply
              </a>
            </div>
          </div>
        </div>
        <button onClick={postAJob} className={styles.postJobFooter}>
          POST JOB
        </button>
      </div>
    </main>
  );
}

export default PostAJob;
