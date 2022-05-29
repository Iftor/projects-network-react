import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {message, Typography} from "antd";
import ProjectListModal from "../../pages/projects/ProjectListModal";
const { Title, Text } = Typography;

const CommunityItem = () => {
  let { communityId } = useParams()
  const [community, setCommunity] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8000/api/communities/${communityId}`)
      .then(res => setCommunity(res.data))
      .catch(() => message.error('Failed to load data'))
  }, [communityId])
  return (
    <>
      <Title>{community.name}</Title>
      <Title level={4}>
        <Text type="secondary">{community.description}</Text>
      </Title>
      <ProjectListModal communityId={communityId}/>
    </>
  )
}

export default CommunityItem
