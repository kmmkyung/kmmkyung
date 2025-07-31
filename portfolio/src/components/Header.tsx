import svgLogo from "data/svgLogo";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { innerStyle } from "styles/mixins";

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeaderElement = styled.header`
  width: 100%;
  height: 80px;
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
`

const HeaderInner = styled.div`
  ${innerStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  width: min(10vw, 100px);
  cursor: pointer;
  svg {
    width: 100%;
    aspect-ratio: 1 / 1;
    transition: all 0.5s;
  }
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const NavItem = styled.li`
  color: var(--white);
  font-size: var(--font-size-m);
  cursor: pointer;

  .menu-word{
  display: inline-block;
  transition: color 0.5s;
  }

  .gradient-text {
  background: linear-gradient(to right, #ff943e ,#ffd300, #00d1f3);
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${gradientMove} 3s ease infinite;
  }
`;


export default function Header() {
  const homeMenu = ['PROJECT', 'ABOUT', 'CONTACT'];
  const projectMenu = ['HOME', '🔗VISIT_SITE', 'CONTACT'];
  const location = useLocation(); 
  const headerLogoRef = useRef<HTMLDivElement>(null);
  const menuItemRef = useRef<HTMLLIElement[]>([]);

  // menuItem을 menuItemRef에 넣기 (ref에 함수를 넣으면 마운트될때 자동호출된다.)
  const setMenuItem = (item:HTMLLIElement | null, index:number )=>{
    if (item) {
      menuItemRef.current[index] = item;
    }
  }

  useEffect(()=>{
    // logo svg
    if (headerLogoRef.current) {
      headerLogoRef.current.innerHTML = svgLogo.pageLogo_w;
    }

    // menu word split and save
    menuItemRef.current.forEach((menuItem, index) => {
      const menuValue = menuItem.textContent || "";
      const valueWords = [...menuValue];
      
      menuItem.innerHTML = ""; // 초기화
      valueWords.forEach((ele)=>{
        console.log(ele, index);
        
        const span = document.createElement("span");
        span.className = "menu-word";
        if( location.pathname !== "/" && index === 1 ){
          span.classList.add("gradient-text");
        }
        span.textContent = ele;
        menuItem.appendChild(span);
      })
    })

    const timeline = gsap.timeline({
      defaults: { ease: "power4.inOut" }, // 모든 요소 적용
      repeat: -1, yoyo: true }  // 무한 반복 , 앞뒤반복
    )
    timeline.from('.menu-word', { // 초기값 설정
      y: 10, opacity: 0, skewX: 30, stagger: 0.03, duration: 1,
    })
    .to('.menu-word',{ // 끝값 설정
      y: -10, skewX: 0, stagger:0.03, duration: 1,
    })
  },[location.pathname])

  return (
    <HeaderElement>
      <HeaderInner>
        <HeaderLogo ref={headerLogoRef}/>
        <Nav>
        { location.pathname === "/" ?
          <NavList>
            {homeMenu.map((item, index) => (
              <NavItem key={index} ref={(item)=>setMenuItem(item,index)}>{item}</NavItem>
            ))}
          </NavList>
          :
          <NavList>
            {projectMenu.map((item, index) => (
              <NavItem key={index} ref={(item)=>setMenuItem(item,index)}>{item}</NavItem>
            ))}
          </NavList>
        }
        </Nav>
      </HeaderInner>
    </HeaderElement>
  );
}