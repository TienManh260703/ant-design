import { Carousel, Col, Row, Collapse, Image } from "antd";
import CardItem from "../CardItem/CardItem";
import "./ContentGrid.css";

const { Panel } = Collapse;
// link giao diện : https://enlink.themenate.net/dashboard/default
function ContentGird() {
  const list = [
    {
      id: 1,
      title: "Logo 1 là gì",
      description: "Mô tả 1",
    },
    {
      id: 2,
      title: "Logo 2 là gì",
      description: "Mô tả 2",
    },
    {
      id: 3,
      title: "Logo 3 là gì",
      description: "Mô tả 3",
    },
    {
      id: 4,
      title: "Logo 4 là gì",
      description: "Mô tả 4",
    },
    {
      id: 5,
      title: "Logo 5 là gì",
      description: "Mô tả 5",
    },
  ];
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 4" />
        </Col>
      </Row>
      {/*  */}
      <Row gutter={[20, 20]} className="mt-20">
        {/* Total Revenue  */}
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box 5" style={{ height: "400px" }} />
        </Col>
        {/* Customers  */}
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 6" style={{ height: "400px" }} />
        </Col>
      </Row>
      {/*  */}
      <Row gutter={[20, 20]} className="mt-20">
        {/* Avg.Profit */}
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 7" style={{ height: "400px" }} />
        </Col>
        {/* Top Product */}
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>
      {/*  */}
      <Row gutter={[20, 20]} className="mt-20">
        {/* Latest Upload */}
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 9" style={{ height: "400px" }} />
        </Col>
        {/* Activity */}
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 10" style={{ height: "400px" }} />
        </Col>
        {/* Task */}
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Carousel
        arrows
        autoplay={true}
        dotPosition="bottom"
        dots={true}
        effect="fade"
      >
        {/* Mặc định
        dotPosition="bottom"
        dots={true} */}
        <div className="slider-item">1</div>
        <div className="slider-item">2</div>
        <div className="slider-item">3</div>
        <div className="slider-item">4</div>
        <div className="slider-item">5</div>
      </Carousel>

      <Collapse defaultActiveKey={[1]} accordion={true}>
        {list.map((item) => (
          <Panel header={item.title} key={item.id}>
            {item.description}
          </Panel>
        ))}
      </Collapse>

      <Image
        width={200}
        src="data:image/jpeg;base64,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"
      ></Image>
    </>
  );
}
export default ContentGird;
