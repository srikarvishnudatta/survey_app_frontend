import { getAllEvents } from "@/api/api";
import { ClockIcon } from "@/components/icons/icons";
import RecentCard from "@/components/RecentCard.tsx";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";

function Dashboard() {
  const {data, isFetching} = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents
  });
  return (
    <div className={"grow pt-4 px-2"}>
      <h1 className={"text-2xl "}>Welcome back, Srikar! </h1>
        <div className={"border-b border-b-gray-600 flex justify-between pt-4 pb-1 text-slate-200"}>
            <div className={"flex items-end gap-2"}><ClockIcon /> <span>Recent Events</span></div>
            <NavLink to={"/"} className="link link-info">See all</NavLink>
        </div>
        <div className={"mt-5 flex gap-2"}>
          {isFetching ? <div className="skeleton h-32 w-32"></div>: <>
            {data ? data.data.map((event) => <RecentCard key={event.id} {...event}/>) : <p>No events to be displayed.</p>}
          </>}
            
        </div>
    </div>
  )
}

export default Dashboard