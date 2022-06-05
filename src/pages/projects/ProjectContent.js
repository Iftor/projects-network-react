import {useState} from "react";
import axios from "axios";
import CreateTaskModal from "./tasks/CreateTaskModal";
import TasksList from "./tasks/TasksList";
import {Button, message} from "antd";

const ProjectContent = (props) => {
  const {authUserParticipation, authUserIsCommunityCreator, projectId} = props

  const [userParticipation, setUserParticipation] = useState(false);

  const switchUserParticipation = () => setUserParticipation(!userParticipation)

  const joinProject = () => {
    axios.post(`http://localhost:8000/api/projects/${projectId}/join-project`)
      .then(() => switchUserParticipation())
  }

  return (
    <>
      {!(authUserIsCommunityCreator || authUserParticipation) && (
          <Button type="primary" ghost onClick={joinProject} style={{marginBottom: '20px'}}>
            Join project
          </Button>
        )
      }
      {(authUserIsCommunityCreator || authUserParticipation) && (
        <>
          <CreateTaskModal
            projectId={projectId}
            switchUserParticipation={switchUserParticipation}
          />
          <TasksList
            projectId={projectId}
            userParticipation={userParticipation}
            setUserParticipation={setUserParticipation}
          />
        </>
        )
      }
    </>
  )
}

export default ProjectContent
