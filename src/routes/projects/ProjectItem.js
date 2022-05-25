import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {message, Typography} from "antd";
const { Title, Text } = Typography;


const ProjectItem = () => {
  let { communityId, projectId } = useParams()
  const [project, setProject] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/communities/${communityId}/${projectId}`)
      .then(res => setProject(res.data))
      .catch(() => message.error('Failed to load data'))
  }, [communityId, projectId])


  return (
    <>
      <Title>{project.name}</Title>
      <Title level={4}>
        <Text type="secondary">{project.description}</Text>
      </Title>
    </>
  )
}

export default ProjectItem
