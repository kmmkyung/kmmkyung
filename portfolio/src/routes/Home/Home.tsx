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

const Section3 = styled.section``;

const Section3Content = styled.div`
`;

const Section4 = styled.section``;

const Section4Content = styled.div`
`;

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
      <Section3>
        <Inner>
          <Section3Content>
            <h3>✨안녕하세요✨</h3>
            <p>
              김민경의 포토폴리오 사이트 입니다.<br />
              <br />
              프론트엔드를 공부하고 있습니다.<br />
              방문해주셔서 감사합니다.
            </p>
          </Section3Content>
        </Inner>
      </Section3>
      <Section4>
        <Inner>
          <Section4Content>
            <h3>Stack & Tool</h3>
            <p>
              HTML5 • CSS • JavaScript • JQuery •<br className="br_mobile"/>React.js • Next.js • Vue.js<br />
              Figma • Adobe XD •<br className="br_mobile"/> Adobe illustrator • Adobe Photoshop
            </p>
          </Section4Content>
        </Inner>
      </Section4>
    </main>
  );
}