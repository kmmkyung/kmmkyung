import { Link } from "react-router-dom";
import type { IProjectData } from "../../type";
import styles from "./InfoOverlaySection.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function InfoOverlaySection({ projectData }: { projectData: IProjectData }) {
  gsap.registerPlugin(useGSAP);

  const stack = projectData.stack.join(' / ')
  const media = projectData.mediaQuery.join(' / ')
  const maskRef = useRef(null);
  const textTitleRef = useRef(null);
  const textLine = useRef(null);
  const textRef = useRef(null);

  useGSAP(()=>{
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({
      onComplete: () => { // 애니 끝나면 스크롤 다시 활성화
        document.body.style.overflow = "auto";
      }
    });

    tl.fromTo(
      maskRef.current,
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.inOut" }
    );
    tl.fromTo(
      textTitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.5");
    tl.fromTo(textLine.current,
      { width: "0%" },
      { width: "100%", duration: 0.5 }, "-=0.5");
    return () => {
      document.body.style.overflow = "auto";
    };
  },[])

  return (
    <div className={styles.infoOverlay}>
      <div ref={maskRef} className={styles.mask} />
      <div className={styles.inner}>
        <div className={styles.titleContainer}>
          <h2 ref={textTitleRef} className={styles.title}>{projectData.title}</h2>
        </div>
        <div ref={textRef} className={styles.meta}>
          <div ref={textLine} className={styles.line} />
          <div className={styles.metaText}>
            <div>
              <p>Stack: {stack}</p>
              <p>Media Query: {media}</p>
            </div>
            <Link className={styles.link} to={projectData.site} target="_blank">Vite Site ↗</Link>
          </div>
        </div>
      </div>
    </div>
  )
}