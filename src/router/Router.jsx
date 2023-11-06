import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CreateAssignment from "../pages/create-assignment/CreateAssignment";
import MyAssignment from "../pages/myAssignment/MyAssignment";
import SubmittedAssignment from "../pages/submittedAssignment/SubmittedAssignment";
import AllAssignment from "../pages/AllAssignment/AllAssignment";
import SingleAssignment from "../pages/SingleAssignment/SingleAssignment";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/create-assignments',
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute> 
            },
            {
                path: '/my-assignments',
                element: <MyAssignment></MyAssignment>
            },
            {
                path: '/submitted-assignments',
                element: <SubmittedAssignment></SubmittedAssignment>
            },
            {
                path: '/all-assignments',
                element: <AllAssignment></AllAssignment>,
                loader: ()=> fetch('http://localhost:5000/get-assignment')
            },
            {
                path: '/single-assignment/:id',
                element: <SingleAssignment></SingleAssignment>,
                loader: ({params})=> fetch(`http://localhost:5000/single-assignment/${params.id}`)

            },
            {
                path: '/update-assignment/:id',
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/update-assignment/${params.id}`)
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path:"/signup",
        element: <Signup></Signup>
    }
]);

export default router;