import { Card, Col, Row } from "antd";
import "../assets/css/news.css";
const News = () => {
  return (
    <div className="container-news">
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Row
            style={{
              marginBottom: 40,
            }}
          >
            <Col span={8}>
              <Row>
                <h3 className="heading-news">Bài viết mới nhất</h3>
              </Row>
              <Row>
                <p className="paragraph-news">
                  Nơi những khách hàng của TrueConnect cập nhật những tin tức
                  mới nhất về thị trường công nghệ
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="img-one-container" span={12}>
              <div className="container-img">
                <img
                  className="img-news-one"
                  src="./src/assets/news1.jpg"
                  alt=""
                />
                <div className="content-img-one">
                  <h4 className="heading-news-img">
                    Event On A Budget: 7 Tips From The Great Depression
                  </h4>
                  <p className="paragraph-news-img">
                    Aenean viverra rhoncus pede. Phasellus blandit leo ut odio.
                    Pellentesque commodo eros a enim. Phasellus consectetuer
                    vestibulum elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              style={{
                paddingLeft: 16,
              }}
              span={6}
            >
              <Card
                style={{
                  marginBottom: 16,
                }}
                hoverable
                cover={
                  <img
                    style={{
                      margin: 0,
                      width: "100%",
                      height: 264,
                    }}
                    src="./src/assets/new2.jpg"
                  />
                }
              >
                <p
                  style={{
                    opacity: 0.7,
                    color: "#919EAB",
                    paddingBottom: 6,
                  }}
                >
                  24 May 2019 - 8 mins
                </p>
                <h4>Apply These 7 Secret Techniques To Improve Event</h4>
              </Card>
              <Card
                hoverable
                cover={
                  <img
                    style={{
                      margin: 0,
                      width: "100%",
                      height: 198,
                    }}
                    src="./src/assets/news4.jpg"
                  />
                }
              >
                <p
                  style={{
                    opacity: 0.7,
                    color: "#919EAB",
                    paddingBottom: 6,
                  }}
                >
                  24 May 2019 - 8 mins
                </p>
                <h4>
                  Knowing These 7 Secrets Will Make Your Event Look Amazing
                </h4>
              </Card>
            </Col>
            <Col
              style={{
                paddingLeft: 16,
              }}
              span={6}
            >
              <Card
                style={{
                  marginBottom: 16,
                }}
                hoverable
                cover={
                  <img
                    style={{
                      margin: 0,
                      width: "100%",
                      height: 198,
                    }}
                    src="./src/assets/news3.jpg"
                  />
                }
              >
                <p
                  style={{
                    opacity: 0.7,
                    color: "#919EAB",
                    paddingBottom: 6,
                  }}
                >
                  24 May 2019 - 8 mins
                </p>
                <h4>Event Doesn't Have To Be Hard. Read These 7 Tips</h4>
              </Card>
              <Card
                hoverable
                cover={
                  <img
                    style={{
                      margin: 0,
                      width: "100%",
                      height: 264,
                    }}
                    src="./src/assets/news5.jpg"
                  />
                }
              >
                <p
                  style={{
                    opacity: 0.7,
                    color: "#919EAB",
                    paddingBottom: 6,
                  }}
                >
                  24 May 2019 - 8 mins
                </p>
                <h4>Don't Waste Time! 7 Facts Until You Reach Your Event</h4>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default News;
