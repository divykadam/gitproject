import axios from "axios";
import "../css/List.css";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllPullRequest from "./AllpullR";
const PullRequestList = () => {
  const [pullData, setPullData] = useState([]);
  const [filterData, setFilterData] = useState()
  const [storeflData, setStoreflurl]= useState([]);
  const [errormess, setErrorMess]= useState()

  useEffect(()=>{
    axios.get("https://api.github.com/repos/divykadam/Forms/pulls")
      .then((result) =>{ setPullData(result.data)
                        console.warn(result.data)})
      .catch((err) => setErrorMess(err));
  })

  const handlefilter=()=>{
    const url="https://api.github.com/repos/divykadam/Forms/pulls/"
    const filterUrl=url.concat(filterData)
    axios.get(filterUrl)
      .then((result) =>{setStoreflurl(result.data)
                        console.warn(result.data.id)})
      .catch((err) => console.log(err));

      
  };

  
  return (
    <>
      <div className="buttonBlock">
        <span className="pullButton" >
          Pull Request
        </span>
      </div>
      <div className="tableData">
        <div>
          <input type="text" onChange={(e)=>setFilterData(e.target.value)}/>
        
            <button onClick={handlefilter}>filter</button>
          </div>
      
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {pullData==true ? pullData.map((data, i)=> (<tr id="pullData" key={i}>
            <td>{data.id}</td>
            <td>{data.url}</td>
        </tr>)): `Data Error ${errormess}`}
        {<tr>
            <td>{storeflData.id}</td>
            <td>{storeflData.url}</td>
        </tr>}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Link to="/allPullRequest">
                view all pull request
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      
      <div className="allpulls"> 
      <AllPullRequest props={pullData}/>
      </div>
        </>
  );
};
export default PullRequestList;
