import GuestLayout from "../layout/GuestLayout"
import GuestHeader from "../components/organisms/GuestHeader"
import FormUploadDocuments from "../components/organisms/FormUploadDocuments"

export default function UploadDocuments() {

    return (
        <GuestLayout>
            <GuestHeader
                img="/src/assets/media/welcome-header.png"><span className="text-accento">R</span>egister
            </GuestHeader>
            <FormUploadDocuments/>
        </GuestLayout>
    )

}