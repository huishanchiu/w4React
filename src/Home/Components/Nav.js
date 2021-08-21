import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div className="main-header">
      <h1>
        Life bakerys
        <FontAwesomeIcon icon={fas.faBreadSlice} />
      </h1>
      <div className="menu">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <a href="#" className="nav-bar">
        <FontAwesomeIcon icon={fas.faBars} />
      </a>
    </div>
  );
};

export default Nav;
