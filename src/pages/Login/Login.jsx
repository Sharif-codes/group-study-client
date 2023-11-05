import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = e => {
        e.preventDefault()
        const toastId = toast.loading('Logging in')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        try {
            login(email, password)
                .then(res => {
                    toast.success('user logged in successfully', { id: toastId })
                    console.log(res)
                    const user = { email }
                    axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                        .then(res => {
                            console.log(res.data)
                            if (res.data.success) {
                                navigate(location?.state ? location?.state : '/')
                            }
                        })
                })
            
        }
        catch (err) {
            toast.error(err.message, { id: toastId })
            console.log(err)

        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;