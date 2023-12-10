import { Card, Col, Form, Input, Row } from "antd";
import "../../assets/css/contactdetail.css";
import { Button } from "antd/es/radio";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const ContactDetailProduct = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 22,
    },
  };

  // validate form
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };
  return (
    <div className="container-contact-detail">
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Row>
            <Col span={6}></Col>
          </Row>
          <Row
            style={{
              marginTop: 60,
            }}
          >
            <Col span={14}>
              <Form
                className="form-item"
                {...layout}
                name="nest-messages"
                style={{
                  minHeight: 400,
                  maxWidth: 600,
                  borderRadius: 16,
                }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    style={{
                      marginTop: 28,
                    }}
                    className="form-input"
                    placeholder="Họ và Tên"
                  />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input className="form-input" placeholder="Email của bạn" />
                </Form.Item>
                <Form.Item name={["user", "phoneNumber"]}>
                  <Input className="form-input" placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item name={["user", "introduction"]}>
                  <Input.TextArea
                    style={{
                      height: 120,
                    }}
                    className="form-input"
                    placeholder="Lời nhắn "
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      backgroundColor: "#FF0054",
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    Gửi thông tin
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={10}>
              {" "}
              <Card style={{ width: 300, height: 400, border: "none" }}>
                <Row>
                  <Col span={6}>
                    <Row>
                      <PhoneOutlined className="icon-contact" />
                    </Row>
                    <Row>
                      <MailOutlined
                        style={{
                          marginTop: 20,
                        }}
                        className="icon-contact"
                      />
                    </Row>
                    <Row>
                      <EnvironmentOutlined
                        style={{
                          marginTop: 20,
                        }}
                        className="icon-contact"
                      />
                    </Row>
                  </Col>
                  <Col span={18}>
                    <ul className="list-contact">
                      <div>
                        <span className="span-contact">Hotline</span>
                        <li> 0888 136 622</li>
                      </div>

                      <div
                        style={{
                          marginTop: 28,
                        }}
                      >
                        <span className="span-contact">Gửi Email</span>
                        <li>dvkh.trueconnect@gmail.com</li>
                      </div>

                      <div
                        style={{
                          marginTop: 28,
                        }}
                      >
                        <span className="span-contact">
                          Địa chỉ của chúng tôi
                        </span>
                        <li>80, 22/45/69B Hoàng Văn Thái</li>
                      </div>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      marginTop: 48,
                    }}
                    span={24}
                  >
                    <Row>
                      <h5 className="heading-contact">Follow chúng tôi</h5>
                    </Row>
                    <Row
                      style={{ marginTop: 24, justifyContent: "space-around" }}
                    >
                      <LinkedinOutlined className="icon2-contact" />
                      <InstagramOutlined className="icon2-contact" />
                      <FacebookOutlined className="icon2-contact" />
                      <TwitterOutlined className="icon2-contact" />
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContactDetailProduct;
