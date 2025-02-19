import MainLayout from "../layout/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"
import FormEditPassword from "../components/organisms/FormEditPassword"


export default function EditPassword() {

    return (
        <MainLayout
            header={<ActionHeader title="Edit Password" />}>
            <FormEditPassword />
        </MainLayout>
    )

}