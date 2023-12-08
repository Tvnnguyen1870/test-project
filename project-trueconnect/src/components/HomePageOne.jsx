import { Card, Col, Row } from "antd";
import "../assets/css/pageone.css";

const HomePageOne = () => {
  return (
    <div className="container-pageone">
      <Row>
        <Col span={3} />
        <Col span={9}>
          <h3>Công ty Cổ phần Công nghệ TrueConnect</h3>
          <p className="para-one">
            Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và
            vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ
            Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân)
            tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh
            nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển
            kinh doanh ...
          </p>
          <Row
            style={{
              marginTop: 32,
            }}
          >
            <Col span={10}>
              <Row className="style-icon">
                {" "}
                <img
                  className="img-icon "
                  src="./src/assets/picture11.jpg"
                  alt=""
                />
                <p className="paragraph-style">Tận tâm</p>
              </Row>
              <Row className="style-icon">
                {" "}
                <img
                  className="img-icon "
                  src="./src/assets/picture13.jpg"
                  alt=""
                />
                <p className="paragraph-style">Sáng tạo</p>
              </Row>
            </Col>
            <Col span={10}>
              <Row className="style-icon">
                {" "}
                <img
                  className="img-icon "
                  src="./src/assets/picture12.jpg"
                  alt=""
                />
                <p className="paragraph-style">Lắng nghe</p>
              </Row>
              <Row></Row>
            </Col>
          </Row>
        </Col>
        <Col span={1} />
        <Col span={10}>
          <Row className="img-people">
            <img
              src="./src/assets/picture3.jpg"
              alt=""
              style={{
                width: 448,
                height: 293,
              }}
            />
            <img
              src="./src/assets/picture4.jpg"
              alt=""
              style={{
                width: 234,
                height: 234,
                marginTop: 16,
              }}
            />
            <img
              src="./src/assets/picture5.jpg"
              alt=""
              style={{
                marginTop: 16,
                width: 187,
                height: 234,
              }}
            />
          </Row>
        </Col>
      </Row>

      {/* phần tại sao nên lựa chọn chúng tôi */}
      <Row
        style={{
          height: 172,
        }}
      >
        <Col span={24}>
          <h2>Tại sao nên lựa chọn chúng tôi</h2>
        </Col>
      </Row>
      <Row>
        <Col span={2} />
        <Col span={7}>
          {" "}
          <Card
            style={{
              textAlign: "start",
              width: 350,
            }}
          >
            <img src="./src/assets/picture7.jpg" alt="" />
            <h4>Giá cả hợp lý</h4>
            <p>
              Giá thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi
              đối tượng.
            </p>
          </Card>
        </Col>
        <Col span={7}>
          <Card
            style={{
              textAlign: "start",
              width: 350,
            }}
          >
            <img src="./src/assets/picture8.jpg" alt="" />
            <h4>Chất lượng đảm bảo</h4>
            <p>
              Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp
              với xu hướng.
            </p>
          </Card>
        </Col>
        <Col span={7}>
          <Card
            style={{
              textAlign: "start",
              width: 350,
            }}
          >
            <img src="./src/assets/picture9.jpg" alt="" />
            <h4>Mới mẻ và tiện lợi</h4>
            <p>Nhiều tính năng mới lạ, tiện dụng với người sử dụng.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePageOne;
