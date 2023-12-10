import { Card, Col, Row } from "antd";
import "../../assets/css/introduce.css";

const Introduce = () => {
  return (
    <div className="container-introduce">
      <Row>
        <Col span={2} />
        <Col span={22}>
          <Row>
            <Col span={8}>
              <h2 className="heading-introduce">Giới thiệu</h2>
            </Col>
          </Row>
          <Row>
            <Col className="img1-introduce" span={9}>
              <img src="./src/assets/imgintroduce1.jpg" alt="" />
            </Col>
            <Col span={3} />
            <Col span={9}>
              <Card
                style={{
                  border: "none",
                  width: 400,
                }}
              >
                <h3 className="heading-paragraph-introduce">
                  Sản phẩm Website mini TrueConnect
                </h3>
                <p className="paragraph-introduce">
                  Dịch vụ phát triển website mini cung cấp cho khách hàng giải
                  pháp đơn giản, tiện lợi để xây dựng trang web mini cho doanh
                  nghiệp hoặc cá nhân. Website mini thu hút sự chú ý của người
                  truy cập tới một nội dung cụ thể, tránh dàn trải và tạo ấn
                  tượng tốt nhất về sản phẩm của Quý khách hàng.
                </p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={9}>
              <Card
                style={{
                  border: "none",
                  width: 400,
                }}
              >
                <h3 className="heading-paragraph-introduce">
                  Sản phẩm Website mini TrueConnect
                </h3>
                <p className="paragraph-introduce">
                  TrueConnect cho phét tích hợp gian hàng online trên website
                  mini nhằm đơn giản hoá hoạt động thương mại của Quý khách
                  hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận sản
                  phẩm mong muốn và thực hiện việc mua hàng.
                </p>
              </Card>
            </Col>
            <Col span={3} />
            <Col className="img2-introduce" span={9}>
              <img src="./src/assets/imgintroduce2.jpg" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Introduce;
