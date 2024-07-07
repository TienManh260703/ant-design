import { Table, Tag, Tooltip } from "antd";

function PGGTable(props) {
  const { listPhieuGiamGia, onReload } = props;

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
    },
    {
      title: "Mã phiếu",
      dataIndex: "ma",
      key: "ma",
    },
    {
      title: "Tên phiếu",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Loại giảm giá",
      dataIndex: "loaiGiamGia",
      key: "loaiGiamGia",
    },
    {
      title: "Phạm vi",
      dataIndex: "phamViApDung",
      key: "phamViApDung",
    },
    {
      title: "Giá trị giảm",
      dataIndex: "giaTriGiamGia",
      key: "giaTriGiamGia",
    },
    {
      title: "Giá trị đơn tối thiểu",
      dataIndex: "giaTriDonToiThieu",
      key: "giaTriDonToiThieu",
    },
    {
      title: "Giảm tối đa",
      dataIndex: "giamToiGia",
      key: "giamToiGia",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "ngayBatDau",
      key: "ngayBatDau",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "ngayHetHan",
      key: "ngayHetHan",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
      render: (_, { trangThai }) => (
        <>
          {trangThai == 0 ? (
            <>
              <Tag color="success" key={trangThai}>
                Đang áp dụng
              </Tag>
            </>
          ) : (
            <>
              <Tag color="error" key={trangThai}>
                Ngưng
              </Tag>
            </>
          )}
        </>
      ),
    },
    {
      title: "Aciton",
      key: "action",
      render: (_, recoder) => (
        <>
          {/* <ButtonDelete recoder={recoder} onReload={onReload} />
              <EditRoom recoder={recoder} onReload={onReload} /> */}
        </>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={listPhieuGiamGia} columns={columns} rowKey={"id"} />
    </>
  );
}

export default PGGTable;
