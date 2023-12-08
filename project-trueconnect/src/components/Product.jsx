import { Col, Row } from "antd";
import "../assets/css/product.css";

const Product = () => {
  return (
    <div className="container-product">
      <div className="product-content">
        <Row>
          <Col span={8}>
            <Row className="content">
              <img src="./src/assets/product1.jpg" alt="" />
              <span>Website Mini</span>
              <p>Tạo website đơn giản tích hợp gian hàng online.</p>
            </Row>
          </Col>
          <Col span={8}>
            <Row className="content">
              <img src="./src/assets/product2.jpg" alt="" />
              <span>Danh thiếp điện tử</span>
              <p>Xây dựng thương hiệu cá nhân trên mọi nền tảng.</p>
            </Row>
            <Row className="content">
              <img src="./src/assets/product4.jpg" alt="" />
              <span>
                Dịch vụ Quản trị, vận hành và tối ưu hệ thống (Managed Services)
              </span>
            </Row>
          </Col>
          <Col span={8}>
            <Row className="content">
              <img src="./src/assets/product3.jpg" alt="" />
              <span>Dịch vụ Phát triển website</span>
              <p>Xây dựng và nhập liệu website phù hợp cho doanh nghiệp.</p>
            </Row>
            <Row className="content">
              <img src="./src/assets/product5.jpg" alt="" />
              <span>Dịch vụ Tư vấn chuyển đổi số</span>
              <p>
                Tư vấn tận dụng Công nghệ để tối ưu hóa hoạt động doanh nghiệp.
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
