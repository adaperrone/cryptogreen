import NavLink from "../molecules/NavLink"
import Wallet from "../atoms/Wallet"
import Market from "../atoms/Market"
import Profile from "../atoms/Profile"

export default function Navbar() {

    return (
        <nav className="bg-accento text-bianco h-20 rounded-[30px] flex items-center justify-center gap-12 mt-3">
            <NavLink to="/wallet" icon={<Wallet />} text="Wallet"></NavLink>
            <NavLink to="/market" icon={<Market/>} text="Market"></NavLink>
            <NavLink to="/profile" icon={<Profile />} text="Profile"></NavLink>
        </nav>
    )
}