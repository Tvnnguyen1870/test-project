import { Outlet } from "react-router-dom";
import Answer from "./Answer";
import ContactDetailProduct from "./ContactDetailProduct";
import DetailWebMini from "./DetailWebMini";
import DifferencePoint from "./DifferencePoint";
import Feature from "./Feature";
import Introduce from "./Introduce";
import ServicePriceList from "./ServicePriceList";
import Image from "./Image";
import Evaluate from "./Evaluate";

const ContainerDetailProduct = () => {
  return (
    <div>
      <Image />
      <Introduce />
      <Feature />
      <DetailWebMini />
      <DifferencePoint />
      <Answer />
      <ServicePriceList />
      <Evaluate />
      <ContactDetailProduct />
      <Outlet />
    </div>
  );
};

export default ContainerDetailProduct;
