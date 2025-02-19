export default function GuestHeader({ children, img }) {

    return (
        <>
            <header className="text-center">
                <img className="w-ful max-w-[150px] mx-auto" src={img} alt="img header"></img>
                <h1 className="text-5xl font-bold mt-5">{children}</h1>
            </header>
        </>
    )

}