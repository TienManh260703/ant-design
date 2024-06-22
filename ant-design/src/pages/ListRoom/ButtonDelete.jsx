import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { deletedRoom } from "../../service/roomService";

function ButtonDelete(props) {
  const { recoder, onReload } = props;

  const handleDelete = async () => {
    console.log(recoder.id);
    const response = await deletedRoom(recoder.id);
    if (response) {
      onReload();
      alert("Xóa bản ghi thành công");
    } else {
      alert("Xóa bản ghi không thành công");
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
