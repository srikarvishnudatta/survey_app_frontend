import { EventData } from "@/types/types";
import { CalendarIcon, ExternalLinkIcon } from "./icons/icons";
import { NavLink } from "react-router";



function RecentCard({title, location, eventDate, generatedLink}: EventData) {
    return (
        <div className="card card-border border-gray-600 bg-base-100 w-96 shadow-sm ">
        
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>📍Location: {location}</p>
        <p className="flex gap-2 items-center"><CalendarIcon/> {eventDate.toString()}</p>
        <div className="card-actions justify-between items-center">
            <div>
                <span>Active</span>
            </div>
            <button className="btn btn-primary"><NavLink to={generatedLink} className={"flex gap-2 items-center"}><span>Survey Link</span> <ExternalLinkIcon /></NavLink></button>
        </div>
        </div>
        </div>

    );
}

export default RecentCard;