import ProjectItem from "components/ProjectItem/ProjectItem";
import projectDate from "data/projectDate";

export default function Home(){
  const projectDateReverse = [...projectDate].reverse();
  return (
    <main>
      <section>
        <div>
          <div>
            <ProjectItem project={projectDate[projectDate.length-1]} lastProject={true} />
          </div>
          <p>
            <span>Portfolio</span><br/>
            <span>Kim min kyung</span>
          </p>
        </div>
      </section>
      <section>
        <div>
          <div>
            {projectDateReverse.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>✨안녕하세요✨</h3>
            <p>
              김민경의 포토폴리오 사이트 입니다.<br />
              <br />
              프론트엔드를 공부하고 있습니다.<br />
              방문해주셔서 감사합니다.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>Stack & Tool</h3>
            <p>
              HTML5 • CSS • JavaScript • JQuery •<br className="br_mobile"/>React.js • Next.js • Vue.js<br />
              Figma • Adobe XD •<br className="br_mobile"/> Adobe illustrator • Adobe Photoshop
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}