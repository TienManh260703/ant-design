import { Layout } from "antd";
import {
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./LayoutDefault.css";
import logo from "../../assets/logo.png";
import logoFold from "../../assets/logo-fold.png";
import Notify from "../../components/Notify/Notify";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import { Outlet } from "react-router-dom";

const { Footer, Sider, Content } = Layout;

function LayoutDefault() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className="layout-default">
        <header className="header">
          <div
            className={
              "header__logo " + (collapsed && "header__logo--collapsed")
            }
          >
            <img src={collapsed ? logoFold : logo} alt="logo" />
          </div>
          <div className="header__nav">
            <div className="header__nav-left">
              <div
                className="header__collapse"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav-right">
              <Notify />
            </div>
          </div>
        </header>
        <Layout>
          <Sider className="sider" collapsed={collapsed} theme="light">
            <MenuSlider />
          </Sider>
          <Content className="content">
            {/* <ContentGird /> */}
            <Outlet />
          </Content>
        </Layout>
        <Footer className="footer">Forter</Footer>
      </Layout>
    </>
  );
}

export default LayoutDefault;
