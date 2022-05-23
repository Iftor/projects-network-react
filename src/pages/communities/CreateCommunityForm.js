import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";

const CreateCommunityForm = (props) => {
  const onFinish = (values) => {
    axios.post()
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
        label="Custom id"
        name="custom_id"
        rules={[
          {
            required: true,
            message: 'Please input custom id!',
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
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            props.switchModal()
          }}
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCommunityForm;