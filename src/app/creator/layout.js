import Header from "@/_components/creator/Header";
import Sidebar from "@/_components/creator/Sidebar";
import CreatorProvider from "@/_context/CreatorContext";

export const metadata = {
    title: "Reel Troop | Creator",
};

const CretorLayout = ({ children }) => {
    return (
        <>
            <CreatorProvider>
                <Header />
                <Sidebar />
            </CreatorProvider>
            {children}
        </>
    )
}
export default CretorLayout;