import FormReceive from "../components/organisms/FormReceive"
import MainLayout from "../layout/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"

export default function WalletReceive() {

    return (
        <MainLayout
            header={<ActionHeader title="Receive" />}>
            <FormReceive/>
        </MainLayout>
    )

}