import projectDate from "data/projectDate";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { IProjectData } from "type";

const ProjectContainer = styled.div<{ $lastProject?: boolean }>`
  color: var(--black);

  ${({ $lastProject }) => $lastProject && `
    margin-left: auto;
    color: var(--white);

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  `}
`;

const ProjectNumber = styled.h6`
  font-size: var(--font-size-m);
  color: var(--gray_a);
  font-weight: bold;
  margin-bottom: clamp(0.8rem, 1.5vw, 1rem);
`;

const ProjectContent = styled.div<{ $lastProject?: boolean }>`
  width: clamp(250px, 60vw, 500px);
  height: auto;
  aspect-ratio: 1 / 0.65;
  padding: 25px;
  position: relative;
  border-radius: clamp(1.2rem, 2.5vw, 5rem);
  background: linear-gradient(var(--gray_f5), #ffffff00);
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $lastProject }) => $lastProject && `
    background: linear-gradient(var(--white), var(--black));
  `}
`;

const ProjectText1 = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size-l);
  font-size: clamp(1.8rem, 20vw, 15rem);
  opacity: 0.5;
`;

const ProjectText2 = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size-l);
  text-align: center;
`;

const ProjectLogo = styled.img`
  max-width: 150px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

const ProjectTitle = styled.h2`
  font-size: var(--font-size-l);
  font-weight: bold;
  margin-top: clamp(1rem, 2vw, 2rem);
`;

const ProjectDescription = styled.p`
  font-size: var(--font-size-s);
  margin-top: clamp(0.8rem, 1.5vw, 1rem);
`;

export default function ProjectItem({project, lastProject = false}:{project:IProjectData, lastProject?:boolean}) {
  
  return (
    <ProjectContainer $lastProject={lastProject}>
      <ProjectNumber>PROJECT {project.id}</ProjectNumber>
      <Link to={!lastProject ? `/Project/${project.id}` : ''}>
        <ProjectContent $lastProject={lastProject}>
          {project.boxType === 'text' ? 
            <>
              <ProjectText1>{project.boxText_1}</ProjectText1>
              {project.boxText_2 && <ProjectText2 dangerouslySetInnerHTML={{ __html: project.boxText_2 }}/>}
            </>
            :
            <ProjectLogo src={project.boxImage} alt={project.boxImageAlt} />
          }
        </ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: project.info }} />
      </Link>
    </ProjectContainer>
  )
}