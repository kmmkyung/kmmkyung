import { forwardRef } from "react";
import styles from "./Header.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import svgLogo from "../../data/svgLogo";
import homeStyles from "../../routes/Home/Home.module.scss";
import projectData from "../../data/projectData";

const Header = forwardRef<HTMLDivElement>(function Header(_, ref: React.ForwardedRef<HTMLDivElement>)  {
  const homeMenu = ['PROJECT', 'ABOUT', 'CONTACT'];
  const projectMenu = ['TOP', '🔗VISIT_SITE', 'CONTACT'];
  const location = useLocation(); 
  const navigate = useNavigate();
  const { projectId } = useParams();
  const menuItemRef = useRef<HTMLLIElement[]>([]);

  function windowTop(){
    if(location.pathname == '/'){
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else {
      navigate('/')
    }
  }
  
  function homeMenuClick(index: number) {
    const section2 = document.querySelector(`.${homeStyles.section2}`) as HTMLElement; 
    const section3 = document.querySelector(`.${homeStyles.section3}`) as HTMLElement;    
    if (index === 0) {
      window.scrollTo({ top: section2.offsetHeight, behavior: "smooth" });
    } else if (index === 1) {
      window.scrollTo({ top: section3.offsetTop, behavior: "smooth" });
    } else if (index === 2) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }

  function projectMenuClick(index: number) {
    if (!projectId) return;
    if( index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else if (index === 1) {
      window.open(projectData[Number(projectId)-1].site, '_blank');
    }
    else if (index === 2) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
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
    
      valueWords.forEach((ele, idx)=>{        
        const span = document.createElement("span");
        span.className = styles.menuWord;
        span.classList.add('menuWord');

        if( location.pathname !== "/" && index === 1 ){
          span.classList.add(styles.gradientText);
          if (idx === 0) {
            span.classList.add(styles.iconLink);
          }
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
              <li className={styles.navItem} key={index} ref={(item)=>setMenuItem(item,index)} onClick={()=>homeMenuClick(index)}>{item}</li>
            ))}
          </ol>
          :
          <ol className={styles.navList}>
            {projectMenu.map((item, index) => (
              <li className={styles.navItem} key={index} ref={(item)=>setMenuItem(item,index)} onClick={()=> projectMenuClick(index)}>{item}</li>
            ))}
          </ol>
        }
        </nav>
      </div>
    </header>
  );
})

export default Header;