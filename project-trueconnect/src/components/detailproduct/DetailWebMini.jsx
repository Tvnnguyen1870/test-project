import "../../assets/css/detailwebmini.css";
import { Button, Card, Col, Row } from "antd";

const DetailWebMini = () => {
  return (
    <div className="container-webmini">
      <Row>
        <Col span={2} />
        <Col className="img-webmini" span={10}>
          <img src="./src/assets/detailwebmini.jpg" alt="" />
        </Col>
        <Col span={2} />
        <Col span={10}>
          <Card
            style={{
              marginTop: 72,
              height: 393,
              width: "80%",
              border: "none",
              backgroundColor: "#F9F0EC",
            }}
          >
            <Row>
              <h3 className="heading-webmini">Giới thiệu về Webmini</h3>
            </Row>
            <Row>
              <p className="paragraph-webmini">
                Website Mini là một trang web đơn trang, tập trung vàonội dung
                quan trọng nhất. Bạn có thể sử dụng nó để giớithiệu sản phẩm,
                dịch vụ hoặc sự kiện đặc biệt của mình.Với giao diện thân thiện
                và tốc độ tải trang nhanh,Website Mini tạo ra trải nghiệm tốt
                cho khách hàng
              </p>
            </Row>
            <Row>
              <Button
                style={{
                  backgroundColor: "#0DC5AE",
                }}
                type="primary"
              >
                Nâng cấp ngay
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DetailWebMini;
