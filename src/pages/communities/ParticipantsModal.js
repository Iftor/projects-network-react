import React, {useEffect, useState} from 'react';
import {Modal, Button} from 'antd';
import axios from "axios";
import ParticipantsTable from "./ParticipantsTable";

const ParticipantsModal = ({ communityId, participantsCount }) => {
  const [visible, setVisible] = useState(false);

  const switchModal = () => {
    setVisible(!visible);
  };

  const handleCancel = () => {
    switchModal();
  };

  return (
    <>
      <Button type="primary" onClick={switchModal} style={{minHeight: "50px"}}>
        <span style={{marginRight: '10px'}}>Participants</span>
        <span style={{outline: 'solid', borderRadius: '2rem', padding: '5px'}}>
          {participantsCount}
        </span>
      </Button>
      <Modal
        visible={visible}
        title="Title"
        onCancel={handleCancel}
        footer={null}
      >
        <ParticipantsTable communityId={communityId}/>
      </Modal>
    </>
  );
};

export default ParticipantsModal;