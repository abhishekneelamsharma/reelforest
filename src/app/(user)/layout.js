import Header from "@/_components/user/Header";
import Sidebar from "@/_components/user/Sidebar";


const MainLayout = ({ children }) => {
    return (
        <>
                <Header />
                <Sidebar />
                {children}
        </>
    )
}

export default MainLayout;