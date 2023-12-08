import { Outlet } from "react-router-dom";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Value from "./Value";
import Vision from "./Vision";

const ContainerAboutUs = () => {
  return (
    <div>
      <AboutUs />
      <Vision />
      <Value />
      <Team />
      <Outlet />
    </div>
  );
};

export default ContainerAboutUs;
