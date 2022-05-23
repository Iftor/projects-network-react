import axios from "axios";
import { useEffect, useState } from "react";

const CommunityList = () => {
  const [communities, setCommunities] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/communities/')
    .then(res => setCommunities(res.data))
    .catch(error => console.log(error))
  }, [])
  return (
    <>
      {communities.map(item => {
        return (
          <div key={item.id}>
            {Object.keys(item).map(obj => {
              return (
                <p>{obj}: {item[obj]}</p>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default CommunityList
