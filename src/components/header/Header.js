import { Link, Outlet } from "react-router-dom"
import { PageHeader } from 'antd';

const Header = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Projects Network"
        subTitle="Work on your projects together!"
      />
      <Outlet />
    </>
  )
}

export default Header
