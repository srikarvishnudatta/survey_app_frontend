import { getEventById } from "@/api/api";
import { ExternalLinkIcon } from "@/components/icons/icons";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";

// event by id
function Event() {
  const params = useParams();
  const eventId = params.eventId as string;
  const { data } = useQuery({
    queryKey: ["eventbyid", eventId],
    queryFn: () => getEventById(eventId),
  });
  return (
    <div className="grow pt-4 px-2">
      {data && (
        <div >
          <div className="space-y-6 border-b-1 pb-3 border-b-gray-600">
          <h2 className="text-2xl font-semibold">Event: {data.event.title}</h2>
          <p className="text-xl">📍Location: {data.event.location}</p>
          <p>Time & Date: {data.event.eventDate}</p>
          <p>status: active</p>
          <div className="flex gap-4">
            <button className="btn btn-secondary">Edit</button>
            <button className="btn btn-primary">
              <NavLink
                to={data.event.generatedLink}
                className={"flex gap-2 items-center"}
              >
                <span>Survey Link</span> <ExternalLinkIcon />
              </NavLink>
            </button>
            <button className="btn btn-warning">
                Close survey
            </button>
          </div>
          </div>
          <p>
            No survey data as the form is still accepting responses.
          </p>
        </div>
      )}
    </div>
  );
}

export default Event;
