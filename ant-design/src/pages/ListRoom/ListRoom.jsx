import { useEffect, useState } from "react";
import { getListRoom } from "../../service/roomService";
import { Card, Row, Col, Badge, Tag, Carousel } from "antd";

function ListRoom() {
  const [rooms, setRooms] = useState([]);

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
      <Row gutter={[20, 20]}>
        {rooms.map((item) => (
          <Col key={item.id} xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <Badge.Ribbon
              text={item.type_room ? "VIP" : "Thường"}
              color={item.type_room ? "red" : "gray"}
            >
              <Card
                title={item.name}
                cover={
                  <Carousel arrows infinite={false}>
                    {item.utils.map((utility, index) => (
                      <img
                        key={index}
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    ))}
                  </Carousel>
                }
              >
                <p>
                  Số giường : <strong> {item.quantity_bed}</strong>
                </p>
                <p>
                  Số người : <strong> {item.quantity_bed}</strong>
                </p>
                Dịch vụ :
                <p>
                  {item.utils.map((utility, index) => (
                    <Tag key={index}>{utility}</Tag>
                  ))}
                </p>
                <p>
                  {item.status ? (
                    <Badge status="success" text="Còn phòng" />
                  ) : (
                    <Badge status="error" text="Hết phòng" />
                  )}
                </p>
                <p>Mô tả : {item.description}</p>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ListRoom;
