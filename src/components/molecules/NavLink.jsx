import { NavLink as Link } from "react-router-dom";
import TextSM from "../atoms/TextSM";

export default function NavLink({ text, icon, to = "#" }) {

    return (
        <Link to={to} className="flex flex-col items-center">{icon}<TextSM className="font-bold uppercase">{text}</TextSM></Link>
    )

}