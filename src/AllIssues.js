const AllIssues=(props)=>{
console.log(props.pullData)
    return(<>
    <h1>Alldata</h1>
    <div>
    <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
              <th>STATE</th>
              <th>NUMBER</th>
              <th>TITLE</th>
              <th>REPO NAME</th>
              <th>FULL NAME</th>
            </tr>
          </thead>
          <tbody>
            {props.pullData==true ? props.pullData.map((data, i)=> (<tr id="pullData" key={i}>
            <td>{data.id}</td>
            <td>{data.url}</td>
            <td>{data.state}</td>
            <td>{data.number}</td>
            <td>{data.title}</td>
            <td>{data.repo.name}</td>
            <td>{data.repo.full_name}</td>
        </tr>)): `Error : 404 `}
          </tbody>
        </table>
    </div>
    </>)
}
export default AllIssues;