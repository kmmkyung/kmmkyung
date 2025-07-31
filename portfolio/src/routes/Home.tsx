import ProjectItem from "components/ProjectItem";
import projectDate from "data/projectDate";
import styled from "styled-components";
import { innerStyle } from "styles/mixins";

const Section1 = styled.section`
  width: 100%;
  height: 100vh;
  color: var(--white);
  position: sticky;
  top: 0;
`;

const Inner = styled.div`
  ${innerStyle}
`

const LastProject = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const PageTitle = styled.p`
  position: absolute;
  bottom: min(3.5vw, 20px);
  font-weight: normal;
  font-size: var(--font-size-s);
  color: var(--gray_a);
  line-height: 2;
`;

const Section2 = styled.section`
  background-color: var(--white);
  border-radius: 4rem 4rem 0 0;
  overflow: hidden;
  position: relative;
  z-index: 2;
  height: 100vh;
`

const Section2Inner = styled(Inner)`
  padding: 0;
`;

const ProjectList = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  gap: min(10vw, 10rem);
  padding: 0 10rem;
`;

const Section3 = styled.section``

const Section4 = styled.section``


export default function Home(){
  const projectDateReverse = [...projectDate].reverse();
  return (
    <main>
      <Section1>
        <Inner>
          <LastProject>
            <ProjectItem project={projectDate[projectDate.length-1]} lastProject={true} />
          </LastProject>
          <PageTitle>
            <span>Portfolio</span><br/>
            <span>Kim min kyung</span>
          </PageTitle>
        </Inner>
      </Section1>
      <Section2>
        <Section2Inner>
          <ProjectList>
            {projectDateReverse.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </ProjectList>
        </Section2Inner>
      </Section2>
    </main>
  );
}