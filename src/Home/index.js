import { useState } from "react";

import Nav from "./Components/Nav";
import Content from "./Components/Content";
import SideMenu from "./Components/SideMenu";
import "./index.css";
import "./indexFlex.css";

const Home = () => {
  const [data, setData] = useState([1, 2, 3]);
  return (
    <div>
      <Nav />
      <Content />
      <SideMenu itemData={data} />
    </div>
  );
};

export default Home;
