import type { IProjectData } from "../../type";
import styles from "./HeroSection.module.scss";

export default function HeroSection({projectData}:{projectData:IProjectData}){
  return (
    <>
      <div className={styles.thumbnailContainer}>
        <img className={`${styles.thumbnail} ${styles.pc}`} src={projectData.images[0]} alt={projectData.title} />
        <img className={`${styles.thumbnail} ${styles.mobile}`} src={projectData.images[1]} alt={projectData.title} />
      </div>
      <p className={styles.pageTitle}>
        <span className="title">Portfolio</span><br/>
        <span className="subTitle">Kim min kyung</span>
      </p>
    </>
  )
}