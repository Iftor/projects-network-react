import {message, Table} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const ProjectList = (props) => {
  const {communityId} = props
  const [projects, setProjects] = useState([])
  console.log(`http://localhost:8000/api/projects/communities/${communityId}`)
  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/communities/${communityId}`)
      .then(res => setProjects(res.data))
  }, [communityId])


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Beginning date',
      dataIndex: 'beginning_date',
      key: 'beginning_date',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
  ];
  return (
    <>
      <Table dataSource={projects} columns={columns} />
    </>
  )
}

export default ProjectList;

