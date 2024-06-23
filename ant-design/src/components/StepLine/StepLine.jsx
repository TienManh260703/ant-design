import { Line } from "@ant-design/plots";
import axios from "axios";
import { useEffect, useState } from "react";

function StepLine() {
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
    // smooth: true,
    // point: true,
    // slider: {
    //   start: 0,
    //   end: 1,
    // },
    stepType: "hv",
  };

  return (
    <>
      <div className="item">
        <Line {...config} />
      </div>
    </>
  );
}

export default StepLine;
