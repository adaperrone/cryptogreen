import MainLayout from "../layout/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"
import FormSupport from "../components/organisms/FormSupport"

export default function ProfileSupport() {

    return (
        <MainLayout
            header={<ActionHeader title="Support"/>}>
            <FormSupport/>
        </MainLayout>
    )

}