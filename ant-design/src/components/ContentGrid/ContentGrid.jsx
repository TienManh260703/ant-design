import { Carousel, Col, Row } from "antd";
import CardItem from "../CardItem/CardItem";
import "./ContentGrid.css";
// link giao diện : https://enlink.themenate.net/dashboard/default
function ContentGird() {
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
    </>
  );
}
export default ContentGird;
