import { Outlet } from "react-router-dom";
import Routing from "../../routing";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
    return (
        <>
            <Sidebar />
            
            <Outlet />
        </>
    )
}

export default Layout;