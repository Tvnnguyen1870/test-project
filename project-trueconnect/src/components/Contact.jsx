import { Button, Col, Form, Input, Row } from "antd";
import "../assets/css/contact.css";
import { MailOutlined } from "@ant-design/icons";

const Contact = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
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
    <div id="contact" className="container-contact">
      <Row>
        <Col span={3} />
        <Col span={8}>
          <h2 className="heading-contact">Liên Hệ</h2>
          <ul className="list-contact">
            <li>
              <MailOutlined
                style={{
                  marginRight: 8,
                }}
              />
              dvkh.trueconnect@gmail.comcom
            </li>
            <li>
              Địa chỉ: 80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha
              Noi
            </li>
          </ul>
        </Col>{" "}
        <Col span={2} />
        <Col span={8}>
          <Form
            className="form-item"
            {...layout}
            name="nest-messages"
            style={{
              maxWidth: 600,
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
              <Input className="form-input" placeholder="Họ và Tên" />
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
              <Input.TextArea className="form-input" placeholder="Ghi chú " />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  backgroundColor: "#0DC5AE",
                }}
                type="primary"
                htmlType="submit"
              >
                Gửi thông tin
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
