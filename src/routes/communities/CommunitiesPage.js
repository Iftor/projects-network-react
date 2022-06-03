import axios from "axios";
import {List, Button, Typography, PageHeader} from 'antd';
import VirtualList from 'rc-virtual-list';
import {  useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import CreateCommunityModal from "../../pages/communities/CreateCommunityModal";
import JoinCommunity from "../../pages/communities/JoinCommunity";
import LeaveCommunity from "../../pages/communities/LeaveCommunity";
import DeleteCommunity from "../../pages/communities/DeleteCommunity";
const { Title } = Typography;

const ContainerHeight = window.screen.height - 450;

const CommunitiesPage = () => {
  const [communities, setCommunities] = useState([])
  const [userParticipation, setUserParticipation] = useState(false);

  useEffect(() => {
    appendData()
  }, [userParticipation])

  const switchUserParticipation = () => {
    setUserParticipation(!userParticipation)
  }

  const appendData = () => {
    axios.get('http://localhost:8000/api/communities/')
      .then(res => {setCommunities(res.data)})
  };

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  const participationAction = (item) => {
    if (item.auth_user_is_creator) {
      return (
        <DeleteCommunity communityId={item.id} switchUserParticipation={switchUserParticipation}/>
      )
    } else if (item.auth_user_participation) {
      return(
        <LeaveCommunity communityId={item.id} switchUserParticipation={switchUserParticipation}/>
      )
    } else {
      return (
        <JoinCommunity communityId={item.id} switchUserParticipation={switchUserParticipation}/>
      )
    }
  }

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={<Title level={2}>Communities</Title>}
        extra={[
          <CreateCommunityModal />
        ]}
      />
      <List>
        <VirtualList
          data={communities}
          itemHeight={47}
          itemKey="custom_id"
          onScroll={onScroll}
          height={ContainerHeight}
        >
          {(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={
                  <Link to={`/${item.id}`}>{item.name}</Link>
                }
                description={item.description}
              />
              <span style={{marginRight: '40px'}}>Participants {item.participants.length}</span>
              {participationAction(item)}
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
}

export default CommunitiesPage
