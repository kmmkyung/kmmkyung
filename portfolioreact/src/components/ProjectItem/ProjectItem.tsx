import styles from "./ProjectItem.module.scss";
import { Link } from "react-router-dom";
import { IProjectData } from "type";

export default function ProjectItem({project, lastProject = false}:{project:IProjectData, lastProject?:boolean}) {
  return (
    <div className={`${styles.projectContainer} ${lastProject ? styles.lastProject : ''}`}>
      <h6 className={styles.projectNumber}>PROJECT {project.id}</h6>
      <Link to={!lastProject ? `/Project/${project.id}` : ''}>
        <div className={`${styles.projectContent} ${lastProject ? styles.lastProject : ''}`}>
          {project.boxType === 'text' ? 
            <>
              <p className={styles.projectText1}>{project.boxText_1}</p>
              {project.boxText_2 && <p className={styles.projectText2} dangerouslySetInnerHTML={{ __html: project.boxText_2 }}/>}
            </>
            :
            <img className={styles.projectLogo} src={project.boxImage} alt={project.boxImageAlt} />
          }
        </div>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: project.info }} />
      </Link>
    </div>
  )
}