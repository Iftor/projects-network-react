import {Button} from "antd";
import axios from "axios";

const LeaveCommunity = ({ communityId, switchUserParticipation }) => {
  const leaveCommunity = () => {
    axios.post(`http://localhost:8000/api/communities/leave-community/${communityId}`)
      .then(() => switchUserParticipation())
      .catch(() => {})
  }

  return (
    <>
      <Button
        type="primary"
        ghost
        danger
        onClick={leaveCommunity}
        style={{minWidth: '70px'}}
      >
        Leave
      </Button>
    </>
  )
}

export default LeaveCommunity;
