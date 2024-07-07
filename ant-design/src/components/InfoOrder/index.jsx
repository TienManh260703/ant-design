import { Row, Col, Card, Form, Input } from "antd";
const InforOrder = ({ data }) => {
  const { tienHang, phiVanChuyen } = data;
  return (
    <>
      <Card>
        <Row gutter={[10, 10]}>
          <Col
            style={{
              display: "flex",
              justifyContent: "start",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            Tiền hàng
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            {tienHang} VND
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "start",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            Phí vận chuyển
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            {phiVanChuyen} VND
          </Col>

          <Col
            style={{
              display: "flex",
              justifyContent: "start",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            Giảm giá
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            100000 VND
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "start",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            Tổng tiền
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            100000 VND
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "start",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            Khách hành thanh toán
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            100000 VND
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "start",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            Tiền thiếu
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
            }}
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            100000 VND
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default InforOrder;
