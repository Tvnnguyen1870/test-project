import { Card, Col, Row, Timeline } from "antd";
import { StarOutlined } from "@ant-design/icons";
import "../../assets/css/feature.css";
const Feature = () => {
  return (
    <div className="container-feature">
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Row>
            <Col span={8}>
              <h2 className="heading-feature">Tính năng sản phẩm</h2>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Row>
                <Card
                  style={{
                    width: "100%",
                    border: "none",
                    textAlign: "end",
                    marginTop: 240,
                  }}
                >
                  <h4 className="heading4-paragraph">Khả năng tùy chỉnh </h4>
                  <p className="paragraph-content">
                    Quý khách hàng cũng có thể tùy chỉnh thông tin logo, banner
                    và tên công ty để phù hợp với thương hiệu của mình. Quý
                    khách hàng cũng có thể đăng tải một số lượng bài viết hoặc
                    sản phẩm theo nhu cầu của mình.
                  </p>
                </Card>
              </Row>
              <Row>
                <Card
                  style={{
                    width: "100%",
                    border: "none",
                    textAlign: "end",
                  }}
                >
                  <h4 className="heading4-paragraph">
                    Cập nhật thông tin trạng thái sản phẩm{" "}
                  </h4>
                  <p className="paragraph-content">
                    Quý khách có thể cập nhật trạng thái như còn hàng, hết hàng
                    hay ẩn sản phẩm khỏi danh mục bán hàng. Quý khách có thể
                    theo dõi trạng thái sản phẩm trong danh mục quản lý của
                    mình.
                  </p>
                </Card>
              </Row>
            </Col>
            <Col span={1}>
              {" "}
              <Row
                style={{
                  marginLeft: 6,
                }}
              >
                <Timeline
                  mode="alternate"
                  items={[
                    {
                      dot: (
                        <StarOutlined
                          style={{
                            fontSize: "16px",
                            padding: 4,
                            color: "#fff",
                            borderRadius: 12,
                            marginTop: 52,
                            backgroundColor: "#FA541C",
                          }}
                        />
                      ),
                    },
                  ]}
                />
              </Row>
              <Row
                style={{
                  marginLeft: 6,
                }}
              >
                <Timeline
                  style={{
                    height: 96,
                    marginTop: 200,
                  }}
                  mode="alternate"
                  items={[
                    {
                      dot: (
                        <StarOutlined
                          style={{
                            fontSize: "16px",
                            padding: 4,
                            color: "#fff",
                            borderRadius: 12,
                            backgroundColor: "#FA541C",
                          }}
                        />
                      ),
                    },
                  ]}
                />
              </Row>
              <Row
                style={{
                  marginLeft: 6,
                }}
              >
                <Timeline
                  mode="alternate"
                  items={[
                    {
                      dot: (
                        <StarOutlined
                          style={{
                            fontSize: "16px",
                            padding: 4,
                            color: "#fff",
                            borderRadius: 12,
                            backgroundColor: "#FA541C",
                            marginTop: 32,
                          }}
                        />
                      ),
                    },
                  ]}
                />
              </Row>
              <Row
                style={{
                  marginLeft: 6,
                }}
              >
                <Timeline
                  mode="alternate"
                  items={[
                    {
                      dot: (
                        <StarOutlined
                          style={{
                            fontSize: "16px",
                            padding: 4,
                            color: "#fff",
                            borderRadius: 12,
                            backgroundColor: "#FA541C",
                            marginTop: 48,
                          }}
                        />
                      ),
                    },
                  ]}
                />
              </Row>
            </Col>
            <Col span={10}>
              <Row>
                <Card
                  style={{
                    width: "100%",
                    border: "none",
                    textAlign: "start",
                  }}
                >
                  <h4 className="heading4-paragraph">
                    Xây dựng website bán hàng trực tuyến{" "}
                  </h4>
                  <p className="paragraph-content">
                    Website mini bao gồm thông tin sản phẩm, bài đăng, tích hợp
                    các chức năng dành cho bán hàng trực tuyến.Thao tác dễ dàng
                    trên điện thoại giúp Quý khách hàng có thể tạo showcase trực
                    quan, nhanh chóng.
                  </p>
                  <p className="paragraph-content">
                    Website Mini là một trang web đơn trang, tập trung vào nội
                    dung quan trọng nhất. Bạn có thể sử dụng nó để giới thiệu
                    sản phẩm, dịch vụ hoặc sự kiện đặc biệt của mình.
                  </p>
                </Card>
              </Row>
              <Row>
                <Card
                  style={{
                    marginTop: 68,
                    width: "100%",
                    border: "none",
                    textAlign: "start",
                  }}
                >
                  <h4 className="heading4-paragraph">
                    Phân loại sản phẩm theo nhóm{" "}
                  </h4>
                  <p className="paragraph-content">
                    Quý khách hàng có thể phân loại thông tin. Các nhóm sản phẩm
                    cũng có thể thêm, sửa, xóa, đổi vị trí một cách dễ dàng.
                  </p>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Feature;
