import {NavLink} from "react-router";


function NotFound() {
    return (
        <div>
            <h1>Oops you are lost</h1>
            <NavLink to={"/"}>Click here to go to home</NavLink>
        </div>
    );
}

export default NotFound;