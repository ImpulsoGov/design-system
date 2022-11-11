import React from "react";
import styles from "./InfoTab.module.css";

const InfoTab = ({contentList}) => {
  return (
    <>
      <div className={styles.InfoTabContainer}>
        <div className={styles.InfoTabTitle}>{contentList[0].leftTitle}</div>

        <div className={styles.InfoTabBlock}>
          <p className={styles.InfoTabTitle}>{contentList[0].rightTitle}</p>
          <p className={styles.InfoTabContent}>{contentList[0].rightContent}</p>

          <a href={contentList[0].buttonLink} className={styles.InfoTabWhiteButton}>{contentList[0].buttonTitle.toLocaleUpperCase()} ➔</a>

        </div>
      </div>
      <div className={styles.InfoTabContainerBlack}>
        <p className={styles.InfoTabTitleBlack}>{contentList[1].leftTitle}</p>

        <div className={styles.InfoTabBlockBlack}>
          <p className={styles.InfoTabTitleBlack}>{contentList[1].rightTitle}</p>
          <p className={styles.InfoTabContentBlack}>{contentList[1].rightContent}</p>

          <a href={contentList[1].buttonLink} className={styles.InfoTabBlackButton}>{contentList[1].buttonTitle.toLocaleUpperCase()} ➔</a> 

        </div>
      </div>
    </>
  );
};

export { InfoTab };