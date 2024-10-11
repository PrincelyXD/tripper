import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <div className="fixed top-0 z-[999] flex h-[90px] w-full items-center justify-center bg-[#ffffff7a] shadow-nav-bottom font-roboto backdrop-blur">
      <div className="flex w-[85%] items-center justify-between">
        <img className="h-[60px]" src={logo} alt="" />

        <div className="flex items-center justify-center font-ibm">
          <NavLink
            className="mr-10 text-[16px] font-semibold text-[#000117]"
            to="./"
          >
            Home
          </NavLink>
          <NavLink
            className="mr-10 text-[16px] font-semibold text-[#000117]"
            to="/vehicle-registration"
          >
            Vehicle Registration
          </NavLink>
          <NavLink
            className="mr-10 text-[16px] font-semibold text-[#000117]"
            to="/drivers-license"
          >
            Driver's License
          </NavLink>
        </div>

        <NavLink
          className="flex h-fit items-center justify-center rounded-full bg-[#3379F9] px-[20px] py-[12px] text-[16px] text-white backdrop-blur"
          to="/vehicle-registration"
        >
          Get Started
          <svg
            className="ml-[10px] h-[17px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#fff"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
