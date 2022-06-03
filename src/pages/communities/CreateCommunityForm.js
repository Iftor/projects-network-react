import {Button, Checkbox, Form, Input, message} from 'antd';
import axios from "axios";

const CreateCommunityForm = (props) => {
  const { switchModal, switchUserParticipation } = props
  const onFinish = (values) => {
    axios.post('http://localhost:8000/api/communities/', values)
      .then(() => {
        message.success('Success')
        switchModal()
        switchUserParticipation()
      })
      .catch(() => message.error('Something\'s wrong'))
  };

  return (
    <Form
      name="create"
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input community name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCommunityForm;