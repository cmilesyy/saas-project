import Banner from "./Banner";
import logo from "../assets/images/logo.svg";
import close from "../assets/images/close.svg";
import hamburger from "../assets/images/hamburger.svg";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navReset = () => {
    setNav(false);
  };

  return (
    <>
      <header>
        <Banner />
        <nav className="hidden md:flex">
          <div className="flex items-center justify-between px-5">
            <img src={logo} alt="logo - Launch" />
            <ul className=" md:flex gap-2 text-sm">
              <li>
                {" "}
                <a href="">What is Launch?</a>{" "}
              </li>
              <li>
                {" "}
                <a href="">Pricing</a>{" "}
              </li>
              <li>
                {" "}
                <a href="">FAQ</a>
              </li>
            </ul>
            <button>Buy Now</button>
          </div>
        </nav>

        {/* Mobile Nav */}

        <div
          onClick={handleNav}
          className="px-6 p-4 bg-dark-blue flex items-center justify-between md:hidden"
        >
          <img src={logo} alt="logo - Launch" />
          {nav ? (
            <img src={close} alt="mobile menu close" className="h-8 w-8" />
          ) : (
            <img src={hamburger} alt="mobile menu" className="h-8 w-8" />
          )}
        </div>

        <nav>
          <div
            className={
              nav
                ? "bg-black absolute w-full text-center border-t text-light text-white"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <ul>
              <li>
                {" "}
                <a href="" onClick={navReset}>
                  What is Launch?
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="" onClick={navReset}>
                  Pricing
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="" onClick={navReset}>
                  FAQ
                </a>
              </li>
            </ul>
            <button>Buy Now</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
