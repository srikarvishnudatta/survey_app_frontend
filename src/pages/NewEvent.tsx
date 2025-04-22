import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/Input.tsx";
import { Button } from "@/components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import { createNewEvent } from "@/api/api.ts";
import { NewEventType } from "@/types/types.ts";
import { DayPicker } from "react-day-picker";
import { CalendarIcon } from "@/components/icons/icons";
import { Toast } from "@/components/ui/Toast";
import { useNavigate } from "react-router";
function NewEvent() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation<unknown, unknown, NewEventType>({
    mutationFn: (data) => createNewEvent(data),
    onSuccess: () => {
      setTimeout(() => navigate("/"), 3000);
    }
  });
  function submitHandler(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const [hours, minutes] = time.split(":").map(Number);
    const eventDate = date || new Date();
    eventDate.setHours(hours);
    eventDate.setMinutes(minutes);
    eventDate.setSeconds(0);
    eventDate.setMilliseconds(0);
    const newEventData = {
      title,
      location,
      eventDate,
    };
    console.log(newEventData);
    mutate({ ...newEventData });
  }
  return (
    <section className={"grow pt-4 px-2"}>
      {isSuccess && <Toast />}
      <h2 className={"text-2xl"}>New Event 🎉</h2>
      <form className={"py-3"} onSubmit={submitHandler}>
        <div className={""}>
          <Input
            className="input"
            type={"text"}
            placeholder={"Coffee Party.."}
            id={"title"}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            className="input"
            type={"text"}
            placeholder={"365 Front Street West"}
            id={"location"}
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="space-y-2 my-2">
          <p className="text-xs font-bold px-2">Whats the date?</p>
          <button
            popoverTarget="rdp-popover"
            className="input input-border"
            style={{ anchorName: "--rdp" } as React.CSSProperties}
            type="button"
          >
            <CalendarIcon />
            {date ? date.toLocaleDateString() : "Pick a date"}
          </button>
          <div
            popover="auto"
            id="rdp-popover"
            className="dropdown"
            style={{ positionAnchor: "--rdp" } as React.CSSProperties}
          >
            <DayPicker
              className="react-day-picker p-4"
              mode="single"
              selected={date}
              onSelect={setDate}
              required
              classNames={{
                nav: `py-2`,
                day_selected: `bg-secondary rounded-full text-white`,
              }}
            />
          </div>
          <div>
            <Input type="time" className="input" id="time" required value={time} onChange={(e) => setTime(e.target.value)}/>
          </div>
        </div>
        <Button type="reset">Reset</Button>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}

export default NewEvent;
