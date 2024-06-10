import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
function LayoutDefault() {
  return (
    <>
      <Layout className="layout-default">
        <header className="header">Header</header>
        <Layout>
          <Sider className="sider">Sider</Sider>
          <Content className="content">Content</Content>
        </Layout>
        <Footer className="footer">Forter</Footer>
      </Layout>
    </>
  );
}

export default LayoutDefault;
