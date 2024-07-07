import { DeleteOutlined } from "@ant-design/icons";
import { Button, notification, Popconfirm } from "antd";
import { deletedCoupons } from "../../service/phieuGiamGiaService";

function ButtonDelete(props) {
  const { recoder, onReload } = props;

  const handleDelete = async () => {
    console.log(recoder.id);
    const response = await deletedCoupons(recoder.id);
    if (response) {
      notification.success({
        message: "Xóa thành công",
        description: `Thông tin : ${response.ma}`,
        showProgress: true,
        duration: 2,
      });
      onReload();
    } else {
      notification.success({
        message: "Thất Bại",
        description: `Thông tin : ${response.ma}`,
        showProgress: true,
        duration: 2,
      });
    }
  };
  return (
    <>
      <Popconfirm title="Bạn có muốn xóa ?" onConfirm={handleDelete}>
        <Button
          disabled={recoder.trangThai === 0 ? true : false}
          danger
          size="small"
          icon={<DeleteOutlined />}
        />
      </Popconfirm>
    </>
  );
}

export default ButtonDelete;
