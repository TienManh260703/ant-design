import { Form, DatePicker, Button } from "antd";
import { useEffect } from "react";
import { getSP } from "../../service/sanPhamService";
const { RangePicker } = DatePicker;
function TestDate() {
  const handleSubmit = (data) => {
    const [start_day, end_day] = data["all-date"] || [];
    const values = {
      start_day: start_day ? start_day.format("YYYY-MM-DDTHH:mm:ss") : null,
      end_day: end_day ? end_day.format("YYYY-MM-DDTHH:mm:ss") : null,
    };
    console.log(values);
  };
  const validateDates = (_, value) => {
    if (!value || value.length !== 2 || !value[0] || !value[1]) {
      return Promise.reject(new Error("Chọn ngày bắt đầu và ngày kết thúc"));
    }
    const [start_day, end_day] = value;
    if (start_day.valueOf() >= end_day.valueOf()) {
      return Promise.reject(
        new Error("Ngày kết thúc phải lơn hơn ngày bắt đầu")
      );
    }
    return Promise.resolve();
  };
  /// demo call api SP
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSP("/api/san-pham/");
        console.log("GET response:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Form name="all-date" onFinish={handleSubmit}>
        <Form.Item name={"all-date"} rules={[{ validator: validateDates }]}>
          <RangePicker
            showTime={true}
            placeholder={["Ngày đến", "Ngày đi"]}
            format={"YYYY-MM-DDTHH:mm:ss"}
          ></RangePicker>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default TestDate;
