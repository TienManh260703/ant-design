import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomService";
import { Button } from "antd";
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
      <Button onClick={() => setGird(true)}>
        <UnorderedListOutlined />
      </Button>
      <Button onClick={() => setGird(false)}>
        <AppstoreOutlined />
      </Button>
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
