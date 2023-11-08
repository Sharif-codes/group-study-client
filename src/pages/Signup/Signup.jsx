import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
import app from "../../../firebase.config";

const auth= getAuth(app)
const Signup = () => {
    const navigate=useNavigate()
    const {createUser}= useContext(AuthContext)
    const handleSignup= e=>{
        e.preventDefault()
        const toastId= toast.loading('Regestration on progress')
        const form= e.target
        const displayName = form.displayName.value
        const photoURL = form.photoURL.value
        const email= form.email.value
        const password= form.password.value
        console.log(email,password,displayName,photoURL)
      
            createUser(email,password)
            .then(res=>{
                console.log(res.user)
                updateProfile(auth.currentUser, {
                    displayName: displayName , photoURL: photoURL
                  }).then((result) => {
                    console.log(result)
                  }).catch((error) => {
                    console.log(error)
                  });
                  toast.success('user registered successfully',{id: toastId})
                  navigate('/')
            })
            .catch(err=>{
            toast.error(err.message, {id: toastId})
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                        <p>Already have an account?</p> <Link to='/login' className="text-purple-800">Login now</Link>
                    </form>
                </div>
              
            </div>
        </div>
    );
};

export default Signup;