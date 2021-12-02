import {Link} from "react-router-dom";

function Main() {
    return (
        <>
            <div className="main">
                <h1>Welcome to HomePage</h1>
                <div className="articles">
                    <Link to="/articles">
                    <button>Articles Page</button>
                    </Link>
                </div>
            </div>

        </>

    )
}

export default Main;