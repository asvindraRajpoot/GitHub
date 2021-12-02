import {Link} from "react-router-dom";

function Sidebar() {


    return (
        <>
            <div className="sidebar">
                <ul>
                    <Link to="/">
                    <li>
                        <span><i class="fas fa-home"></i></span>
                        <span>Home</span>
                    </li>
                    </Link>
                    <Link to="/articles">
                    <li>
                        <span><i class="fas fa-users"></i></span>
                        <span>Articles</span>
                    </li>
                    </Link>
                    <Link to="/help">
                    <li>
                        <span><i class="far fa-question-circle"></i></span>
                        <span> Help And Support</span>

                    </li>
                    </Link>
                </ul>
            </div>

        </>
    )
}



export default Sidebar;