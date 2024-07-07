import { Button, Col, Modal, notification, Pagination, Row } from "antd";
import FormPGG from "../../components/FormPGG";
import { useEffect, useState } from "react";
import PGGTable from "../../components/PGGTable";
import { getPGGPage } from "../../service/phieuGiamGiaService";

function PGGPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listPhieuGiamGia, setListPhieuGiamGia] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const fetchApi = async (page = currentPage, size = size) => {
    const response = await getPGGPage(page, size);
    console.log("API Response:", response);

    if (response.status_code === 200) {
      setListPhieuGiamGia(response.data.result);
      setCurrentPage(response.data.meta.page + 1);
      setSize(response.data.meta.pageSize);
      setTotalItems(response.data.meta.total);
    } else {
      notification.error({
        message: "Error",
        description: "Failed to fetch data from API",
      });
    }
  };

  useEffect(() => {
    fetchApi(currentPage, size);
  }, [currentPage, size]);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setSize(pageSize);
  };

  const handleReload = () => {
    fetchApi(currentPage, size);
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
        <Col
          style={{
            marginTop: "10px",
          }}
        >
          <Pagination
            current={currentPage}
            pageSize={size}
            total={totalItems}
            onChange={handlePageChange}
            showSizeChanger
            pageSizeOptions={["5", "10", "20"]}
          />
        </Col>
      </Row>
      <Modal
        footer={null}
        width={1300}
        title="Thông tin phiếu giảm giá"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col>
            <FormPGG cancel={handleCancel} onReload={handleReload} />
          </Col>
          <Col></Col>
        </Row>
      </Modal>
    </>
  );
}

export default PGGPage;
