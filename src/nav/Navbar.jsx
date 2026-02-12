import { useEffect, useState } from "react";
import { data, nav_style, navlist, upcoming_launches } from "../assets/data";
import Logo from "./Logo";
import Navlist from "./Navlist";
import "./nav.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (currentScrollY / pageHeight) * 100;

      // hide only after 5% scoll
      if (scrollPercent > 5) {
        if (currentScrollY > lastScrollY) {
          // scrolling down
          setShowNav(false);
        } else {
          // scrolling up
          setShowNav(true);
        }
      } else {
        // Always show if near top
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`nav ${showNav ? "nav-show" : "nav-hide"}`}>
      <Logo />
      <Navlist list={navlist} className={"navlist"} />
      <Navlist list={upcoming_launches} className={"right-sub-nav"} />
    </div>
  );
};

export default Navbar;
