import { createBrowserRouter } from "react-router-dom";
import LayOut from "./layout/LayOut";
import Product from "./components/Product";
import ContainerAboutUs from "./components/aboutUs/ContainerAboutUs";
import ContainerDetailProduct from "./components/detailproduct/ContainerDetailProduct";
import ContainerHome from "./components/ContainerHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <ContainerHome />,
      },
      {
        path: "/aboutus",
        element: <ContainerAboutUs />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/detailproduct",
        element: <ContainerDetailProduct />,
      },
    ],
  },
]);

export default router;
