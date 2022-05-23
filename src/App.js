import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Registration from "./routes/auth/Registration";
import CommunityItem from "./routes/communities/CommunityItem";
import CommunitiesPage from "./routes/communities/CommunitiesPage";
import MainPage from "./routes/main/MainPage";
import ProjectItem from "./routes/projects/ProjectItem";
import UserProjectList from "./routes/projects/UserProjectList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<MainPage />}/>
          <Route path="communities" element={<CommunitiesPage />}/>
          <Route path=":community_custom_id" element={<CommunityItem />}/>
          <Route path="projects" element={<UserProjectList />} />
          <Route path=":community_custom_id/:project_custom_id" element={<ProjectItem />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
