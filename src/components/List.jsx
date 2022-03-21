import React, { useState } from 'react';
import { Table, Space, Button, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { AddResearcherModal } from '../components/AddResearcherModal';
import { deleteResearcher } from '../store/actions/researcherActions';

export const Lists = () => {
  const researcherList = useSelector((state) => state.researchersStore);
  const dispatch = useDispatch();
  const { researchers, filterRecords, searchString } = researcherList;
  const [researcher, setResearcher] = useState({});

  const onEditRecord = (id) => {
    const researcherProfile = researchers.find((item) => item.id === id);
    if (researcherProfile) {
      setResearcher({ ...researcherProfile });
    }
  };

  const onDeleteRecord = (id) => {
    dispatch(deleteResearcher({ id }));
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Background',
      dataIndex: 'background',
      key: 'background'
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle" key={record.id}>
          <Button type="link" onClick={() => onEditRecord(record.id)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure？"
            onConfirm={() => {
              onDeleteRecord(record.id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <div style={{ padding: '20px' }}>
          <AddResearcherModal researcherProfile={researcher} />
        </div>
      </div>
      {researchers.length > 0 ? (
        <Table columns={columns} dataSource={searchString ? filterRecords : researchers} />
      ) : null}
    </>
  );
};
