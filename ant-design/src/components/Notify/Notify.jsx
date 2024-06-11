import { Dropdown, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.css";
function Notify() {
  const items = [
    {
      label: (
        <div className="notify__item">
          <div className="notify__item-icon">
            <BellOutlined />
          </div>
          <div className="notify__item-content">
            <div className="notify__item-title">Item 1</div>
            <div className="notify__item-time">8 phút trước </div>
          </div>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item-icon">
            <BellOutlined />
          </div>
          <div className="notify__item-content">
            <div className="notify__item-title">Item 1</div>
            <div className="notify__item-time">8 phút trước </div>
          </div>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item-icon">
            <BellOutlined />
          </div>
          <div className="notify__item-content">
            <div className="notify__item-title">Item 1</div>
            <div className="notify__item-time">8 phút trước </div>
          </div>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item-icon">
            <BellOutlined />
          </div>
          <div className="notify__item-content">
            <div className="notify__item-title">Item 1</div>
            <div className="notify__item-time">8 phút trước </div>
          </div>
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item-icon">
            <BellOutlined />
          </div>
          <div className="notify__item-content">
            <div className="notify__item-title">Item 1</div>
            <div className="notify__item-time">8 phút trước </div>
          </div>
        </div>
      ),
      key: (
        <div className="notify__item">
          <div className="notify__item-icon">
            <BellOutlined />
          </div>
          <div className="notify__item-content">
            <div className="notify__item-title">Item 1</div>
            <div className="notify__item-time">8 phút trước </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      {/* menu : chuyền vào 1 arr để hiển thị menu */}
      {/* trigger : chuyền vào sự kiện */}
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        dropdownRender={(menus) => (
          <>
            <div className="notify__dropdown">
              <div className="notify___header">
                <div className="notify___header-title">
                  <BellOutlined />
                  Notification
                </div>
                <Button type="link">View all</Button>
              </div>
              <div className="notify___body">{menus}</div>
            </div>
          </>
        )}
      >
        <Button type="text" icon={<BellOutlined />}></Button>
      </Dropdown>
    </>
  );
}

export default Notify;
