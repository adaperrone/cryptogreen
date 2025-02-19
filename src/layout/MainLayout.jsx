
import Navbar from "../components/organisms/Navbar"

export default function MainLayout({ children, header }) {

    return (
        <div className="min-h-screen bg-bianco flex flex-col justify-between p-6">
            {header}
            <div className="grow">
                {children}
            </div>

            <Navbar />

        </div>
    )

}