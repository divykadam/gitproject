import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PullRequestList from './PullRequestList';
import IssuesList from './issues';
import AllPullRequest from './AllpullR';
import AllIssues from './AllIssues';

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
