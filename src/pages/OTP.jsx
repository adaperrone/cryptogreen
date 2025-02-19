import GuestLayout from "../layout/GuestLayout"
import GuestHeader from "../components/organisms/GuestHeader"
import FormOTP from "../components/organisms/FormOTP"

export default function OTP() {

    return (
        <>
            <GuestLayout>
                <GuestHeader img="/src/assets/media/welcome-header.png"><span className="text-accento">L</span>ogin</GuestHeader>
                <FormOTP/>
            </GuestLayout>
        </>
    )

}