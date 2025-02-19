export default function GuestLayout({ children }) {

    return (
        <>
            <div className="min-h-screen bg-bianco flex flex-col justify-center p-8">
                <div>
                    {children}
                </div>
            </div>
        </>
    )

}