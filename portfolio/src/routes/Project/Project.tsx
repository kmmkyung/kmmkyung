import { useParams } from "react-router-dom";
import projectData from "../../data/projectData";
import styles from "./Project.module.scss";
import StickyVisualSection from "../../components/StickyVisualSection/StickyVisualSection";
import InfoOverlaySection from "../../components/InfoOverlaySection/InfoOverlaySection";
import ProjectImg from "../../components/ProjectImg/ProjectImg";

export default function Project(){
  const { projectId } = useParams()

  const project = projectData.find(item => item.id === Number(projectId));

  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }

  return (
    <main>
      <section className={`section1`}></section>
      <InfoOverlaySection projectData={project}/>
      <StickyVisualSection projectData={project}/>
      <section className={styles.section2}>
        <div className={styles.inner}>
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }} />
          <ProjectImg projectData={project}/>
        </div>
      </section>
    </main>
  );
}