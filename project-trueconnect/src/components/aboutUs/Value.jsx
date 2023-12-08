import { Col, Row } from "antd";
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
                  <h5 className="heading5-value">Tôn trọng (Respect)</h5>
                  <img src="./src/assets/elip1.jpg" alt="" />
                  <p className="paragraph-value">
                    Tôn trọng bản thân, tôn trọng khách hàng, tôn trọng pháp
                    luật
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <h5 className="heading5-value">Lắng nghe (Listen)</h5>
                  <img src="./src/assets/elip2.jpg" alt="" />
                  <p className="paragraph-value">
                    Lắng nghe để thấu hiểu, lắng nghe để đổi thay, lắng nghe để
                    phát triển
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <h5 className="heading5-value">Chia sẻ (Share)</h5>
                  <img src="./src/assets/elip3.jpg" alt="" />
                  <p className="paragraph-value">
                    Chia sẻ để hỗ trợ khách hàng, chia sẻ để phát triển nội bộ,
                    cùng hướng về mục tiêu chung
                  </p>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              {" "}
              <img src="./src/assets/value.jpg" alt="" />
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <h5 className="heading5-value">Đồng hành (Company)</h5>
                  <img src="./src/assets/elip4.jpg" alt="" />
                  <p className="paragraph-value">
                    Đồng hành và phát triển cùng sự phát triển của khách hàng,
                    đối tác
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <h5 className="heading5-value">Sáng tạo (Creative)</h5>
                  <img src="./src/assets/elip2.jpg" alt="" />
                  <p className="paragraph-value">
                    Chủ động và liên tục đổi mới để đáp ứng nhu cầu ngày càng đa
                    dạng và sự phát triển của thị trường
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <h5 className="heading5-value">Nâng tầm (Elevate):</h5>
                  <img src="./src/assets/elip5.jpg" alt="" />
                  <p className="paragraph-value">
                    Không ngừng học hỏi và phát triển để nâng cao tiêu chuẩn và
                    chất lượng của sản phẩm, dịch vụ cho khách hàng
                  </p>
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
