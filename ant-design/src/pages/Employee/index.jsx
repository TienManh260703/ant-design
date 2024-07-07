import { useState } from "react";
import EmployeeTable from "../../components/EmployeeTable";
import FormEmployee from "../../components/FormEmployee";
import { Button, Col, Modal, Row } from "antd";

function EmployeePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row>
        <Col>
          <Button type="primary" onClick={showModal}>
            Add
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <EmployeeTable />
        </Col>
      </Row>
      <Modal
        footer={null}
        width={1000}
        title="Thông tin nhân viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormEmployee />
      </Modal>
    </>
  );
}
export default EmployeePage;
