import { Col, Row } from "antd";
import "../assets/css/homepage.css";
import Search from "antd/es/input/Search";

const HomePage = () => {
  return (
    <div className="homepage">
      <Row>
        <Col span={12}>
          <h1 className="heading-homepage">TrueConnect</h1>
          <div className="paragraph">
            <p>
              Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng
              dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng TrueConnect
              và có cơ hội tiếp cận tập khách hàng rộng mở của hệ thống.
            </p>
          </div>
          <div className="input-search">
            <Search style={{ width: "50%" }} />
          </div>
        </Col>
        <Col span={10}>
          <img
            src="./src/assets/picture1.jpg"
            alt=""
            style={{
              width: 564,
              height: 564,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
