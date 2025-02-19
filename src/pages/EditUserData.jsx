import MainLayout from "../layout/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"
import FormEditUserData from "../components/organisms/FormEditUserData"

export default function (params) {

    return (

        <MainLayout
            header={<ActionHeader title="Edit user data" />}>
            <FormEditUserData />
        </MainLayout>

    )
}