import { Card, Col, Row } from "antd";
import "../../assets/css/evaluate.css";

const Evaluate = () => {
  return (
    <div className="container-evaluate">
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Row>
            <Col span={10}>
              <h3 className="heading-evaluate">Đánh giá của Khách hàng </h3>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Card
                hoverable
                style={{
                  backgroundColor: "#10375C",
                  width: 300,
                }}
                cover={
                  <img
                    style={{
                      borderRadius: 20,
                    }}
                    src="./src/assets/detailwebmini.jpg"
                  />
                }
              >
                <h6>Phạm Thanh Bình</h6>
                <span>UI Designer at Google</span>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={{
                  backgroundColor: "#10375C",
                  width: 300,
                }}
                cover={
                  <img
                    style={{
                      borderRadius: 20,
                    }}
                    src="./src/assets/detailwebmini.jpg"
                  />
                }
              >
                <h6>Phạm Thanh Bình</h6>
                <span>UI Designer at Google</span>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={{
                  backgroundColor: "#10375C",
                  width: 300,
                  textAlign: "center",
                }}
                cover={
                  <img
                    style={{
                      borderRadius: 20,
                    }}
                    src="./src/assets/detailwebmini.jpg"
                  />
                }
              >
                <h6>Phạm Thanh Bình</h6>
                <span>UI Designer at Google</span>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Evaluate;
