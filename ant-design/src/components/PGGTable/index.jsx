import { Table, Tag, Tooltip } from "antd";
import ButtonDelete from "../../pages/PGG/ButtonDelete";
import FormPGG from "../FormPGG";
import FormPGG2 from "../../pages/PGG/TestFormEdit";

function PGGTable(props) {
  const { listPhieuGiamGia, onReload } = props;
  let sttCounter = 0;

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
      render: () => {
        sttCounter += 1;
        return <span>{sttCounter}</span>;
      },
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
      render: (_, { loaiGiamGia }) => (
        <>
          {loaiGiamGia == 1 ? (
            <>
              <Tag color="magenta" key={loaiGiamGia}>
                %
              </Tag>
            </>
          ) : (
            <>
              <Tag key={loaiGiamGia}>VND</Tag>
            </>
          )}
        </>
      ),
    },
    {
      title: "Phạm vi",
      dataIndex: "phamViApDung",
      key: "phamViApDung",
      render: (_, { phamViApDung }) => (
        <>
          {phamViApDung == 1 ? (
            <>
              <Tag color="gold" key={phamViApDung}>
                Hệ thống
              </Tag>
            </>
          ) : (
            <>
              <Tag color="cyan" key={phamViApDung}>
                Công khai
              </Tag>
            </>
          )}
        </>
      ),
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
          {trangThai != 0 ? (
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
          <ButtonDelete recoder={recoder} onReload={onReload} />
          {/* <EditRoom recoder={recoder} onReload={onReload} /> */}
          <FormPGG2 recoder={recoder} onReload={onReload} />
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        pagination={false}
        dataSource={listPhieuGiamGia}
        columns={columns}
        rowKey={"id"}
      />
    </>
  );
}

export default PGGTable;
