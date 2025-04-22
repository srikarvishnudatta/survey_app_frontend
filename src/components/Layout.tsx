import {Outlet} from "react-router";
import Header from "@/components/Header.tsx";
import Sidebar from "@/components/Sidebar.tsx";

function Layout() {
    return (
        <main className={"flex flex-col h-screen"}>
            <Header />
            <div className={"px-2 grow flex"}>
                <Sidebar className={"w-1/8 border-r border-r-gray-600"}/>
                <Outlet/>
            </div>
        </main>
    );
}

export default Layout;