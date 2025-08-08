// cSpell: disable

import { useParams } from "react-router-dom";
import projectData from "../../data/projectData";
import styles from "./Project.module.scss";
import StickyVisualSection from "../../components/StickyVisualSection/StickyVisualSection";
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
    const projectContainer = container.querySelector(`.${projectGalleryStyles.projectGalleryContainer}`);
    const getScrollWidth = () => (container!.scrollWidth - document.body.clientWidth + 100);

    ScrollTrigger.matchMedia({
      "(min-width: 769px)":() => {
        const projectTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            // markers: true,
            end: () => `+=${getScrollWidth()}`, 
            invalidateOnRefresh: true,
          }, defaults: { ease: "none", duration: 2 }
        });
        projectTimeline.to(projectContainer, { x: ()=> - getScrollWidth() })
      },
      "(max-width: 768px)": () => {
        gsap.set(projectContainer, { clearProps: "all" });
      }}
    );
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(()=>{
    function scrollBgChange(){
      if(!section2MobileVideo.current) return;
      const windowHeight = document.documentElement.clientHeight;
      const mobileVideoClient = section2MobileVideo.current.getBoundingClientRect();
      
      if(mobileVideoClient.bottom < windowHeight){        
        section2MobileVideo.current.classList.add(`${styles.on}`)
      }
      else{
        section2MobileVideo.current.classList.remove(`${styles.on}`)
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
      <StickyVisualSection projectData={project}/>
      <section className={`section1`}></section>
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
            <video className={styles.videoMobile} src={project.videoMobile} autoPlay loop muted playsInline />
          </div>
        </div>
      </section>
    </main>
  );
}