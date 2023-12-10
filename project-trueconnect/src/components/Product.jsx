import { Card, Col, Row } from "antd";
import "../assets/css/product.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const toDetailWebMini = () => {
    navigate("/detailproduct");
  };
  return (
    <div className="container-product">
      <Row>
        <Col span={2} />
        <Col
          style={{
            marginTop: 100,
          }}
          span={20}
        >
          <div className="product-content">
            <Row
              style={{
                paddingTop: 40,
              }}
            >
              <Col className="col-container-content" span={8}>
                <img
                  style={{
                    marginTop: 20,
                    width: 78.623,
                    height: 83,
                  }}
                  onClick={() => toDetailWebMini()}
                  className="img-product"
                  src="./src/assets/product1.jpg"
                />
                <Card
                  style={{
                    border: "none",
                  }}
                >
                  <h5
                    onClick={() => toDetailWebMini()}
                    className="heading5-product"
                  >
                    Website Mini
                  </h5>{" "}
                  <p className="paragraph-product">
                    Tạo website đơn giản tích hợp gian hàng online
                  </p>
                </Card>
              </Col>
              <Col className="col-container-content" span={8}>
                <img
                  onClick={() => toDetailWebMini()}
                  style={{
                    marginTop: 20,
                    width: 82,
                    height: 82,
                  }}
                  className="img-product"
                  src="./src/assets/product2.jpg"
                />
                <Card
                  style={{
                    border: "none",
                  }}
                >
                  <h5
                    onClick={() => toDetailWebMini()}
                    className="heading5-product"
                  >
                    Danh thiếp điện tử
                  </h5>{" "}
                  <p className="paragraph-product">
                    Xây dựng thương hiệu cá nhân trên mọi nền tảng
                  </p>
                </Card>
              </Col>
              <Col className="col-container-content" span={8}>
                <img
                  onClick={() => toDetailWebMini()}
                  style={{
                    marginTop: 20,
                    width: 83,
                    height: 83,
                  }}
                  className="img-product"
                  src="./src/assets/product3.jpg"
                />
                <Card
                  style={{
                    border: "none",
                  }}
                >
                  <h5
                    onClick={() => toDetailWebMini()}
                    className="heading5-product"
                  >
                    Dịch vụ Phát triển website
                  </h5>{" "}
                  <p className="paragraph-product">
                    Xây dựng và nhập liệu website phù hợp cho doanh nghiệp
                  </p>
                </Card>
              </Col>
            </Row>
            <Row
              style={{
                paddingTop: 28,
              }}
            >
              <Col className="col-container-content" span={8}>
                <img
                  onClick={() => toDetailWebMini()}
                  style={{
                    marginTop: 20,
                    width: 79,
                    height: 82,
                  }}
                  className="img-product"
                  src="./src/assets/product6.jpg"
                />
                <Card
                  style={{
                    border: "none",
                  }}
                >
                  <h5
                    onClick={() => toDetailWebMini()}
                    className="heading5-product"
                  >
                    Dịch vụ Công nghệ thông tin cho thuê
                  </h5>{" "}
                  <p className="paragraph-product">
                    Phát triển phần mềm CNTT phục vụ cho Doanh nghiệp
                  </p>
                </Card>
              </Col>
              <Col className="col-container-content" span={8}>
                <img
                  onClick={() => toDetailWebMini()}
                  style={{
                    marginTop: 20,
                    width: 76,
                    height: 83,
                  }}
                  className="img-product"
                  src="./src/assets/product4.jpg"
                />
                <Card
                  style={{
                    border: "none",
                  }}
                >
                  <h5
                    onClick={() => toDetailWebMini()}
                    className="heading5-product"
                  >
                    Dịch vụ Quản trị, vận hành và tối ưu hệ thống (Managed
                    Services)
                  </h5>{" "}
                </Card>
              </Col>
              <Col className="col-container-content" span={8}>
                <img
                  onClick={() => toDetailWebMini()}
                  style={{
                    marginTop: 20,
                    width: 83,
                    height: 83,
                  }}
                  className="img-product"
                  src="./src/assets/product5.jpg"
                />
                <Card
                  style={{
                    border: "none",
                  }}
                >
                  <h5
                    onClick={() => toDetailWebMini()}
                    className="heading5-product"
                  >
                    Dịch vụ Tư vấn chuyển đổi số
                  </h5>{" "}
                  <p className="paragraph-product">
                    Tư vấn tận dụng Công nghệ để tối ưu hóa hoạt động doanh
                    nghiệp
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
