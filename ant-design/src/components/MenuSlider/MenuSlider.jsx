import { Menu } from "antd";
import {
  SendOutlined,
  SoundOutlined,
  CameraOutlined,
  BulbOutlined,
  BugOutlined,
} from "@ant-design/icons";
function MenuSlider() {
  const items = [
    {
      label: "Menu 1",
      icon: <SendOutlined />,
      key: "menu-1",
      children: [
        {
          label: "Menu 1 - 1",
          icon: <CameraOutlined />,
          key: "menu-1-1",
        },
        {
          label: "Menu 1 - 2",
          icon: <BulbOutlined />,
          key: "menu-1-2",
          // danger: true,
        },
      ],
    },
    {
      label: "Menu 2",
      key: "menu-2",
      icon: <CameraOutlined />,
      children: [
        {
          label: "Menu 2 - 1",
          key: "menu-2-1",
        },
        {
          label: "Menu 2 - 2",
          key: "menu-2-2",
        },
      ],
    },
    {
      label: "Menu 3",
      key: "menu-3",
      icon: <BulbOutlined />,
    },
    {
      label: "Menu 4",
      key: "menu-4",
      icon: <SoundOutlined />,
    },
    {
      label: "Menu 5",
      key: "menu-5",
      icon: <BugOutlined />,
    },
  ];
  return (
    // items : Danh sách menu hiển thị
    // mode : inline => xổ xuống : vertical => hiển thị bên phải : horizontal => hình như dàn hàng ngang menu chính menu xổ xuống
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={["menu-1-1"]} // active
        defaultOpenKeys={["menu-1"]} // Tự mở
      />
    </>
  );
}
export default MenuSlider;
