import {Button} from "antd";
import axios from "axios";

const LeaveCommunity = ({ communityId }) => {
  const leaveCommunity = () => {
    axios.post(`http://localhost:8000/api/communities/leave-community/${communityId}`)
      .then(() => {})
      .catch(() => {})
  }

  return (
    <>
      <Button
        type="primary"
        ghost
        danger
        onClick={leaveCommunity}
      >
        Leave
      </Button>
    </>
  )
}

export default LeaveCommunity;
