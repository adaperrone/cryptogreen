import { Link } from "react-router-dom";

export default function Button({ children, to }) {

    return (
        <>
            <Link to={to} className="w-48 bg-accento rounded-3xl flex justify-center items-center py-3 shadow-xl">
                <p className="text-bianco text-2xl font-bold">{children}</p>
            </Link>
        </>
    )
}