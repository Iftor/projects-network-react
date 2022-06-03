import {useEffect} from "react";
import {Button} from "antd";
import axios from "axios";

const ProjectContent = (props) => {
  const {authUserParticipation, authUserIsCommunityCreator, projectId} = props
  // useEffect(() => {
  //
  // }, [])
  //

  const joinProject = () => {
    axios.post(`http://localhost:8000/api/projects/communities/${projectId}/join-project`)
      .then()
      .catch()
  }

  return (
    <>
      {
        !(authUserIsCommunityCreator || authUserParticipation) && (
          <Button ghost onClick={joinProject}>
            Join project
          </Button>
        )
      }
      {(authUserIsCommunityCreator || authUserParticipation) && (
          <></>
        )
      }
    </>
  )
}

export default ProjectContent
