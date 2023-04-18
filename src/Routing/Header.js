import { Link } from "react-router-dom";
import '../css/Header.css';
const Header=()=>{
    return(<>
        <div className="head">
    <h1> ASSIMENT</h1>
    <h4>Github API Project </h4>
    <h4> Github Account : DivyansheeKadam</h4>
</div>    

    <div className="linkblock">
        <Link className="link" to='/pullRequestList'> Pull Request </Link>
        <Link className="link" to='/issuesList'> Issues </Link>
    </div>
    </>)
}
export default Header;