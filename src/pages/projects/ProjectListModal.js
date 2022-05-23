import { Button, Modal } from 'antd';
import { useState } from 'react';
import ProjectList from "./ProjectList";

const CreateCommunityModal = (props) => {
  const {communityId} = props
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
        title="Create community"
        onCancel={switchModal}
        onOk={switchModal}
        footer={null}
      >
        <ProjectList communityId={communityId}/>
      </Modal>
    </>
  );
};


export default CreateCommunityModal;
