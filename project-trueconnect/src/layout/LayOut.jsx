import { Layout, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "../assets/css/header.css";
import FooterPage from "../components/FooterPage";
import { Outlet, useNavigate } from "react-router-dom";

const LayOut = () => {
  const navigate = useNavigate();

  // chuyển trang
  const toHome = () => {
    navigate("/");
  };
  const toProduct = () => {
    navigate("/product");
  };
  const toAboutUs = () => {
    navigate("/aboutus");
  };

  const headerStyle = {
    color: "#fff",
    height: 96,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#fff",
  };

  const contentStyle = {
    textAlign: "center",
    minHeight: 740,
    lineHeight: "200px",
    color: "#fff",
  };

  const footerStyle = {
    maxHeight: 500,
    width: "100%",
  };

  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header className="header-homepage" style={headerStyle}>
            <ul
              className="header-ul"
              style={{
                paddingTop: 20,
                color: "black",
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 750,
                fontSize: 20,
                paddingBottom: 12,
              }}
            >
              <li>
                <img src="/src/assets/trueconnect.jpg" alt="" />
              </li>
              <li onClick={() => toHome()}>Trang chủ</li>
              <li onClick={() => toAboutUs()}>Về chúng tôi</li>
              <li onClick={() => toProduct()}>Sản Phẩm và dịch vụ</li>
              <li>Tin tức</li>
              <li>Trải nghiệm</li>
              <li>Liên hệ</li>
            </ul>
          </Header>
          <Content className="content-homepage" style={contentStyle}>
            <Outlet />
          </Content>
          <Footer className="footer-homepage" style={footerStyle}>
            <FooterPage />
          </Footer>
        </Layout>
      </Space>
    </div>
  );
};

export default LayOut;
