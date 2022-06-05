import {Button, message, Table} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

const TasksList = (props) => {
  const {projectId, userParticipation, setUserParticipation, username} = props
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/${projectId}/tasks-list`)
      .then(res => setTasks(res.data))
      .catch(() => message.error('Something\'s wrong'))
  }, [projectId, userParticipation])

  const completeTask = (taskId) => {
    axios.put(`http://localhost:8000/api/projects/${taskId}/complete-task`)
      .then(() => setUserParticipation())
      .catch(message.error('Something\'s wrong'))
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (record.creator !== username) ? (
          <Button
            type="primary"
            ghost
            onClick={() => completeTask(record.id)}
          >
            Complete
          </Button>
        ) : (
          <></>
        )
      }
    },
  ];
  return (
    <>
      <Table dataSource={tasks} columns={columns} />
    </>
  )
}

const mapStateToProps = state => ({
  username: state.auth.username
})

export default connect(mapStateToProps, null)(TasksList);

