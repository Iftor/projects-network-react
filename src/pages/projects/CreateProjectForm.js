import {Button, DatePicker, Form, Input, message} from 'antd';
import axios from "axios";

const CreateProjectForm = (props) => {
  const { switchModal, communityId, switchUserParticipation } = props
  const onFinish = (values) => {
    const data = {...values, deadline: values.deadline.format("Y-MM-DD")}
    axios.post(`http://localhost:8000/api/projects/communities/${communityId}/create-project`, data)
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
            message: 'Please input project name!',
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
        label="Deadline"
        name="deadline"
      >
        <DatePicker />
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

export default CreateProjectForm;