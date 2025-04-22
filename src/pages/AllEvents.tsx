import {useQuery} from "@tanstack/react-query";
import {getAllEvents} from "@/api/api.ts";


function AllEvents() {
    const {data} = useQuery({
        queryKey: ["events"],
        queryFn: getAllEvents
    });
    console.log(data);
    return (
        <div>
            all events
        </div>
    );
}

export default AllEvents;