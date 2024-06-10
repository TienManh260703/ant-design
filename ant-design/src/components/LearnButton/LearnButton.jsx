import { Button } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { useState } from "react";

function LearnButton() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    // fetch owr đây VD : cho việc call api bằng setTimeout
    setTimeout(() => {
      const result = {
        code: 200,
        data: [],
      };
      if (result && result.code === 200) {
        setLoading(false);
      }
    }, 3000);
  };
  return (
    <>
      <Button
        danger={true}
        loading={loading}
        // disabled={loading}
        type="dashed"
        onClick={handleClick}
        href="https://ant.design/components/button"
        icon={<CaretLeftOutlined rotate={45} spin={true} />}
      >
        Nội dung
      </Button>
    </>
  );
}

export default LearnButton;
