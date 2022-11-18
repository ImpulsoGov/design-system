import React from "react";
import Link from "next/link";
import styles from "./InfoTab.module.css";

const InfoTab = ({contentList}) => {
  return (
    <>
      <div className={styles.InfoTabContainer}>
        <div className={styles.InfoTabTitle}>{contentList[0].leftTitle}</div>

        <div className={styles.InfoTabBlock}>
          <p className={styles.InfoTabTitle}>{contentList[0].rightTitle}</p>
          <p className={styles.InfoTabContent}>{contentList[0].rightContent}</p>
          <Link href={contentList[0].buttonLink}>
            <a className={styles.InfoTabWhiteButton}>{contentList[0].buttonTitle.toLocaleUpperCase()} ➔</a>
          </Link>

        </div>
      </div>
      <div className={styles.InfoTabContainerBlack}>
        <p className={styles.InfoTabTitleBlack}>{contentList[1].leftTitle}</p>

        <div className={styles.InfoTabBlockBlack}>
          <p className={styles.InfoTabTitleBlack}>{contentList[1].rightTitle}</p>
          <p className={styles.InfoTabContentBlack}>{contentList[1].rightContent}</p>
          <Link href={contentList[1].buttonLink}>
            <a className={styles.InfoTabBlackButton}>{contentList[1].buttonTitle.toLocaleUpperCase()} ➔</a> 
          </Link>
        </div>
      </div>
    </>
  );
};

export { InfoTab };