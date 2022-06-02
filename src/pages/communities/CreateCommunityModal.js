import { Button, Modal } from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import { useState } from 'react';
import CreateCommunityForm from "./CreateCommunityForm";

const CreateCommunityModal = () => {
  const [visible, setVisible] = useState(false);

  const switchModal = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button type="primary" onClick={switchModal}>
        <PlusOutlined />
        <span>Create community</span>
      </Button>
      <Modal
        visible={visible}
        title="Create community"
        onCancel={switchModal}
        onOk={switchModal}
        footer={null}
      >
        <CreateCommunityForm switchModal={switchModal}/>
      </Modal>
    </>
  );
};


export default CreateCommunityModal;
