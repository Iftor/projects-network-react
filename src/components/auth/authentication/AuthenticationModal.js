import { Button, Modal } from 'antd';
import { useState } from 'react';
import AuthenticationForm from "./AuthenticationForm";

const AuthenticationModal = () => {
  const [visible, setVisible] = useState(false);

  const switchModal = () => {
    setVisible(!visible);
  };


  return (
    <>
      <Button type="primary" onClick={switchModal}>
        sign in
      </Button>
      <Modal
        visible={visible}
        title="Sign in"
        onOk={switchModal}
        onCancel={switchModal}
        footer={null}
      >
        <AuthenticationForm switchModal={switchModal}/>
      </Modal>
    </>
  );
};

export default AuthenticationModal;
