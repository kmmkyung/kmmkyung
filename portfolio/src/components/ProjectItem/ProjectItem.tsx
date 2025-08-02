import styles from "./ProjectItem.module.scss";
import { Link } from "react-router-dom";
import { IProjectData } from "type";

export default function ProjectItem({project, lastProject = false}:{project:IProjectData, lastProject?:boolean}) {
  return (
    <div className={`${styles["project-container"]} ${lastProject ? styles["last-project"] : ''}`}>
      <h6>PROJECT {project.id}</h6>
      <Link to={!lastProject ? `/Project/${project.id}` : ''}>
        <div className={`${styles["project-content"]} ${lastProject ? styles["last-project"] : ''}`}>
          {project.boxType === 'text' ? 
            <>
              <p>{project.boxText_1}</p>
              {project.boxText_2 && <p dangerouslySetInnerHTML={{ __html: project.boxText_2 }}/>}
            </>
            :
            <img className={styles["project-logo"]} src={project.boxImage} alt={project.boxImageAlt} />
          }
        </div>
        <h2>{project.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: project.info }} />
      </Link>
    </div>
  )
}