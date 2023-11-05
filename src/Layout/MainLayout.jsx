import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto space-y-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;