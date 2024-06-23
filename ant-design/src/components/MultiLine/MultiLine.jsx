import { Line } from "@ant-design/plots";
import axios from "axios";
import { useEffect, useState } from "react";
function MultiLine() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await axios.get("http://localhost:3000/multi-line");
        setDataChart(response.data);
        console.log("Data mulyi:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    callApi();
  }, []);

  const config = {
    data: dataChart,
    xField: "year",
    yField: "value",
    smooth: true,
    // point: true,
    slider: {
      start: 0,
      end: 1,
    },
    seriesField: "category",
  };
  //   Chưa đổi đc màu cho các line
  return (
    <>
      <div className="item">
        <Line {...config}></Line>
      </div>
    </>
  );
}

export default MultiLine;
