import { Link } from "react-router-dom"

export default function IconButton({text, to, icon}) {
    return(
        <Link to={to} className="w-32 block text-center">
            <button className="bg-bianco shadow-xl w-full rounded-3xl flex items-center justify-center py-3">{icon}</button>
            <p className="font-bold mt-2">{text}</p>
        </Link>
    )
    
}