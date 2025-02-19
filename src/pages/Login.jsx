import GuestLayout from "../layout/GuestLayout"
import GuestHeader from "../components/organisms/GuestHeader"
import FormLogin from "../components/organisms/FormLogin"

export default function Login() {

    return (
        <>
            <GuestLayout>
                <GuestHeader img="/src/assets/media/welcome-header.png"><span className="text-accento">L</span>ogin</GuestHeader>
                <FormLogin />
            </GuestLayout>
        </>
    )
}