import { Link } from "react-router-dom";


const AssignmentCard = ({assignments}) => {
    const {_id,title,description,mark,difficulty,due,thumbnail,createdBy}= assignments
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="h-64"><img className="h-72 w-full" src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                   <p>Difficulty Level: <span className="font-semibold">{difficulty}</span></p>
                    <p>Marks: <span className="font-semibold">{mark}</span> </p>
                    <p>Due: <span className="font-semibold">{due}</span></p>
                    <div className="flex gap-5">
                        <Link to={`/single-assignment/${_id}`}><button className="btn btn-accent text-white">View </button></Link>
                        
                       <Link to={`/update-assignment/${_id}`}><button className="btn btn-secondary">Update</button></Link> 
                    </div>
                </div>
            </div>
    );
};

export default AssignmentCard;