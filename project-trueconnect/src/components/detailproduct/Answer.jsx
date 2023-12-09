import { Card, Col, Row } from "antd";
import "../../assets/css/answer.css";
const Answer = () => {
  return (
    <div className="container-answer">
      <Row>
        <Col span={2} />
        <Col
          style={{
            marginTop: 40,
          }}
          span={20}
        >
          <Row>
            <h3 className="heading-answer">Giải đáp thắc mắc</h3>
          </Row>
          <Row>
            <Col span={12}>
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              >
                <h5 className="heading5-answer">Webmini là gì?</h5>
                <p className="para-answer">
                  Giống 1 website thu nhỏ, với các chức năng cần có tương tự như
                  các trang website hiện có trên thị trường. Webmini cung cấp
                  các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang
                  web cho riêng mình, với các thao tác bằng tay, đơn giản và
                  được thực hiện ngay trên chính thiết bị di động của mình. Việc
                  này nhằm đơn giản hóa hoạt động thương mại của khách hàng,
                  đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn
                  và thực hiện việc mua hàng dễ dàng hơn qua online.
                </p>
                <ul className="list-content-answer">
                  <li>Chia sẻ Webmini có bị mất dữ liệu không?</li>
                  <li>Khi đã tạo webmini, tôi có được chỉnh sửa không?</li>
                  <li>Website mini có gì khác so với website thông thường?</li>
                  <li>
                    Có thể đổi gói webmini khi đã mua gói trước đó rồi không?
                  </li>
                </ul>
              </Card>
            </Col>
            <Col span={2} />
            <Col className="img-answer" span={10}>
              <img src="./src/assets/imganswer.jpg" alt="" />
            </Col>
          </Row>
        </Col>{" "}
      </Row>
    </div>
  );
};

export default Answer;
