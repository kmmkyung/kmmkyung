// cSpell: disable

import { useEffect, useRef, type RefObject } from "react";
import { useOutletContext } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import projectDate from "../../data/projectData";
import styles from "./Home.module.scss";
import ProjectItemStyles from "../../components/ProjectItem/ProjectItem.module.scss";
import projectData from "../../data/projectData";

type ContextType = {
  headerLogoRef: RefObject<HTMLDivElement>;
};

export default function Home(){
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const { headerLogoRef } = useOutletContext<ContextType>();
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const lastProjectRef = useRef<HTMLDivElement | null>(null);
  const projectDataReverse = [...projectDate].reverse();

  // header - svg color change on scroll
  useEffect(()=>{
    if (!headerLogoRef.current) return;
    const whitePaths = headerLogoRef.current.querySelectorAll<SVGElement>(".white");

    const section1 = section1Ref.current!;
    const section2 = section2Ref.current!;
    const section3 = section3Ref.current!;
    const section4 = section4Ref.current!;
    if (!section1 || !section2 || !section3 || !section4) return;

    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;    
    const menuWords = document.querySelectorAll<HTMLSpanElement>(".menuWord");

    window.addEventListener('scroll', function(){
      const scrollTop = window.scrollY;
  
      if(scrollTop < section1.clientHeight - headerHeight){ 
        whitePaths.forEach((svg) => svg.classList.add("white"));
        menuWords.forEach((word) => word.classList.add("white"));
        whitePaths.forEach((svg) => svg.classList.remove("black"));
        menuWords.forEach((word) => word.classList.remove("black"));
      }
      else if(scrollTop >= section1.clientHeight - headerHeight
        && scrollTop < section3.offsetTop - headerHeight){
          whitePaths.forEach((svg) => svg.classList.remove("white"));
          menuWords.forEach((word) => word.classList.remove("white"));
          whitePaths.forEach((svg) => svg.classList.add("black"));
          menuWords.forEach((word) => word.classList.add("black"));
      }
      else if(scrollTop >= section3.offsetTop - headerHeight
        && scrollTop < section4.offsetTop - headerHeight){
          whitePaths.forEach((svg) => svg.classList.add("white"));
          menuWords.forEach((word) => word.classList.add("white"));
          whitePaths.forEach((svg) => svg.classList.remove("black"));
          menuWords.forEach((word) => word.classList.remove("black"));
      }
      else if(scrollTop >= section4.offsetTop - headerHeight
        && scrollTop < section4.offsetTop + section4.offsetHeight - headerHeight){
          whitePaths.forEach((svg) => svg.classList.remove("white"));
          menuWords.forEach((word) => word.classList.remove("white"));
          whitePaths.forEach((svg) => svg.classList.add("black"));
          menuWords.forEach((word) => word.classList.add("black"));
      }
      else {
        whitePaths.forEach((svg) => svg.classList.add("white"));
        menuWords.forEach((word) => word.classList.add("white"));
        whitePaths.forEach((svg) => svg.classList.remove("black"));
        menuWords.forEach((word) => word.classList.remove("black"));
      }
    });
  },[]);
  
  // section1 - last project GSAP animation
  useGSAP(() => {
    if (!lastProjectRef.current) return;
    const timeline = gsap.timeline()
    const targets = lastProjectRef.current.querySelectorAll('h6, h2, p, img') ;

    timeline.from(lastProjectRef.current,{ opacity: 0, duration: 2})
    .from(targets, { opacity: 0, y: 20, duration: 2, stagger: 0.2 }, '-=1.5');
  }, []);
  
  //section2 - horizontal scroll GSAP animation
  useGSAP(() => {
    function initAnimation() {
    if (!section2Ref.current) return;
      const container = section2Ref.current;
      const project = container.querySelectorAll(`.${ProjectItemStyles.projectContainer}`);
      const getScrollWidth = () => (container.scrollWidth - document.body.clientWidth + 100);
  
      // 기존 트리거, 트윈 제거 (중복 방지)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
      const projectTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          // markers: true,
        },
        defaults: { ease: "none", duration: 1 },
      });
  
      projectTimeline.to(project, { x: ()=> - getScrollWidth() });
  
      project.forEach((pj) => {
        gsap.fromTo(
          pj,
          { opacity: 0.5, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: pj,
              containerAnimation: projectTimeline,
              start: "left 80%",
              end: "right 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
  
      ScrollTrigger.refresh();
    }
  
    initAnimation();
    window.addEventListener("resize", initAnimation);
  
    return () => {
      window.removeEventListener("resize", initAnimation);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main>
      <section className={`${styles.section1} section1`} ref={section1Ref}>
        <div className={styles.section1Inner}>
          <div className={styles.lastProject} ref={lastProjectRef}>
            <ProjectItem project={projectData[projectData.length-1]} lastProject={true}/>
          </div>
          <p className={styles.pageTitle}>
            <span>Portfolio</span><br/>
            <span>Kim min kyung</span>
          </p>
        </div>
      </section>
      <section className={styles.section2} ref={section2Ref}>
        <div className={styles.inner}>
          <div className={styles.projectList}>
            {projectDataReverse.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section3} ref={section3Ref}>
        <div className={styles.inner}>
          <div className={styles.section3Content}>
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
      <section className={styles.section4} ref={section4Ref}>
        <div className={styles.inner}>
          <div className={styles.section4Content}>
            <h3>Stack & Tool</h3>
            <p>
              HTML5 • CSS • JavaScript • JQuery •<br className="br_mobile"/>TypeScript • React • Next • Vue<br />
              Figma • Adobe XD •<br className="br_mobile"/> Adobe illustrator • Adobe Photoshop
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}