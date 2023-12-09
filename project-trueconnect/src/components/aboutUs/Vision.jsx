import { Card, Col, Row } from "antd";
import "../../assets/css/vision.css";
const Vision = () => {
  return (
    <div className="container-vision">
      <Row>
        <Col span={3} />
        <Col span={20}>
          <Row>
            <h2 className="heading-vision">NĂNG LỰC CỐT LÕI</h2>
          </Row>
          <Row
            style={{
              marginBottom: 48,
            }}
          >
            <Col span={14}>
              <Row>
                <Col span={12}>
                  <Card
                    style={{
                      paddingBottom: 50,
                    }}
                    className="card-vision"
                  >
                    <h5 className="heading5-vision">1. Nền Tảng</h5>
                    <p className="paragraph-vision">
                      Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân
                      sự giàu kinh nghiệm, từng tham gia các dự án lớn trong
                      lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính
                      sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp
                      chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất
                      lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh
                      chóng phù hợp với sự phát triển vũ bão của thị trường
                      trong thời đại chuyển đổi số
                    </p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card className="card-vision">
                    <h5 className="heading5-vision">2. Tham Vọng</h5>
                    <p className="paragraph-vision">
                      Chúng tôi có tham vọng trở thành người đứng đầu trong lĩnh
                      vực công nghệ thông tin và các giải pháp công nghệ hỗ trợ
                      quá trình thực hành kinh doanh. Đây cũng là động lực để
                      chúng tôi tạo ra tiêu chuẩn khắt khe cho Hệ sinh thái
                      TrueConnect – hoạt động mạnh mẽ, đầy đủ tính năng và cởi
                      mở với sự thay đổi của xu hướng.
                    </p>
                    <img
                      style={{
                        width: 122,
                        height: 112,
                      }}
                      src="./src/assets/vision1.jpg"
                      alt=""
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card className="card-vision">
                    <h5 className="heading5-vision">5. Tôn Chỉ Hành Động:</h5>
                    <p
                      style={{
                        marginTop: 6,
                      }}
                      className="paragraph-vision"
                    >
                      <span
                        style={{
                          color: "#0DC5AE",
                          width: "30%",
                        }}
                      >
                        Với khách hàng:
                      </span>{" "}
                      Tối ưu chi phí, thúc đẩy áp dụng công nghệ thông tin,
                      chuyển đổi số vào hoạt động kinh doanh của khách hàng, cải
                      thiện tính bền vững của hoạt động kinh doanh phía khách
                      hàng
                    </p>
                    <p
                      style={{
                        marginTop: 6,
                      }}
                      className="paragraph-vision"
                    >
                      <span
                        style={{
                          width: "25%",
                          color: "#0DC5AE",
                        }}
                      >
                        {" "}
                        Với nội bộ:
                      </span>{" "}
                      Cùng đồng hành xây dựng sản phẩm, đồng thời trú trọng phát
                      triển, nâng tầm bản thân, cùng chia sẻ lợi ích, khó khăn
                      giữa doanh nghiệp và nhân sự
                    </p>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <Card className="card-vision">
                    <h5 className="heading5-vision">3. Thích Nghi</h5>
                    <p className="paragraph-vision">
                      TrueConnect chú trọng nắm bắt xu thế, nhu cầu của thị
                      trường, và khả năng sử dụng nền tảng Công nghệ mới, đáp
                      ứng được những nhu cầu phức tạp của người dùng. Hệ sinh
                      thái TrueConnect được thiết kế để dễ dàng nâng cấp, tích
                      hợp thêm các tính năng và các sản phẩm mới trong hệ sinh
                      thái
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card
                    style={{
                      paddingBottom: 14,
                    }}
                    className="card-vision"
                  >
                    <h5 className="heading5-vision">4. Chất Lượng Dịch Vụ</h5>
                    <p className="paragraph-vision">
                      Sản phẩm của chúng tôi hướng tới nhu cầu, trải nghiệm và
                      sự tiện ích của khách hàng khi cung cấp dịch vụ.
                      TrueConnect không ngừng đổi mới và cải thiện chất lượng
                      sản phẩm và dịch vụ, liên tục nâng cao các tiêu chuẩn và
                      dịch vụ khi cung cấp cho khách hàng.
                    </p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Vision;
