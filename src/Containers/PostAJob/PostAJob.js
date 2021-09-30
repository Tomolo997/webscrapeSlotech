import React, { useState, useEffect } from "react";
import styles from "./PostAJob.module.css"; // Import css modules stylesheet as styles

function PostAJob() {
  const [companyName, setCompanyName] = useState("");
  const [salary, setSalary] = useState([]);
  const [location, setLocation] = useState([]);
  const [position, setPosition] = useState("");
  const [progLang, setProgLang] = useState([]);
  const [applyLink, setApplyLink] = useState("");
  const [applyEmail, setApplyEmail] = useState("");

  const changeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const changePosition = (e) => {
    setPosition(e.target.value);
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
                  <option value="Kr">Kranj</option>
                </select>
                <div className={styles.LocationInDiv}>
                  <label className={styles.inputLabelLocation} for="location">
                    From elsewhere
                  </label>
                  <input
                    className={styles.inputFieldLocation}
                    name="companyName"
                    id="companyId"
                  />
                </div>
                <div className={styles.remoteLocation}>
                  <input
                    className={styles.inputCheckBoxremote}
                    name="companyName"
                    id="companyId"
                    type="checkbox"
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
                  <div className={styles.filter}>{el}</div>
                ))}
              </div>
              <p className={styles.textInputDiv}>Location of the job</p>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} for="language">
                PROGRAMMING LANGUAGES
              </label>
              <select placeholder="language" className={styles.selectDiv}>
                <option slected disabled value="">
                  Language
                </option>
                <option value="javascript">javascript</option>
                <option value="css">css</option>
                <option value="c#">c#</option>
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
              <div
                className={styles.inputFieldProgrammingLanguages}
                name="progLang"
                id="progLang"
              ></div>
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
                    type="number"
                    className={styles.inputSalary}
                    name="toSalary"
                  />
                </div>
                <select
                  placeholder="language"
                  className={styles.selectDivSalary}
                >
                  <option slected disabled value="">
                    Salary
                  </option>
                  <option value="mesec">€/m</option>
                  <option value="uro">€/uro</option>
                </select>
              </div>

              <p className={styles.textInputDiv}>
                Write the position you are looking for. Software engineer,
                Devops, Frontend developer etc.
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
                APPLY URL *
              </label>
              <input
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
                placeholder="example@gmail.com"
                className={styles.inputField}
                name="companyName"
                id="companyId"
              />
              <p className={styles.textInputDiv}>
                Write only the company name inside, without d.o.o, s.p. etc.
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
            <div> 🏢 &nbsp; {companyName} 42 lenght max</div>
            <div> 🧑‍💻 &nbsp; {position}</div>
            <div className={styles.placiloInLokacija}>
              <div className={styles.lokacija}>
                <span>📍</span>
                <span className={styles.spanLocation}>
                  {location.map((el) => (
                    <div>{el},</div>
                  ))}
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
                placilo
                {/* {el.isBruto == "bruto" ? <span>bruto</span> : <span>neto</span>} */}
              </div>
            </div>
          </div>
          <div className={styles.programmingLanguages}>
            {/* {el.programmingLanguages.map((el2, j) => (
              <div
                value={el2}
                onClick={FilterByProgramingLang}
                key={j}
                className={styles.language}
              >
                {el2}
              </div>
            ))} */}
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
            {/* {el.isRemote ? <div>Is remote </div> : null} */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostAJob;
