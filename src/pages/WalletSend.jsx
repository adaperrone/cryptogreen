import ActionHeader from "../components/organisms/ActionHeader";
import FormSend from "../components/organisms/FormSend";
import MainLayout from "../layout/MainLayout";

export default function WalletSend() {

    return (
        <MainLayout
            header={<ActionHeader title="Send" />}>
            <FormSend/>
        </MainLayout>
    )
}