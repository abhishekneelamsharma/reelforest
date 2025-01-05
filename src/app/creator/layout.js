import Header from "@/_components/creator/Header";
import Sidebar from "@/_components/creator/Sidebar";

const CretorLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
        </>
    )
}
export default CretorLayout;