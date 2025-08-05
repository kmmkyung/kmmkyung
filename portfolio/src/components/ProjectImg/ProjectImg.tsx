import type { IProjectData } from "../../type";
import styles from "./ProjectImg.module.scss";

export default function ProjectImg({ projectData }: { projectData:IProjectData }) {
  return (
    <div className={styles.projectImgContainer}>
      { projectData.images.map((image, index) => {
        return (
          <img className={styles.projectImg} key={index} src={image} />
        )
      })}
    </div>
  );
}