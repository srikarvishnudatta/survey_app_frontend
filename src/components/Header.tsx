import AvatarComponent from "@/components/Avatar.tsx";
import { Button } from "./ui/Button";
import { NavLink } from "react-router";

function Header() {
  return (
    <header
      className={
        "px-2 py-3 border-b-1 border-b-gray-600 flex justify-between items-center"
      }
    >
      <div className={"flex"}>
        {/*    Button and a logo to open the sidebar and with logo*/}
        <h2 className={"text-[#f3722c] font-semibold text-lg "}>feedbacker</h2>
      </div>
      <div className={"flex gap-2 items-center"}>
        <Button className="btn-primary">
          <NavLink to={"/events/new"}>Create new Event</NavLink>
        </Button>
        <AvatarComponent />
      </div>
    </header>
  );
}
export default Header;
