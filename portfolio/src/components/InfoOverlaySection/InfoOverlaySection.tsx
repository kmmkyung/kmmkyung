import { Link } from "react-router-dom";
import type { IProjectData } from "../../type";
import styles from "./InfoOverlaySection.module.scss";

export default function InfoOverlaySection({ projectData }: { projectData: IProjectData }) {
  const stack = projectData.stack.join(' / ')
  const Media = projectData.mediaQuery.join(' / ')
  

  return (
    <section className={styles.infoOverlay}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{projectData.title}</h2>
        <div className={styles.meta}>
          <div className={styles.metaText}>
            <p>Stack: {stack}</p>
            <p>Media Query: {Media}</p>
          </div>
          <Link className={styles.link} to={projectData.site} target="_blank">Vite Site ↗</Link>
        </div>
      </div>
    </section>
  );
}