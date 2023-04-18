import axios from "axios";
import { useState } from "react";
import "../css/List.css";
import { Link } from "react-router-dom";
import AllIssues from "./AllIssues";
const IssuesList = () => {
  const [issuesData, setIssuesData] = useState([]);
  const [errormess, setErrorMess]= useState()
  const handleIssueRequest = () => {
    axios.get(`https://api.github.com/repos/divykadam/Forms/issues`)
      .then((result) => setIssuesData(result.data))
      .catch((err) => setErrorMess(err));
  };
  return (
    <>
      <div className="buttonBlock">
        <button className="pullButton" onClick={handleIssueRequest}>
          issues
        </button>
      </div>
      <div className="tableData">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {issuesData==true ? issuesData.map((data, i)=> (<tr key={i}>
            <td>{data.id}</td>
            <td>{data.url}</td>
            
        </tr>)): `Data Error ${errormess}`}
            
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Link to="/allIssues">
                  All Issues
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="allpulls"> 
      <AllIssues props={issuesData}/>
      </div>
    </>
  );
};
export default IssuesList;
