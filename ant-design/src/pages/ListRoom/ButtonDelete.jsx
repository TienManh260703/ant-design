import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm, message } from "antd";
import { deletedRoom } from "../../service/roomService";

function ButtonDelete(props) {
  const { recoder, onReload } = props;

  const handleDelete = async () => {
    console.log(recoder.id);
    const response = await deletedRoom(recoder.id);
    if (response) {
      onReload();
      message.success("Xóa bản ghi thành công");
    } else {
      message.error("Xóa bản ghi thất bại");
    }
  };
  return (
    <>
      <Popconfirm title="Bạn có muốn xóa ?" onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined />} />
      </Popconfirm>
    </>
  );
}

export default ButtonDelete;
