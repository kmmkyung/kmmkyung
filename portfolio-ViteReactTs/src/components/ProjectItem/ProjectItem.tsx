import type { IProjectData } from "../../type";
import styles from "./ProjectItem.module.scss";
import { Link } from "react-router-dom";

export default function ProjectItem({project, lastProject = false}:{project:IProjectData, lastProject?:boolean}) {
  const projectNoUrl = project.site == "";
  const projectUrl = lastProject || projectNoUrl ? location.pathname : `/Project/${project.id}`;

  return (
    <div className={`${styles.projectContainer} ${lastProject ? styles.lastProject : ''}`}>
      <h6 className={styles.projectNumber}>PROJECT {project.id}</h6>
        <Link to={projectUrl} tabIndex={lastProject || projectNoUrl ? -1 : 0} onClick={(e) => { if (lastProject || projectNoUrl) e.preventDefault(); }}
        >
        <div className={`${styles.projectContent} ${lastProject ? `${styles.lastProject}` : ''}`}>
            {project.boxType === 'text' ? 
              <>
                <p className={styles.projectText1}>{project.boxText_1}</p>
                {project.boxText_2 && <p className={styles.projectText2} dangerouslySetInnerHTML={{ __html: project.boxText_2 }}/>}
              </>
              :
              <img className={styles.projectLogo} src={project.logo} alt={project.boxImageAlt} />
            }
          </div>
        </Link>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: project.info }} />
        {lastProject ? "" : 
        <div className={styles.stackSvg}>
          {project.stackSvg.map((item,idx) => (
            <img key={idx} src={item} alt="stack"/>
          ))}
        </div>
        }
    </div>
  )
}