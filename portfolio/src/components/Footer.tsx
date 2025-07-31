import { Link } from "react-router-dom";
import styled from "styled-components";
import { innerStyle } from "styles/mixins";

const FooterElement = styled.footer`
  width: 100%;
  height: 100vh;
  background-color: var(--black);
  position: sticky;
  bottom: 0;
  z-index: -1;
`;

const Inner = styled.div`
  ${innerStyle}
  padding:min(3.5vw, 50px);
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const FooterContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 50px;
  color: var(--white);

  h2 {
  font-size: clamp(40px, 15vw, 100rem);
  font-weight: bold;
  }

  h3 {
  width: 100%;
  font-size: var(--font-size-m);
  }

  a{
  font-size: var(--font-size-m);
  &:hover{
    text-decoration: underline;
  }
  }

  p{
  font-size: var(--font-size-s);
  }
`;

export default function Footer() {
  return (
    <FooterElement>
      <Inner>
        <FooterContainer>
          <FooterContent>
            <h2>Contact</h2>
            <h3>
              <span>01aldrn10@gmail.com</span><br/>01aldrn_10@naver.com</h3>
              <Link to="https://github.com/kmmkyung" target="_blank" rel="noopener noreferrer">github</Link>
          </FooterContent>
          <p>{new Date().getFullYear()} &copy; Kim Min Kyung</p>
        </FooterContainer>
      </Inner>
    </FooterElement>
  );
}