import { Menu } from "antd";
import {
  SendOutlined,
  SoundOutlined,
  CameraOutlined,
  BulbOutlined,
  BugOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
function MenuSlider() {
  const items = [
    {
      label: "Menu 1",
      icon: <SendOutlined />,
      key: "menu-1",
      children: [
        {
          label: <Link to="/">Dashboard</Link>,
          icon: <CameraOutlined />,
          key: "/",
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
      label: <Link to="/book-room">Book Room</Link>,
      key: "/book-room",
      icon: <BugOutlined />,
    },
    {
      label: <Link to="/create-room">Create Room</Link>,
      key: "/create-room",
      icon: <PlusCircleOutlined />,
    },
  ];
  return (
    // items : Danh sách menu hiển thị
    // mode : inline => xổ xuống : vertical => hiển thị bên phải : horizontal => hình như dàn hàng ngang menu chính menu xổ xuống
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={["/"]} // active
        defaultOpenKeys={["menu-1"]} // Tự mở
      />
    </>
  );
}
export default MenuSlider;
