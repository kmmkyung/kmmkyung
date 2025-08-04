import { forwardRef } from "react";
import styles from "./Header.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import svgLogo from "../../data/svgLogo";

const Header = forwardRef<HTMLDivElement, {}>(function Header(_, ref: React.ForwardedRef<HTMLDivElement>)  {
  const homeMenu = ['PROJECT', 'ABOUT', 'CONTACT'];
  const projectMenu = ['HOME', '🔗VISIT_SITE', 'CONTACT'];
  const location = useLocation(); 
  const menuItemRef = useRef<HTMLLIElement[]>([]);

  function windowTop(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // menuItem을 menuItemRef에 넣기 (ref에 함수를 넣으면 마운트될때 자동호출된다.)
  const setMenuItem = (item:HTMLLIElement | null, index:number )=>{
    if (item) {
      menuItemRef.current[index] = item;
    }
  }

  useEffect(()=>{
    // logo svg
    if (ref && typeof ref !== "function" && ref.current) {
      ref.current.innerHTML = svgLogo.pageLogo_w;
    }

    // menu word split and save
    menuItemRef.current.forEach((menuItem, index) => {
      const menuValue = menuItem.textContent || "";
      const valueWords = [...menuValue];
      
      menuItem.innerHTML = ""; // 초기화
      valueWords.forEach((ele)=>{
        const span = document.createElement("span");
        span.className = styles.menuWord;
        span.classList.add('menuWord');
        if( location.pathname !== "/" && index === 1 ){
          span.classList.add(styles.gradientText);
        }
        span.textContent = ele;
        menuItem.appendChild(span);
      })
    })

    const timeline = gsap.timeline({
      defaults: { ease: "power4.inOut" }, // 모든 요소 적용
      repeat: -1, yoyo: true }  // 무한 반복 , 앞뒤반복
    )
    timeline.from('.menuWord', { // 초기값 설정
      y: 10, opacity: 0, skewX: 30, stagger: 0.03, duration: 1,
    })
    .to('.menuWord',{ // 끝값 설정
      y: -10, skewX: 0, stagger:0.03, duration: 1,
    })
  },[location.pathname])

  return (
    <header>
      <div className={styles.headerInner}>
        <div className={styles.headerLogo} ref={ref} onClick={windowTop}/>
        <nav>
        { location.pathname === "/" ?
          <ol className={styles.navList}>
            {homeMenu.map((item, index) => (
              <li className={styles.navItem} key={index} ref={(item)=>setMenuItem(item,index)}>{item}</li>
            ))}
          </ol>
          :
          <ol className={styles.navList}>
            {projectMenu.map((item, index) => (
              <li className={styles.navItem} key={index} ref={(item)=>setMenuItem(item,index)}>{item}</li>
            ))}
          </ol>
        }
        </nav>
      </div>
    </header>
  );
})

export default Header;