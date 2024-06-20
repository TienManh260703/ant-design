import { Button, Table, Tag } from "antd";
import ButtonDelete from "./ButtonDelete";

function RoomList(props) {
  const { rooms } = props;
  const columns = [
    {
      title: "Tên phòng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số giường",
      dataIndex: "quantity_bed",
      key: "quantity_bed",
    },
    {
      title: "Số người",
      dataIndex: "quantity_people",
      key: "quantity_people",
    },
    {
      title: "Dịch vụ",
      dataIndex: "utils",
      key: "utils",
      render: (_, { utils }) => (
        <>
          {utils.map((util) => {
            return <Tag key={util}>{util}</Tag>;
          })}
        </>
      ),
    },
    {
      title: "Loại phòng",
      dataIndex: "type_room",
      key: "type_room",
      render: (_, { type_room }) => (
        <>
          {type_room ? (
            <Tag color="gold" key={type_room}>
              VIP
            </Tag>
          ) : (
            <Tag color="processing" key={type_room}>
              Thường
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => (
        <>
          {status ? (
            <Tag color="success" key={status}>
              Hoạt động
            </Tag>
          ) : (
            <Tag color="error" key={status}>
              Tạm ngưng
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Aciton",
      key: "action",
      render: (_, recoder) => <ButtonDelete recoder={recoder} />,
    },
  ];
  return (
    <>
      <Table dataSource={rooms} columns={columns} rowKey="id"></Table>
    </>
  );
}

export default RoomList;
