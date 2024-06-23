import { Line } from "@ant-design/plots";
import axios from "axios";
import { useEffect, useState } from "react";
import "./BasicLine.css";
function BasicLine() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await axios.get("http://localhost:3000/basic-line");
        setDataChart(response.data);
        console.log("Data fetched:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    callApi();
  }, []);

  const config = {
    data: dataChart,
    xField: "date",
    yField: "quantity",
    // autoFit : false,
    // height: 395,
    smooth: true,
    point: true,
    slider: {
      start: 0,
      end: 1,
    },
  };
  console.log("Rendered dataChart:", dataChart);
  return (
    <>
      <div className="item">
        <Line {...config} />
      </div>
    </>
  );
}

export default BasicLine;
