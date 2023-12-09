import { Card, Col, Row } from "antd";
import "../../assets/css/value.css";

const Value = () => {
  return (
    <div className="container-value">
      <Row>
        <Col span={3} />
        <Col span={20}>
          <Row>
            <Col span={8}>
              <h2 className="heading-value">GIÁ TRỊ CỐT LÕI</h2>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <Card
                    style={{
                      textAlign: "end",
                      border: "none",
                      width: 350,
                    }}
                  >
                    <span className="heading5-value">
                      Tôn trọng (Respect)
                      <img src="./src/assets/elip1.jpg" alt="" />
                    </span>
                    <p
                      style={{
                        textAlign: "end",
                        paddingRight: "15%",
                      }}
                      className="paragraph-value"
                    >
                      Tôn trọng bản thân, tôn trọng khách hàng, tôn trọng pháp
                      luật
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card
                    style={{
                      textAlign: "end",
                      border: "none",
                      width: 350,
                    }}
                  >
                    <span className="heading5-value">
                      Lắng nghe (Listen)
                      <img src="./src/assets/elip2.jpg" alt="" />
                    </span>
                    <p
                      style={{
                        paddingRight: "15%",
                        textAlign: "end",
                      }}
                      className="paragraph-value"
                    >
                      Lắng nghe để thấu hiểu, lắng nghe để đổi thay, lắng nghe
                      để phát triển
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card
                    style={{
                      textAlign: "end",
                      border: "none",
                      width: 350,
                    }}
                  >
                    <span className="heading5-value">
                      Chia sẻ (Share){" "}
                      <img src="./src/assets/elip3.jpg" alt="" />
                    </span>
                    <p
                      style={{
                        paddingRight: "15%",
                        textAlign: "end",
                      }}
                      className="paragraph-value"
                    >
                      Chia sẻ để hỗ trợ khách hàng, chia sẻ để phát triển nội
                      bộ, cùng hướng về mục tiêu chung
                    </p>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col className="img-center" span={8}>
              {" "}
              <img src="./src/assets/value.jpg" alt="" />
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <Card
                    style={{
                      textAlign: "start",
                      border: "none",
                      width: 350,
                    }}
                  >
                    <span className="heading5-value">
                      <img
                        style={{
                          marginRight: 16,
                        }}
                        src="./src/assets/elip4.jpg"
                        alt=""
                      />
                      Đồng hành (Company)
                    </span>
                    <p
                      style={{
                        paddingLeft: "18%",
                      }}
                      className="paragraph-value"
                    >
                      Đồng hành và phát triển cùng sự phát triển của khách hàng,
                      đối tác
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card
                    style={{
                      textAlign: "start",
                      border: "none",
                      width: 350,
                    }}
                  >
                    <span className="heading5-value">
                      <img
                        style={{
                          marginRight: 16,
                        }}
                        src="./src/assets/elip2.jpg"
                        alt=""
                      />
                      Sáng tạo (Creative){" "}
                    </span>
                    <p
                      style={{
                        paddingLeft: "18%",
                      }}
                      className="paragraph-value"
                    >
                      Chủ động và liên tục đổi mới để đáp ứng nhu cầu ngày càng
                      đa dạng và sự phát triển của thị trường
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card
                    style={{
                      textAlign: "start",
                      border: "none",
                      width: 350,
                    }}
                  >
                    <span className="heading5-value">
                      <img
                        style={{
                          marginRight: 16,
                        }}
                        src="./src/assets/elip5.jpg"
                        alt=""
                      />{" "}
                      Nâng tầm (Elevate):{" "}
                    </span>
                    <p
                      style={{
                        paddingLeft: "18%",
                      }}
                      className="paragraph-value"
                    >
                      Không ngừng học hỏi và phát triển để nâng cao tiêu chuẩn
                      và chất lượng của sản phẩm, dịch vụ cho khách hàng
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

export default Value;
