import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './styles/main.scss' // 전역 style
import { useEffect, useRef } from "react";
import Layout from "./routes/Layout";

function App() {
  const headerLogoRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  return (
    <>
      <Header ref={headerLogoRef} />
      <Layout>
        <Outlet context={{ headerLogoRef }}/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App