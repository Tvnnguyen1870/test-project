import { Col, Row } from "antd";
import "../../assets/css/aboutus.css";

const AboutUs = () => {
  return (
    <div className="container-aboutus">
      {/* về chúng tôi */}
      <Row>
        <Col span={3} />
        <Col span={20}>
          <Row>
            <h2 className="heading1-about-us">VỀ CHÚNG TÔI</h2>
          </Row>
          <Row>
            <Col span={10}>
              <h3 className="heading2-about-us">
                Kết sức mạnh, Nối thành công
              </h3>
            </Col>
            <Col span={6}>
              <p className="paragraph1-about-us">
                Nền tảng hệ thống tốt, nâng cấp thường xuyên, linh hoạt; cầu thị
              </p>
            </Col>
            <Col span={6}>
              <p className="paragraph1-about-us">
                Donec vitae sapien ut libero venenatis faucibus. Vestibulum
                fringilla pede sit amet augue. Vivamus euismod mauris.
              </p>
            </Col>
          </Row>

          {/* img */}
          <Row>
            <Col span={20}>
              <img
                style={{
                  marginTop: 40,
                  width: "100%",
                  height: "90vh",
                }}
                src="./src/assets/us1.jpg"
                alt=""
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={3} />
        <Col span={20}>
          <Row>
            <h2 className="heading1-about-us">GIỚI THIỆU</h2>
          </Row>

          {/* giới thiệu */}
          <Row>
            <p className="paragraph2-about-us">
              <span
                style={{
                  paddingTop: 28,
                  color: "#000",
                  fontSize: 98,
                  fontWeight: 650,
                }}
              >
                T
              </span>
              hành lập vào năm 2022, Công ty Cổ phần Giải pháp Công nghệ
              TrueConnect hoạt động với mong muốn thúc đẩy quá trình kinh doanh
              và vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công
              cụ Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá
              nhân) tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá
              cho doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và
              phát triển kinh doanh.
            </p>

            <p className="paragraph2-about-us">
              Chúng tôi hiểu được giá trị của việc có một hệ sinh thái phần mềm
              phong phú và đầy đủ với nhu cầu của Quý khách hàng. Đặc biệt với
              các cá nhân kinh doanh và doanh nghiệp nhỏ, tính dễ sử dụng và chi
              phí hợp lý cũng đóng vai trò quan trọng trong quá trình hoạt động.
            </p>
            <p className="paragraph2-about-us">
              Thấu hiểu nhu cầu và các vấn đề mà khách hàng gặp phải, Công ty Cổ
              phần Giải pháp Công nghệ TrueConnect đã dành thời gian nghiên cứu
              và phát triển Hệ sinh thái TrueConnect gồm nhiều ứng dụng, phần
              mềm liên kết chặt chẽ với nhau, giúp Quý khách hàng có trải nghiệm
              tốt trong quá trình vận hành và phát triển kinh doanh.
            </p>
            <p className="paragraph2-about-us">
              Hệ sinh thái TrueConnect có thể được sử dụng hoàn toàn trên điện
              thoại và bao gồm các sản phẩm, giải pháp và dịch vụ sau:
            </p>
          </Row>
        </Col>
      </Row>

      {/* 3 img */}
      <Row className="img2-about-us">
        <Col span={3} />
        <Col span={6}>
          <img src="./src/assets/us2.jpg" alt="" />
        </Col>
        <Col span={6}>
          <img src="./src/assets/us3.jpg" alt="" />
        </Col>
        <Col span={6}>
          <img src="./src/assets/us4.jpg" alt="" />
        </Col>
      </Row>

      <Row>
        <Col span={3} />
        <Col
          style={{
            marginBottom: 32,
          }}
          span={18}
        >
          <Row>
            <ul className="list-paragraph">
              <li>
                Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp
                gian hàng online
              </li>
              <li>Giải pháp: Quản trị doanh nghiệp (HRM, ERP)</li>
              <li>
                Dịch vụ: Dịch vụ phát triển website, dịch vụ Công nghệ thông tin
                cho thuê, dịch vụ quản trị, vận hành và tối ưu hệ thống (Managed
                Services), dịch vụ tư vấn chuyển đổi số
              </li>
            </ul>
            <p className="paragraph1-about-us">
              Hệ sinh thái TrueConnect được phát triển bởi công ty phần mềm với
              hơn 30 nhân sự công nghệ thông tin, trong đó đội ngũ sáng lập đã
              có kinh nghiệm nhiều năm trong lĩnh vực Công nghệ thông tin, có
              kinh nghiệm phát triển, triển khai và vận hành những dự án lớn
              hàng triệu người dùng.
            </p>
          </Row>
        </Col>
      </Row>

      {/* tầm nhìn và sứ mệnh */}
      <Row>
        <Col span={3} />
        <Col span={20}>
          <Row>
            <h2 className="heading1-about-us">TẦM NHÌN VÀ SỨ MỆNH</h2>
          </Row>
          <Row>
            <img
              style={{
                width: 51,
                height: 42,
              }}
              src="./src/assets/up.jpg"
              alt=""
            />
            <h3 className="heading3-about-us">SỨ MỆNH</h3>
          </Row>
          <Row
            style={{
              marginBottom: 20,
            }}
          >
            <p className="paragraph1-about-us">
              TrueConnect không ngừng sáng tạo và phát triển để đem lại giá trị
              cho Quý khách hàng, Quý đối tác và xã hội bao gồm:
            </p>
          </Row>
          <Row>
            <ul className="list-paragraph">
              <li>
                Đơn giản hoá và thống nhất trải nghiệm ứng dụng Công nghệ Thông
                tin vào mọi lĩnh vực trong kinh doanh và cuộc sống
              </li>
              <li>
                Hỗ trợ thúc đẩy chuyển đổi số cho các cá nhân kinh doanh và các
                doanh nghiệp vừa và nhỏ (SME)
              </li>
              <li>
                Phổ biến áp dụng Công nghệ thông tin vào công việc kinh doanh và
                quản trị doanh nghiệp
              </li>
            </ul>
          </Row>
          <Row>
            <img
              style={{
                width: 51,
                height: 42,
              }}
              src="./src/assets/up.jpg"
              alt=""
            />
            <h3 className="heading3-about-us">TẦM NHÌN </h3>
          </Row>
          <Row
            style={{
              marginBottom: 40,
            }}
          >
            <p className="paragraph1-about-us">
              Trở thành Đối tác đồng hành hàng đầu/top 1 Việt Nam về hệ sinh
              thái công nghệ và các giải pháp kinh doanh toàn diện, đơn giản,
              thống nhất dành cho cá nhân, tổ chức và doanh nghiệp thực hiện
              hoạt động kinh doanh.
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
