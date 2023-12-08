import { createBrowserRouter } from "react-router-dom";
import LayOut from "./layout/LayOut";
import Product from "./components/Product";
import ContainerOne from "./components/ContainerOne";
import ContainerAboutUs from "./components/aboutUs/ContainerAboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <ContainerOne />,
      },
      {
        path: "/aboutus",
        element: <ContainerAboutUs />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

export default router;
