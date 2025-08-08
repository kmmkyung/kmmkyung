import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function handleScroll() {
      const section1 = document.querySelector(".section1") as HTMLElement;
      const main = document.querySelector("main");
      const footer = document.querySelector("footer");

      if (!section1 || !main || !footer) return;

      const mainHeight = main.offsetHeight;
      const scrollTop = window.scrollY;

      if (scrollTop < mainHeight / 2) {
        section1.style.zIndex = "1";
        footer.style.zIndex = "-1";
      } else {
        section1.style.zIndex = "-1";
        footer.style.zIndex = "1";
      }
    }

    handleScroll(); // 초기 상태 반영
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{children}</>;
}
