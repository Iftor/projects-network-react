import {Link, Outlet} from 'react-router-dom';
import {Breadcrumb, Layout} from 'antd';
import Navbar from "./Navbar";
import { checkAuthenticated } from '../../actions/auth';
import {connect} from "react-redux";
import {useEffect} from "react";
const { Header, Content, Footer } = Layout;

const PageLayout = ({ checkAuthenticated }) => {
  useEffect(() => {
    checkAuthenticated();
  }, [])

  return (
    <Layout className="layout">
      <Header>
        <Navbar/>
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
          <Outlet/>
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
  )
};

export default connect(null, { checkAuthenticated })(PageLayout);
