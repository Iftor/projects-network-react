import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {message, Typography} from "antd";
import ProjectContent from "../../pages/projects/ProjectContent";
const { Title, Text } = Typography;


const ProjectItem = () => {
  let { communityId, projectId } = useParams()
  const [project, setProject] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/communities/${projectId}`)
      .then(res => setProject(res.data))
      .catch(() => message.error('Failed to load data'))
  }, [communityId, projectId])


  return (
    <>
      <Title>{project.name}</Title>
      <Title level={4}>
        <Text type="secondary">{project.description}</Text>
      </Title>
      <ProjectContent
        authUserParticipation={project.auth_user_participation}
        authUserIsCommunityCreator={project.auth_user_is_community_creator}
        projectId={projectId}
      />
    </>
  )
}

export default ProjectItem
