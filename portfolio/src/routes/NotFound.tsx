import styled from "styled-components"

const SectionEl = styled.section`
  width: 100%;
  height: 100vh;
`;

const SectionInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: var(--font-size-s);
    line-height: 1.8;
  }
`;

export default function NotFound(){
  return (
    <SectionEl>
      <SectionInner>
        <p>Page Not Found</p>
        <p>잘못된 접근입니다!</p>
      </SectionInner>
    </SectionEl>
  )
}