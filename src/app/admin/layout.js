import Header from "@/_components/admin/Header";
import Sidebar from "@/_components/admin/Sidebar";
import Myparticle from "@/_components/global/MyPartical";

export const metadata = {
    title: "Admin",
    description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}

        </>
    );
}