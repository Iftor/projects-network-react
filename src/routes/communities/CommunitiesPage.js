import axios from "axios";
import {  List, Button, Typography, PageHeader  } from 'antd';
import VirtualList from 'rc-virtual-list';
import {  useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import CreateCommunityModal from "../../pages/communities/CreateCommunityModal";
const { Title } = Typography;

const ContainerHeight = 400;

const CommunitiesPage = () => {
  const [communities, setCommunities] = useState([])

  useEffect(() => {
    appendData()
  }, [])

  const appendData = () => {
    axios.get('http://localhost:8000/api/communities/')
      .then(res => setCommunities(res.data))
      .catch(error => console.log(error))
  };

  // const appendData = () => {
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((body) => {
  //       setData(data.concat(body.results));
  //       message.success(`${body.results.length} more items loaded!`);
  //     });
  // };

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

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
            <List.Item key={item.custom_id}>
              <List.Item.Meta
                title={
                  <Link to="/">{item.name}</Link>
                }
                description={item.description}
              />
              <div>
                <Button type="primary" ghost>
                  Join
                </Button>
              </div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
}

export default CommunitiesPage
