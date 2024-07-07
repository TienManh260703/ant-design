import { Button, Col, Modal, notification, Row } from "antd";
import FormPGG from "../../components/FormPGG";
import { useEffect, useState } from "react";
import PGGTable from "../../components/PGGTable";
import { getPGGPage } from "../../service/phieuGiamGiaService";

function PGGPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listPhieuGiamGia, setListPhieuGiamGia] = useState([]);

  const fetchApi = async () => {
    const response = await getPGGPage();
    console.log("API Response:", response);
    if (response.status_code === 200) {
      setListPhieuGiamGia(response.data.result);
    } else {
      notification.error({
        message: "Error",
        description: "Api get dach sách lỗi",
      });
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

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
      <Row
        style={{
          marginTop: "20px",
        }}
      >
        <Col span={24}>
          <PGGTable
            listPhieuGiamGia={listPhieuGiamGia}
            onReload={handleReload}
          />
        </Col>
      </Row>
      <Modal
        footer={null}
        width={1200}
        title="Thông tin phiếu giảm giá"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col>
            <FormPGG />
          </Col>
          <Col></Col>
        </Row>
      </Modal>
    </>
  );
}

export default PGGPage;
