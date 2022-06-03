import { Button, Modal } from 'antd';
import { useState } from 'react';
import ProjectList from "./ProjectList";

const ProjectListModal = (props) => {
  const {communityId, userParticipation} = props
  const [visible, setVisible] = useState(false);

  const switchModal = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button type="primary" onClick={switchModal}>
        Projects
      </Button>
      <Modal
        visible={visible}
        title="Projects"
        onCancel={switchModal}
        footer={null}
      >
        <ProjectList communityId={communityId} userParticipation={userParticipation}/>
      </Modal>
    </>
  );
};


export default ProjectListModal;
