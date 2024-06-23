import { Col, Row } from "antd";
import BasicLine from "../../components/BasicLine/BasicLine";
import CardItem from "../../components/CardItem/CardItem";
import MultiLine from "../../components/MultiLine/MultiLine";

function Charts() {
  return (
    <>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={15} xl={15} lg={15} md={15} sm={24} xs={24}>
          <BasicLine />
        </Col>
        <Col xxl={9} xl={9} lg={9} md={9} sm={24} xs={24}>
          <CardItem style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
          <MultiLine />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
          <CardItem style={{ height: "400px" }} />
        </Col>
      </Row>
    </>
  );
}

export default Charts;
