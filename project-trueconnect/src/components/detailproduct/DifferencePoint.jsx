import "../../assets/css/difference.css";
import { Card, Col, Row } from "antd";
import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";

const DifferencePoint = () => {
  return (
    <div className="container-difference">
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Row>
            <h3 className="heading-difference">
              Điểm khác biệt của TrueConnect
            </h3>
          </Row>
          <Row
            style={{
              height: "30%",
            }}
          >
            <Col span={14} />
            <Col
              style={{
                width: "100%",
              }}
              span={4}
            >
              <span>Sản phẩm khác </span>
            </Col>
            <Col
              style={{
                width: "100%",
              }}
              span={4}
            >
              <span>TrueConnect </span>
            </Col>
          </Row>
          <Row>
            <Col span={14}>
              <Card
                style={{
                  border: "none",
                  width: "100%",
                }}
              >
                <ul
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <li className="list-content">
                    Xây dựng website bán hàng trực tuyến
                  </li>
                  <li className="list-content">
                    Phân loại thông tin/sản phẩm theo danh mục
                  </li>
                  <li className="list-content">Đăng tải bài viết/sản phẩm</li>
                  <li className="list-content">
                    Tạo Landing page ngay trên chiếc điện thoại của mình
                  </li>
                  <li className="list-content">
                    Cập nhật thông tin trạng thái sản phẩm
                  </li>
                  <li className="list-content">
                    Quản lý bài đăng/ Quản lý đơn hàng
                  </li>
                  <li className="list-content">
                    Hỗ trợ xây dựng mạng lưới khách hàng,mạng lưới cộng đồng
                  </li>
                </ul>
              </Card>
            </Col>
            <Col span={4}>
              <ul
                style={{
                  paddingTop: 24,
                }}
              >
                <li className="li-icon1">
                  <CloseOutlined
                    style={{
                      marginBottom: 1,
                      color: "#FF0054",
                    }}
                  />
                </li>
                <li className="li-icon1">
                  <CloseOutlined
                    style={{
                      marginBottom: 1,
                      color: "#FF0054",
                    }}
                  />
                </li>
                <li className="li-icon1">
                  <CloseOutlined
                    style={{
                      marginBottom: 1,
                      color: "#FF0054",
                    }}
                  />
                </li>
                <li className="li-icon1">
                  <CloseOutlined
                    style={{
                      marginBottom: 1,
                      color: "#FF0054",
                    }}
                  />
                </li>
                <li className="li-icon1">
                  <CloseOutlined
                    style={{
                      marginBottom: 1,
                      color: "#FF0054",
                    }}
                  />
                </li>
                <li className="li-icon1">
                  <CloseOutlined
                    style={{
                      marginBottom: 1,
                      color: "#FF0054",
                    }}
                  />
                </li>
                <li className="li-icon1">
                  <CloseOutlined
                    style={{
                      color: "#FF0054",
                    }}
                  />
                </li>
              </ul>
            </Col>
            <Col span={4}>
              <ul
                style={{
                  paddingTop: 24,
                }}
              >
                <li className="li-icon2">
                  <CheckCircleOutlined
                    style={{
                      marginBottom: 1,
                      backgroundColor: "#0DC5AE",
                      color: "#fff",
                      borderRadius: 12,
                    }}
                  />
                </li>
                <li className="li-icon2">
                  <CheckCircleOutlined
                    style={{
                      marginBottom: 1,
                      backgroundColor: "#0DC5AE",
                      color: "#fff",
                      borderRadius: 12,
                    }}
                  />
                </li>
                <li className="li-icon2">
                  <CheckCircleOutlined
                    style={{
                      marginBottom: 1,
                      backgroundColor: "#0DC5AE",
                      color: "#fff",
                      borderRadius: 12,
                    }}
                  />
                </li>
                <li className="li-icon2">
                  <CheckCircleOutlined
                    style={{
                      marginBottom: 1,
                      backgroundColor: "#0DC5AE",
                      color: "#fff",
                      borderRadius: 12,
                    }}
                  />
                </li>
                <li className="li-icon2">
                  <CheckCircleOutlined
                    style={{
                      marginBottom: 1,
                      backgroundColor: "#0DC5AE",
                      color: "#fff",
                      borderRadius: 12,
                    }}
                  />
                </li>
                <li className="li-icon2">
                  <CheckCircleOutlined
                    style={{
                      marginBottom: 1,
                      backgroundColor: "#0DC5AE",
                      color: "#fff",
                      borderRadius: 12,
                    }}
                  />
                </li>
                <li className="li-icon2">
                  <CheckCircleOutlined
                    style={{
                      backgroundColor: "#0DC5AE",
                      color: "#fff",
                      borderRadius: 12,
                    }}
                  />
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DifferencePoint;
