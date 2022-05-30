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
      >
        Join
      </Button>
    </>
  )
}

export default JoinCommunity;
