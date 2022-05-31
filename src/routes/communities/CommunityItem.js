import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {Col, message, Row, Typography} from "antd";
import ProjectListModal from "../../pages/projects/ProjectListModal";
import DeleteCommunity from "../../pages/communities/DeleteCommunity";
import LeaveCommunity from "../../pages/communities/LeaveCommunity";
import JoinCommunity from "../../pages/communities/JoinCommunity";
const { Title, Text } = Typography;

const CommunityItem = () => {
  let { communityId } = useParams()
  const [userParticipation, setUserParticipation] = useState(false)
  const [community, setCommunity] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/communities/${communityId}/`)
      .then(res => {
        setCommunity(res.data)})
      .catch(() => message.error('Failed to load data'))
  }, [communityId, userParticipation])

  const getLength = (arr) => {
    try {
      return arr.length
    } catch (err) {
      return 0
    }
  }

  const switchUserParticipation = () => setUserParticipation(!userParticipation)

  const participationAction = (obj) => {
    if (obj) {
      if (obj.auth_user_is_creator) {
        return null
      } else if (obj.auth_user_participation) {
        return (
          <LeaveCommunity communityId={obj.id} switchUserParticipation={switchUserParticipation}/>
        )
      } else {
        return (
          <JoinCommunity communityId={obj.id} switchUserParticipation={switchUserParticipation}/>
        )
      }
    }
  }

  return (
    <>
      <Row>
        <Title>{community.name}</Title>
      </Row>
      <Row>
        <Title level={4}>
          <Text type="secondary">{community.description}</Text>
        </Title>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={5} >
          <Title level={5}>
            <Text>
              <span style={{marginRight: '10px'}}>Participants</span>
              <span style={{outline: 'solid', borderRadius: '2rem', padding: '5px'}}>
                {getLength(community.participants)}
              </span>
            </Text>
          </Title>
        </Col>
        <Col span={5} >
          {participationAction(community)}
        </Col>
      </Row>

      <Row>
        <ProjectListModal communityId={communityId}/>
      </Row>
    </>
  )
}

export default CommunityItem
