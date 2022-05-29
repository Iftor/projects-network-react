import AuthenticationModal from "../auth/authentication/AuthenticationModal";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "antd";
import {connect} from "react-redux";
import { logout } from "../../actions/auth";
import {UserOutlined} from "@ant-design/icons";

const Navbar = ({ isAuthenticated, username, logout }) => {
  let navigate = useNavigate()
  const guestLinks = (
    <>
      <AuthenticationModal />
      <Link to="registration">
        <Button type="primary">Sign up</Button>
      </Link>
    </>
  );
  const authLinks = (
    <>
      <Link to="communities" style={{marginRight: 40}}>
        <Button type="primary">Communities</Button>
      </Link>
      <UserOutlined style={{marginRight: 5, color: '#fff'}}/>
      <span style={{marginRight: 20, color: '#fff'}}>{ username }</span>
      <Button
        type="primary"
        onClick={() => logout(navigate)}
      >
        Logout
      </Button>
    </>
  );
  return (
    <>
      { isAuthenticated? authLinks: guestLinks }
    </>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username
})

export default connect(mapStateToProps, { logout })(Navbar);
