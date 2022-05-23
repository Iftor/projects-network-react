import { Button, Modal } from 'antd';
import { useState } from 'react';
import CreateCommunityForm from "./CreateCommunityForm";

const CreateCommunityModal = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const switchModal = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button type="primary" onClick={switchModal}>
        Create community
      </Button>
      <Modal
        visible={visible}
        title="Title"
        onCancel={switchModal}
        onOk={switchModal}
        footer={null}
      >
        <CreateCommunityForm switchModal={switchModal}/>
      </Modal>
    </>
  );
};


export default CreateCommunityModal
