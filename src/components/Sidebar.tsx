import {CustomProps} from "@/types/types.ts";
import { HomeIcon, CalendarIcon, AnalyzeIcon, SettingsIcon } from "./icons/icons";


function Sidebar(props:CustomProps) {
    return (
        <aside className={"py-4 " + props.className}>
            <h4 className={"text-gray-300"}>Navigation</h4>
            <nav className={"list-none text-md text-slate-200 flex flex-col gap-4 px-4 py-4"}>
                <li className={"flex items-end gap-2"}><HomeIcon /> <span>Dashboard</span></li>
                <li className={"flex items-end gap-2"}><CalendarIcon /> Events</li>
                <li className={"flex items-end gap-2"}><AnalyzeIcon/> Surveys</li>
                <li className={"flex items-end gap-2"}><SettingsIcon /> Settings</li>
            </nav>
        </aside>
    );
}
export default Sidebar;