import type { IProjectData } from "../../type";
import styles from "./StickyVisualSection.module.scss";

export default function StickyVisualSection({projectData}:{projectData:IProjectData}) {
  return (
    <section className={styles.stickyVisual}>
      <img src={projectData.stickyVisual} alt={projectData.title} />
    </section>
  );
}