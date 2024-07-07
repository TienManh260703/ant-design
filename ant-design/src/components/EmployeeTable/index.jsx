import { Table, Tag, Tooltip } from "antd";

function EmployeeTable(props) {
  const { rooms, onReload } = props;

  const columns = [
    {
      title: "STT",
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
            <>
              <Tooltip title="Phòng VIP chuẩn 5 sao" color="yellow">
                <Tag color="gold" key={type_room}>
                  VIP
                </Tag>
              </Tooltip>
            </>
          ) : (
            <Tooltip
              title="Phòng thường chuẩn 3 sao"
              placement="topLeft"
              color="blue"
            >
              <Tag color="processing" key={type_room}>
                Thường
              </Tag>
            </Tooltip>
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
            <>
              <Tooltip title="Chưa có khách đặt" color="green">
                <Tag color="success" key={status}>
                  Còn phòng
                </Tag>
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Phòng đã có khách đặt" color="red">
                <Tag color="error" key={status}>
                  Hết phòng
                </Tag>
              </Tooltip>
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
      <Table dataSource={rooms} columns={columns} rowKey="id"></Table>
    </>
  );
}

export default EmployeeTable;
