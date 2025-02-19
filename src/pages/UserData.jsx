import FormUserData from "../components/organisms/FormUserData";
import GuestHeader from "../components/organisms/GuestHeader";
import GuestLayout from "../layout/GuestLayout";

export default function UserData() {

    return (
        <GuestLayout>
            <GuestHeader
                img="/src/assets/media/welcome-header.png"><span className="text-accento">R</span>egister
            </GuestHeader>
            <FormUserData />
        </GuestLayout>
    )

}