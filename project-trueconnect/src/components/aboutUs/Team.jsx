import { Card, Col, Row } from "antd";
import "../../assets/css/team.css";
const Team = () => {
  return (
    <div className="container-team">
      <Row>
        <Row
          style={{
            marginTop: 120,
            marginBottom: 80,
          }}
        >
          <Col span={2} />
          <Col span={8}>
            <h2 className="heading-team">Đội ngũ sáng lập</h2>
            <p className="paragraph-team">
              Với hàng chục năm làm trong nghề, đội ngũ sáng lập công ty có kinh
              nghiệm trong ngành và tận tâm đem đến những dịch vụ giải pháp đột
              phá và hiệu quả cho khách hàng.
            </p>
          </Col>
          <Col span={4}>
            <Card
              className="card-team"
              hoverable
              cover={<img className="img-team" src="./src/assets/team1.jpg" />}
            >
              <h4 className="heading4-team">Vũ Trường Giang</h4>
              <span className="span-team">Founder</span>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="card-team"
              hoverable
              cover={<img className="img-team" src="./src/assets/team4.jpg" />}
            >
              <h4 className="heading4-team">Lê Thu Hằng</h4>
              <span className="span-team">Co - Founder</span>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="card-team"
              hoverable
              cover={<img className="img-team" src="./src/assets/team3.jpg" />}
            >
              <h4 className="heading4-team">Đồng Văn Hồng</h4>
              <span className="span-team">Co - Founder</span>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Team;
