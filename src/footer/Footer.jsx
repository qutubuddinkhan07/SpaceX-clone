import { RiTwitterXLine } from "react-icons/ri";
import Navlist from "../nav/Navlist";
import { footer_links } from "../assets/data";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <RiTwitterXLine color="white" />
      </div>
      <Navlist list={footer_links} className={"footer-links"} />
      <p>&copy; 2026 SPACEX</p>
    </div>
  );
};

export default Footer;
