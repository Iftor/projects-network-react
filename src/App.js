import { Route, Routes } from "react-router-dom";
import PageHeader from "./components/header/PageHeader";
import CommunityItem from "./routes/communities/CommunityItem";
import CommunityList from "./routes/communities/CommunityList";
import MainPage from "./routes/main/MainPage";
import ProjectItem from "./routes/projects/ProjectItem";
import UserProjectList from "./routes/projects/UserProjectList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageHeader />}>
          <Route index element={<MainPage />}/>
          <Route path="communities" element={<CommunityList />}/>
          <Route path=":community_custom_id" element={<CommunityItem />}/>
          <Route path="projects" element={<UserProjectList />} />
          <Route path=":community_custom_id/:project_custom_id" element={<ProjectItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
