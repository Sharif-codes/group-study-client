import axios from "axios";
import { useLoaderData } from "react-router-dom";


const SingleAssignment = () => {
    const singleAssignment = useLoaderData()
    const {_id,title,description,mark,difficulty,due,thumbnail,createdBy}= singleAssignment
    const handleDelete= ()=>{
        axios.delete(`http://localhost:5000/delete-assignment/${_id}`)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={thumbnail} className="w-fit rounded-lg shadow-2xl" />
                <div className="space-y-0 lg:space-2">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <p>Difficulty Level: <span className="font-semibold">{difficulty}</span></p>
                    <p>Marks: <span className="font-semibold">{mark}</span> </p>
                    <p>Due: <span className="font-semibold">{due}</span></p>
                    <p>Created By: <span className="font-semibold">{createdBy}</span></p>
                    <div className="flex gap-3 pt-5">
                    <button className="btn btn-primary">Take Assignment</button>
                    <button onClick={handleDelete} className="btn btn-secondary">Delete Assignment</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleAssignment;