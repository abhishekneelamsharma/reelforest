import Header from "@/_components/user/Header";
import Sidebar from "@/_components/user/Sidebar";
import { UserProvider } from "@/_context/UserContext";

export const metadata = {
    title: "Reel Troop | Home",
};

const MainLayout = ({ children }) => {
    return (
        <>
            <UserProvider>
                <Header />
                <Sidebar />
                {children}
            </UserProvider>

        </>
    )
}

export default MainLayout;