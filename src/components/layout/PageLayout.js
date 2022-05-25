import {Link, Outlet} from 'react-router-dom';
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import AuthenticationModal from "../auth/authentication/AuthenticationModal";
const { Header, Content, Footer } = Layout;

const PageLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <AuthenticationModal />
      <Link to="registration" style={{marginRight: 20}}>
        <Button type="primary">Sign up</Button>
      </Link>
      <Button type="primary">
        <Link to="communities">Communities</Link>
      </Button>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
      </Breadcrumb>
      <div className="site-layout-content">
        <Outlet />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      SUD ©2022 Created by MIREA
    </Footer>
  </Layout>
);

export default PageLayout;
