import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Mobilebar from '../Mobilebar/mobilebar';

const Layout = () => {
    const width = window.innerWidth;
    return (
        <>
            {width > '600' ? <Sidebar /> : <Mobilebar />}
            
            <Outlet />
        </>
    )
}

export default Layout;