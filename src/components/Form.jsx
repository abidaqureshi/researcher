import { Form, Input, Select } from 'antd';
import { backgroundList } from '../constants/general';
const { Option } = Select;

export const ResearcherForm = ({ formHook }) => {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid!'
    }
  };

  const onBackgroundChange = (value) => {
    console.log(value);
  };

  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 14 }}
      form={formHook}
      name="dynamic_form_nest_item"
      validateMessages={validateMessages}
      autoComplete="off"
    >
      <Form.Item
        name={['researcher', 'name']}
        label="Name"
        rules={[{ required: true, message: 'Please enter name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['researcher', 'email']}
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['researcher', 'background']} label="Background">
        <Select onChange={onBackgroundChange} style={{ width: 120 }}>
          {backgroundList.map((bgItem) => (
            <Option key={bgItem.value}>{bgItem.label}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
