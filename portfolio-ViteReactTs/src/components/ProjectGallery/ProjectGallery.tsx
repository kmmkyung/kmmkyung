import type { IProjectData } from "../../type";
import styles from "./ProjectGallery.module.scss";

export default function ProjectGallery({ projectData }: { projectData:IProjectData }) {
  return (
    <div className={styles.projectGalleryContainer}>
      { projectData.images.map((image, index) => {
        return (
          <img className={`${styles.projectImg} ${styles.projectGalleryContent}`} key={index} src={image} />
        )
      })}
      <video className={`${styles.videoPc} ${styles.projectGalleryContent}`} src={projectData.videoPc} autoPlay loop muted playsInline />
    </div>
  );
}