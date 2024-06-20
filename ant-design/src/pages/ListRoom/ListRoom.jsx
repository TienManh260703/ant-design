import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomService";
import { Button } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import RoomGird from "./RoomGird";
import RoomList from "./RoomList";

function ListRoom() {
  const [rooms, setRooms] = useState([]);
  const [isGird, setGird] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      const reponse = await getListRoom();
      //   console.log(reponse);
      setRooms(reponse);
    };
    fetchApi();
  }, []);

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
          <RoomList rooms={rooms} />
        </>
      )}
    </>
  );
}

export default ListRoom;
