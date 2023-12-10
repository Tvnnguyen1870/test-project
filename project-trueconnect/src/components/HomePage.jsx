import { Col, Row } from "antd";
import "../assets/css/homepage.css";
import Search from "antd/es/input/Search";

const HomePage = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div id="#" className="homepage">
      <Row>
        <Col span={2} />
        <Col span={10}>
          <Row>
            <Col span={24}>
              <h1 className="heading-homepage">TrueConnect</h1>
              <p className="paragraph">
                Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng
                dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng
                TrueConnect và có cơ hội tiếp cận tập khách hàng rộng mở của hệ
                thống.
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="input-search">
                <Search onSearch={onSearch} enterButton />
              </div>
            </Col>
          </Row>
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
