import React from "react";
import { useState } from "react";
import styles from "./AboutSection.module.css";

const AboutSection = (props) => {
  const [fullView, setFullView] = useState(false);
  return (
    <section className={styles.AboutSectionContainer}>
      <div className={styles.AboutSectionBlock}>
        <div
          className={
            fullView
              ? styles.AboutSectionOpenDescription
              : styles.AboutSectionDescription
          }
        >
          {props.paragraphsList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        {props.paragraphsList.length > 2 && (
          <button onClick={() => setFullView(!fullView)}>
            {fullView ? "LER MENOS" : "LER TUDO"}
          </button>
        )}
      </div>
      {!fullView && <iframe src={props.link} width="390px" height="390px" className={styles.AboutSectionIframe}></iframe>}
    </section>
  );
};

export { AboutSection };
