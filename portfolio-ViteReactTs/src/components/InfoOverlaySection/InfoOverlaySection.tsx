import { Link } from "react-router-dom";
import type { IProjectData } from "../../type";
import styles from "./InfoOverlaySection.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function InfoOverlaySection({ projectData }: { projectData: IProjectData }) {
  gsap.registerPlugin(useGSAP);

  const stack = projectData.stack.join(" / ");
  const media = projectData.mediaQuery.join(" / ");

  const scopeRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!maskRef.current) return;

    const ctx = gsap.context(() => {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => { document.body.style.overflow = "auto"; }
      });

      // 1) 마스크
      tl.fromTo(
        maskRef.current,
        { width: "0%" },
        { width: "100%", duration: 1 }
      );

      // 2) 텍스트들 (h2, p를 .fade로 묶어서 한 번에)
      const fades = gsap.utils.toArray<HTMLElement>(`.${styles.fade}`);
      tl.to(fades, { autoAlpha: 1, duration: 1, stagger: 0.15, immediateRender: false }, "-=0.5");

      // 3) 라인
      tl.to(`.${styles.line}`, { width: "100%", duration: 0.5 }, "-=0.5");
    }, scopeRef);

    return () => {
      ctx.revert();               // 인라인 스타일 복원
      document.body.style.overflow = "auto";
    };
  }, { scope: scopeRef, dependencies: [], revertOnUpdate: true });

  return (
    <div ref={scopeRef} className={styles.infoOverlay}>
      <div ref={maskRef} className={styles.mask} />
      <div className={styles.inner}>
        <div className={styles.titleContainer}>
          <h2 className={`${styles.title} ${styles.fade}`}>{projectData.title}</h2>
        </div>
        <div className={styles.meta}>
          <div className={styles.line} />
          <div className={styles.metaText}>
            <div>
              <p className={styles.fade}>Stack: {stack}</p>
              <p className={styles.fade}>Media Query: {media}</p>
            </div>
            <Link className={styles.link} to={projectData.site} target="_blank">Vite Site ↗</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
