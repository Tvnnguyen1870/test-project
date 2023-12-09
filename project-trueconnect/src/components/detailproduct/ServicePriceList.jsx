import { Button, Card, Col, Row } from "antd";
import "../../assets/css/serviceprice.css";
import { CheckOutlined } from "@ant-design/icons";

const ServicePriceList = () => {
  return (
    <div className="container-serviceprice">
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Row>
            <Col span={8}>
              <Card
                style={{
                  border: "none",
                  backgroundColor: "#F9F0EC",
                  width: 350,
                }}
              >
                <h2 className="heading-serviceprice">Bảng giá dịch vụ</h2>
                <p className="para-service-price">
                  Choose the perfect plan for your needs. Always flexible to
                  grow
                </p>
              </Card>
            </Col>
          </Row>
          <Row
            style={{
              marginBottom: 50,
            }}
          >
            <Col className="container-card" span={8}>
              {" "}
              <Card
                style={{
                  width: 300,
                  height: 310,
                }}
              >
                <h4 className="heading-card">Webmini 1</h4>
                <p className="para-card">
                  1.000.000<span className="year">/năm</span>
                </p>
                <ul className="list-card">
                  <li>
                    <CheckOutlined className="icon-card" />1 Website
                  </li>
                  <li>
                    <CheckOutlined className="icon-card" />1 Danh thiếp điện tử
                  </li>
                  <li>
                    <CheckOutlined className="icon-card" />
                    Phân loại sản phẩm theo 2 nhóm
                  </li>
                </ul>
                <Button
                  style={{
                    width: "100%",
                    marginTop: 16,
                    backgroundColor: "#FF0054",
                  }}
                  type="primary"
                >
                  Nâng cấp
                </Button>
              </Card>
            </Col>
            <Col className="container-card" span={8}>
              {" "}
              <Card
                style={{
                  width: 300,
                  height: 340,
                }}
              >
                <Row>
                  <Col span={24}>
                    <h4 className="heading-card">Webmini 2</h4>
                    <p className="para-card">
                      2.000.000<span className="year">/năm</span>
                    </p>
                    <ul className="list-card">
                      <li>
                        {" "}
                        <CheckOutlined className="icon-card" />
                        Auto update mode
                      </li>
                      <li>
                        <CheckOutlined className="icon-card" />
                        Online operator 24/7
                      </li>
                      <li>
                        <CheckOutlined className="icon-card" />
                        International posting
                      </li>
                      <li>
                        <CheckOutlined className="icon-card" />
                        Unique newsletters
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Button
                  style={{
                    width: "100%",
                    marginTop: 16,
                    backgroundColor: "#FF0054",
                  }}
                  type="primary"
                >
                  Nâng cấp
                </Button>
              </Card>
            </Col>
            <Col className="container-card" span={8}>
              {" "}
              <Card
                style={{
                  width: 300,
                  height: 370,
                }}
              >
                <h4 className="heading-card">Webmini 3</h4>
                <p className="para-card">
                  5.000.000<span className="year">/năm</span>
                </p>
                <ul className="list-card">
                  <li>
                    <CheckOutlined className="icon-card" />
                    Auto update mode
                  </li>
                  <li>
                    <CheckOutlined className="icon-card" />
                    Online operator 24/7
                  </li>
                  <li>
                    <CheckOutlined className="icon-card" />
                    International posting
                  </li>
                  <li>
                    <CheckOutlined className="icon-card" />
                    Unique newsletters
                  </li>
                  <li>
                    <CheckOutlined className="icon-card" />
                    20 Design templates
                  </li>
                </ul>
                <Button
                  style={{
                    width: "100%",
                    marginTop: 16,
                    backgroundColor: "#FF0054",
                  }}
                  type="primary"
                >
                  Nâng cấp
                </Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ServicePriceList;
