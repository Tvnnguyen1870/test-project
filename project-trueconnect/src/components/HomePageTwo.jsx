import { Col, Row } from "antd";
import "../assets/css/pagetwo.css";

const HomePageTwo = () => {
  return (
    <div className="container-pagetwo">
      <Row>
        <Col span={2} />
        <Col span={12}>
          {/* heading */}
          <Row>
            <h2 className="heading-ecosystem">Hệ sinh thái TrueConnect</h2>
          </Row>

          {/* hệ sinh thái trueconnect */}
          <Row>
            <ul className="list-ecosystem">
              <li>Danh thiếp điện tử </li>
              <li>Website mini </li>
              <li>Web doanh nghiệp</li>
              <li>Dịch vụ tư vấn Chuyển đổi số</li>
              <li>Phòng CNTT thuê ngoài </li>
              <li>Ứng dụng cho doanh nghiệp SME</li>
            </ul>
          </Row>
        </Col>

        {/* img */}
        <Col className="img-ecosystem" span={8}>
          <img src="./src/assets/PhotoRoom_20230807_104800 1 (1).png" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default HomePageTwo;
