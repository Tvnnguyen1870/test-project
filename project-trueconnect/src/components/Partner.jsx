import { Col, Row } from "antd";
import "../assets/css/partner.css";

const Partner = () => {
  return (
    <div className="container-partner">
      <Row>
        <Col span={24}>
          <h2>Đối tác của chúng tôi?</h2>
        </Col>
      </Row>
      <Row>
        <Col span={3} />
        <Col span={5}>
          <img
            src="./src/assets/partner1.jpg"
            alt=""
            style={{
              width: 206,
              height: 120,
            }}
          />
        </Col>
        <Col span={5}>
          <img
            src="./src/assets/partner2.jpg"
            alt=""
            style={{
              width: 254,
              height: 72,
            }}
          />
        </Col>
        <Col span={5}>
          <img
            src="./src/assets/partner3.jpg"
            alt=""
            style={{
              width: 218,
              height: 76,
            }}
          />
        </Col>
        <Col span={5}>
          <img
            src="./src/assets/partner4.jpg"
            alt=""
            style={{
              width: 190,
              height: 140,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={3} />
        <Col span={5}>
          <img
            src="./src/assets/partner.jpg"
            alt=""
            style={{
              width: 180,
              height: 180,
            }}
          />
        </Col>
        <Col span={5}>
          <img
            src="./src/assets/partner5.jpg"
            alt=""
            style={{
              width: 170,
              height: 162,
            }}
          />
        </Col>
        <Col span={5}>
          <img
            src="./src/assets/partner6.jpg"
            alt=""
            style={{
              width: 160,
              height: 160,
            }}
          />
        </Col>
        <Col span={5}>
          <img
            src="./src/assets/partner7.jpg"
            alt=""
            style={{
              width: 220,
              height: 220,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Partner;
