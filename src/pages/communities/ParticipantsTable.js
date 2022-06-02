import React, {useEffect, useState} from 'react';
import {Table, message} from 'antd';
import axios from "axios";
const { Column } = Table;

const ParticipantsTable = ({communityId}) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/communities/participants/${communityId}`)
      .then((res) => setParticipants(res.data))
      .catch(() => message.error('Something\'s wrong'))
  }, []);
  return (
    <Table dataSource={participants}>
      <Column title="Username" dataIndex="username" key="username" />
      <Column title="Firstname" dataIndex="first_name" key="first_name" />
      <Column title="Lastname" dataIndex="last_name" key="last_name" />
    </Table>
  );
}

export default ParticipantsTable;
