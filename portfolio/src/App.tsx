import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './styles/main.scss' // 전역 style
import { useRef } from "react";
import Layout from "./routes/Layout";

function App() {
  const headerLogoRef = useRef<HTMLDivElement>(null);

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