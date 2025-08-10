// cSpell: disable

import { useParams } from "react-router-dom";
import projectData from "../../data/projectData";
import styles from "./Project.module.scss";
import InfoOverlaySection from "../../components/InfoOverlaySection/InfoOverlaySection";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import projectGalleryStyles from "../../components/ProjectGallery/ProjectGallery.module.scss";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";

export default function Project(){
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const section2Content = useRef<HTMLDivElement>(null);
  const section2MobileVideo = useRef<HTMLDivElement>(null);
  const { projectId } = useParams()
  const project = projectData.find(item => item.id === Number(projectId));

  //section2 - horizontal scroll GSAP animation
  useGSAP(() => {
    if (!section2Content.current) return;
  
    const container = section2Content.current;
    const projectContainer = container.querySelector(`.${projectGalleryStyles.projectGalleryContainer}`) as HTMLElement | null;
    const projectContent = container.querySelector(`.${projectGalleryStyles.projectGalleryContent}`) as HTMLElement | null;
    const videoPcContainer = container.querySelector(`.${projectGalleryStyles.videoPcContainer}`) as HTMLElement | null;
    const videoPc = container.querySelector(`.${projectGalleryStyles.videoPc}`) as HTMLVideoElement | null;
    const videoMobile = section2MobileVideo.current?.querySelector("video") as HTMLVideoElement | null;
  
    const getScrollWidth = () => {
      const base = container.scrollWidth - document.body.clientWidth;
      if (!projectContent) return base;
      return base + ((document.body.clientWidth / 2) - (projectContent.clientWidth / 2));
    };

    const mm = gsap.matchMedia();
  
    // 데스크톱
    mm.add("(min-width: 769px)", () => {
      if (!projectContainer) return;

      // 가로 스크롤
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          // markers: true,
          end: () => `+=${getScrollWidth()}`,
          invalidateOnRefresh: true,
        }
      });
      timeline.to(projectContainer, { x: () => -getScrollWidth() });

      // pc 비디오 재생 기준
      if (videoPc && videoPcContainer) {
        ScrollTrigger.create({
          trigger: videoPcContainer,
          start: "left 40%",
          end: () => "+=" + (videoPcContainer.offsetWidth / 2),
          horizontal: true,      
          containerAnimation: timeline,
          // markers: true,
          onEnter: () => videoPc.play(),
          onLeaveBack: () => videoPc.pause()
        });
        ScrollTrigger.create({
          trigger: container,
          start: "bottom center",
          end: "bottom center", 
          // markers: true,
          onLeave: () => videoPc.pause(),
          onEnterBack: () => videoPc.play(),
        });
      }
  
      // mobile 비디오 재생 기준
      if (section2MobileVideo.current && videoMobile) {
        ScrollTrigger.create({
          trigger: section2MobileVideo.current,
          start: "top 10%",
          end: "bottom 80%",
          // markers: true,
          onEnter: () => videoMobile.play(),
          onEnterBack: () => videoMobile.play(),
          onLeave: () => videoMobile.pause(),
          onLeaveBack: () => videoMobile.pause(),
        });
      }
    });
  
    // 태블릿/모바일
    mm.add("(max-width: 768px)", () => {
      if (projectContainer) {
        gsap.set(projectContainer, { clearProps: "all" });
      }
      // pc 비디오 재생 기준
      if (videoPc && videoPcContainer) {
        ScrollTrigger.create({
          trigger: videoPcContainer,
          start: "top 60%",
          end: "bottom 40%",
          // markers: true,
          onEnter: () => videoPc.play(),
          onEnterBack: () => videoPc.play(),
          onLeave: () => videoPc.pause(),
          onLeaveBack: () => videoPc.pause(),
        });
      }
      // mobile 비디오 재생 기준
      if (section2MobileVideo.current && videoMobile) {
        ScrollTrigger.create({
          trigger: section2MobileVideo.current,
          start: "top 60%",
          end: "bottom 40%",
          // markers: true,
          onEnter: () => videoMobile.play(),
          onEnterBack: () => videoMobile.play(),
          onLeave: () => videoMobile.pause(),
          onLeaveBack: () => videoMobile.pause(),
        });
      }
    });
    return () => mm.kill();
  }, []);

  useEffect(()=>{
    function scrollBgChange(){
      if(!section2MobileVideo.current) return;
      const windowHeight = document.documentElement.clientHeight;
      const mobileVideoClient = section2MobileVideo.current.getBoundingClientRect();
      const bgColor = project?.videoMobileBgColor || "#000";     
      document.documentElement.style.setProperty("--bg-gradient", bgColor);
      
      if(mobileVideoClient.bottom < windowHeight){        
        section2MobileVideo.current.classList.add(`${styles.on}`)
      }
      else{
        section2MobileVideo.current.classList.remove(`${styles.on}`);
      }
    }
    window.addEventListener("scroll", scrollBgChange);
    return ()=>{
      window.removeEventListener("scroll", scrollBgChange);
    }
  },[])

  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return (
    <main>
      <InfoOverlaySection projectData={project}/>
      <section className={`${styles.section1} section1`}>
        <img src={project.stickyVisual} alt={project.title} fetchPriority="high" className={styles.cover} />
      </section>
      <section className={styles.section2}>
        <div className={styles.projectText}>
          <div className={styles.inner}>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </div>
        <div className={styles.projectGallery} ref={section2Content}>
          <div className={styles.inner}>
            <ProjectGallery projectData={project}/>
          </div>
        </div>
        <div className={styles.projectGalleryVertical} ref={section2MobileVideo}>
          <div className={styles.inner}>
            <video className={styles.videoMobile} src={project.videoMobile} loop muted playsInline />
          </div>
        </div>
      </section>
    </main>
  );
}