import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyAssignment = () => {
    const {user}= useContext(AuthContext)
    const email= user.email
    useEffect(()=>{
        fetch(`http://localhost:5000/get-submitted-assignment/${email}`)
    },[email])
    return (
        <div>
            
        </div>
    );
};

export default MyAssignment;