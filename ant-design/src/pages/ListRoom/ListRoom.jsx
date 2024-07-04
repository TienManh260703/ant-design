import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomService";
import { Button, Tooltip } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import webSocketService from "../../utils/WebSocketService";
import RoomGird from "./RoomGird";
import RoomTable from "./RoomTable";

function ListRoom() {
  const [rooms, setRooms] = useState([]);
  const [isGird, setGird] = useState(true);

  const fetchApi = async () => {
    const reponse = await getListRoom();
    //   console.log(reponse);
    setRooms(reponse);
  };

  useEffect(() => {
    fetchApi();

    // Kết nối tới WebSocket server khi component được mount
    webSocketService.connect();

    // Đăng ký để lắng nghe thông báo từ topic "/topic/rooms"
    webSocketService.subscribe("/topic/rooms", (message) => {
      console.log("Received message from server:", message.body);
      fetchApi();
    });

    // Cleanup khi component bị unmount
    return () => {
      webSocketService.unsubscribe("/topic/rooms");
      webSocketService.disconnect();
    };
  }, []);

  const handleReload = () => {
    fetchApi();
  };
  console.log(rooms);

  return (
    <>
      <Tooltip title="Hiển thị dang Grid" color="grey" placement="left">
        <Button onClick={() => setGird(true)}>
          <UnorderedListOutlined />
        </Button>
      </Tooltip>
      <Tooltip
        overlayClassName="Định nghĩa class name"
        title="Hiển thị dạng Table"
        color="grey"
        placement="right"
      >
        <Button onClick={() => setGird(false)}>
          <AppstoreOutlined />
        </Button>
      </Tooltip>

      {isGird ? (
        <>
          <RoomGird rooms={rooms} />
        </>
      ) : (
        <>
          <RoomTable rooms={rooms} onReload={handleReload} />
        </>
      )}
    </>
  );
}

export default ListRoom;
