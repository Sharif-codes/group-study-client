import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useEffect, useState } from "react";
import axios from "axios";


const AllAssignment = () => {
    const assignment = useLoaderData()
    const [allAssignment, setAllAssignment] = useState(assignment)

    const dropdownValues = ['Easy', 'Medium', 'Hard'];
    const [filter, setFilter] = useState('');
    const handleDropdownChange = e => {
        e.preventDefault()
        setFilter(e.target.value);
    }
    const url = `group-study-server-rho.vercel.app/assignment/${filter}`
    useEffect(() => {
        axios.get(url, {withCredentials:true})
            .then(res => setAllAssignment(res.data))
            .catch(err => console.log(err))
    }, [url])
    return (
        <div className="space-y-7">
            <div className="flex gap-5">
                <label className="label">
                    <span className="label-text text-xl font-semibold ">Filter By Difficulty Level</span>
                </label>
                <select className="input input-bordered" value={filter} onChange={handleDropdownChange}>
                    <option>select an option</option>
                    {dropdownValues.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    allAssignment.map(item => <AssignmentCard key={item._id} assignments={item}></AssignmentCard>)
                }

            </div>
        </div>

    );
};

export default AllAssignment;