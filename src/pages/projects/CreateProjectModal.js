import { Button, Modal } from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import { useState } from 'react';
import CreateProjectForm from "./CreateProjectForm";

const CreateProjectModal = ({communityId, switchUserParticipation}) => {
    const [visible, setVisible] = useState(false);

    const switchModal = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Button type="primary" onClick={switchModal} ghost>
                <PlusOutlined />
                <span>Create project</span>
            </Button>
            <Modal
                visible={visible}
                title="Create project"
                onCancel={switchModal}
                footer={null}
            >
                <CreateProjectForm
                    switchModal={switchModal}
                    communityId={communityId}
                    switchUserParticipation={switchUserParticipation}
                />
            </Modal>
        </>
    );
};


export default CreateProjectModal;
