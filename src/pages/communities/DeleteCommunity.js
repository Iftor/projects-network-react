import {Button, Popconfirm} from "antd";
import axios from "axios";

const DeleteCommunity = ({ communityId, switchUserParticipation }) => {
  const deleteCommunity = () => {
    axios.delete(`http://localhost:8000/api/communities/${communityId}/`)
      .then(() => switchUserParticipation())
      .catch(() => {})
  }

  return (
    <>
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
        <Button
          type="primary"
          danger
          onClick={deleteCommunity}
        >
          Delete
        </Button>
      </Popconfirm>
    </>
  )
}

export default DeleteCommunity;
