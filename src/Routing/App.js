import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Routing/Layout';
import PullRequestList from '../Component/PullRequestList';
import IssuesList from '../Component/issues';
import AllPullRequest from '../Component/AllpullR';
import AllIssues from '../Component/AllIssues';

function App() {
  return (
    <div className="App">
      {/* <h1>https://api.github.com/users/DivyansheeKadam/repos</h1> */}
      {/* https://api.github.com/repos/DivyansheeKadam/Forms/pulls{/number} */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path="pullRequestList" element={<PullRequestList/>}/>
        <Route path='issuesList' element={<IssuesList/>}/>
        <Route path='allPullRequest' element={<AllPullRequest/>}/>
        <Route path='allIssues' element={<AllIssues/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
