import {Button} from "antd";
import axios from "axios";

const JoinCommunity = ({ communityId, switchUserParticipation }) => {
  const joinCommunity = () => {
    axios.post(`http://localhost:8000/api/communities/join-community/${communityId}`)
      .then(() => switchUserParticipation())
      .catch(() => {})
  }

  return (
    <>
      <Button
        type="primary"
        ghost
        onClick={joinCommunity}
        style={{minWidth: '70px'}}
      >
        Join
      </Button>
    </>
  )
}

export default JoinCommunity;
