import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div>
      <Nav/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
