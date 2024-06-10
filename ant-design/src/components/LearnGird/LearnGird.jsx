import { Col, Row } from "antd";

import "./LearnGird.css";
function LearnGird() {
  return (
    <>
      <Row gutter={[10, 20]}>
        {/*gutter khoảng cách giữa các cột đơn vị px gutter={10} cách cột : gutter={[10, 20]} cột và hàng */}
        {/* xử dụng xs , sm , md , lg , xl không nên xử dung span vì fig cứng */}
        <Col xxl={2} xl={2} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cột 1</div>
        </Col>
        <Col xxl={5} xl={10} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cột 2</div>
        </Col>
        <Col xxl={7} xl={8} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cột 3</div>
        </Col>
        <Col xxl={10} xl={4} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cột 4</div>
        </Col>
      </Row>
    </>
  );
}
export default LearnGird;
