import {Link} from "react-router-dom";
 let data= require( "../data.json");


function Articles(){
    console.log(data);
    return (
        <div className="articles-data">
           {
               data.map((a,i)=>{
                   return (<div className="single" key={i}>
                       <Link to={`/articles/${i}`}>
                       <h3>{a.title}</h3>
                       </Link>

                   </div>)
               })
           }
        </div>
    )
}

export default Articles;