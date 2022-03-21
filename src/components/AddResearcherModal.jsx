import { ResearcherForm } from './Form';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { createResearcher, updateResearcher } from '../store/actions/researcherActions';
import { backgroundList } from '../constants/general';

export const AddResearcherModal = ({ researcherProfile = {} }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [profile, setProfile] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (researcherProfile.hasOwnProperty('id')) {
      form.setFieldsValue({ researcher: { ...researcherProfile } });
      setProfile(researcherProfile);
      setVisible(true);
    }
  }, [form, researcherProfile]);

  const showModal = () => {
    setVisible(true);
  };

  const create = (values) => {
    const { researcher } = values;
    researcher.id = researcher.key = uuidv4();
    researcher.created = moment().format('LL');
    researcher.background = researcher.background || backgroundList[0].value;
    dispatch(createResearcher(values));
    console.log('the researcher form values ', values);
  };

  const update = (values) => {
    const { researcher } = values;
    researcher.id = researcher.key = profile.id;
    researcher.created = profile.created;
    dispatch(updateResearcher(values));
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      setConfirmLoading(true);

      setTimeout(() => {
        if (researcherProfile.hasOwnProperty('id')) {
          update(values);
        } else {
          create(values);
        }
        form.resetFields();
        setVisible(false);
        setProfile(null);
        setConfirmLoading(false);
      }, 1000);
    });
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    form.resetFields();
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal
        title="Create"
        visible={visible}
        onOk={handleSave}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>
          <ResearcherForm formHook={form} />
        </p>
      </Modal>
    </>
  );
};
