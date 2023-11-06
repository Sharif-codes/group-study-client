import axios from "axios";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";



const SingleAssignment = () => {
   const {user}= useContext(AuthContext)
    const singleAssignment = useLoaderData()
    const [assignment, setAssignment]= useState(singleAssignment)
    const {_id,title,description,mark,difficulty,due,thumbnail,createdBy}= assignment
    const email= user?.email
    const data= {email,_id}
    const selected= {data}
    const handleDelete= ()=>{
        axios.delete(`http://localhost:5000/delete-assignment/`,selected)
        .then(res=>{

            toast.success(res.data.message)
            const remaining= assignment?.filter(item=> item._id!== _id)
            setAssignment(remaining)

        } )
        .catch(err=>
            {
                toast.error(err.response.data.message)
                
            } )
      
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={thumbnail} className="w-72 rounded-lg shadow-2xl" />
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