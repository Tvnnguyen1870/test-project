import { Col, Input, Row } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="footer-page">
      <Row>
        <Col span={6}>
          <img
            className="img-footer-trueconnect"
            src="./src/assets/trueconnect.jpg"
            alt=""
          />
        </Col>
      </Row>
      <Row
        style={{
          marginTop: 12,
          marginBottom: 12,
        }}
      >
        <Col span={10}>
          <h4>CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUECONNECT </h4>
        </Col>
        <Col span={6}>
          <h4>Tài liệu</h4>
        </Col>
        <Col span={8}>
          <h4>TrueConnect </h4>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <ul className="ul-footer">
            <li>
              <MailOutlined
                style={{
                  marginRight: 8,
                }}
              />
              dvkh.trueconnect@gmail.com
            </li>
            <li>
              Địa chỉ: 80, 69b/22/40 Hoang Van Thai, Khuong Trung, Thanh Xuan,
              Ha Noi
            </li>
            <li>Hotline/Zalo: 0888 136 622</li>
            <li>Số giấy chứng nhận đăng ký kinh doanh:</li>
            <li>Ngày cấp: . Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội</li>
          </ul>
        </Col>
        <Col span={6}>
          <p>Tài liệu hướng dẫn </p>
        </Col>
        <Col span={8}>
          <ul className="ul-footer">
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán và bán hàng </li>
            <li>Điều khoản và điều kiện sử dụng</li>
          </ul>
        </Col>
      </Row>
      <Row
        style={{
          paddingBottom: 40,
        }}
      >
        <Col span={10}>
          <p
            style={{
              paddingTop: 20,
            }}
          >
            © 2023 All Right Reserved True Connect
          </p>
        </Col>

        {/* img tiktok, youtube va facebook  */}
        <Col
          span={14}
          style={{
            paddingRight: 220,
          }}
        >
          <Link to="https://www.tiktok.com/">
            <img
              className="img-footer-icon"
              src="./src/assets/tiktok.jpg"
              alt=""
            />
          </Link>
          <Link to="https://www.facebook.com/">
            <img
              className="img-footer-icon"
              src="./src/assets/facebook.jpg"
              alt=""
            />
          </Link>
          <Link to="https://www.youtube.com/">
            <img
              className="img-footer-icon"
              src="./src/assets/youtube.jpg"
              alt=""
            />
          </Link>
          {/* input */}
          <Input className="input-footer-icon" defaultValue="Email" />{" "}
        </Col>
      </Row>
    </div>
  );
};

export default FooterPage;
