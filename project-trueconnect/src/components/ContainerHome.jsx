import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import HomePage from "./HomePage";
import HomePageOne from "./HomePageOne";
import HomePageTwo from "./HomePageTwo";
import News from "./News";
import Partner from "./Partner";

const ContainerHome = () => {
  return (
    <div>
      <HomePage />
      <HomePageOne />
      <HomePageTwo />
      <News />
      <Partner />
      <Contact />
      <Outlet />
    </div>
  );
};

export default ContainerHome;
