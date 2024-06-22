import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomService";
import { Button, Tooltip } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
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
