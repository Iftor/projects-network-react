import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import RegistrationForm from "./components/auth/registration/RegistrationForm";
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
          <Route path=":communityId" element={<CommunityItem />}/>
          <Route path="projects" element={<UserProjectList />} />
          <Route path=":communityId/:projectId" element={<ProjectItem />} />
          <Route path="registration" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
