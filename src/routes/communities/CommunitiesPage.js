import axios from "axios";
import {  List, Button, Typography, PageHeader  } from 'antd';
import VirtualList from 'rc-virtual-list';
import {  useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import CreateCommunityModal from "../../pages/communities/CreateCommunityModal";
import JoinCommunity from "../../pages/communities/JoinCommunity";
import LeaveCommunity from "../../pages/communities/LeaveCommunity";
const { Title } = Typography;

const ContainerHeight = 400;

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
      .then(res => setCommunities(res.data))
      .catch(error => console.log(error))
  };

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  const participationAction = (item) => {
    return item.auth_user_participation? (
      <LeaveCommunity communityId={item.id} switchUserParticipation={switchUserParticipation}/>
    ):(
      <JoinCommunity communityId={item.id} switchUserParticipation={switchUserParticipation}/>
    )
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
          height={ContainerHeight}
          itemHeight={47}
          itemKey="custom_id"
          onScroll={onScroll}
        >
          {(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={
                  <Link to={`/${item.id}`}>{item.name}</Link>
                }
                description={item.description}
              />
              {participationAction(item)}
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
}

export default CommunitiesPage
