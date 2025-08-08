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
  const overlayRef = useRef(null);
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
      overlayRef.current,
      { width: "0%" },
      { width: "100%", duration: 0.8 }
    );
    tl.from(
      textTitleRef.current,
      { opacity: 0, y: 20, duration: 1 },
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5");
      tl.from(textLine.current,
        { width: "0%", duration: 0.5 },
      "-=0.5");
    return () => {
      document.body.style.overflow = "auto";
    };
  },[])

  return (
    <div className={styles.infoOverlay} ref={overlayRef}>
      <div className={styles.inner}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title} ref={textTitleRef}>{projectData.title}</h2>
        </div>
        <div className={styles.meta} ref={textRef}>
          <div className={styles.line} ref={textLine}/>
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
  );
}