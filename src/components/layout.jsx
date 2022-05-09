import Sidebar from "./Sidebar/Sidebar";
import Mobilebar from './Sidebar/mobilebar';

const Layout = () => {
    const width = window.innerWidth;
    return (
        <>
            {width > '600' ? <Sidebar /> : <Mobilebar />}
            
        </>
    )
}

export default Layout;