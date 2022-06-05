import {Button, Modal} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import {useState} from 'react';
import CreateTaskForm from "./CreateTaskForm";

const CreateTaskModal = ({projectId, switchUserParticipation}) => {
  const [visible, setVisible] = useState(false);

  const switchModal = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button type="primary" onClick={switchModal} ghost>
        <PlusOutlined/>
        <span>Create task</span>
      </Button>
      <Modal
        visible={visible}
        title="Create task"
        onCancel={switchModal}
        footer={null}
      >
        <CreateTaskForm
          projectId={projectId}
          switchModal={switchModal}
          switchUserParticipation={switchUserParticipation}
        />
      </Modal>
    </>
  );
};


export default CreateTaskModal;
