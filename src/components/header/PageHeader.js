import { Link, Outlet } from "react-router-dom"

const PageHeader = () => {
  return (
    <>
      <Link to="/projects">Проекты</Link>
      <Outlet />
    </>
  )
}

export default PageHeader
