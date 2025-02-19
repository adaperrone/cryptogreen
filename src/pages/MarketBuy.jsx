import MainLayout from "../layout/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"
import FormBuy from "../components/organisms/FormBuy"

export default function MarketBuy() {

    return (
        <MainLayout
            header={<ActionHeader title="Buy" />}>
            <FormBuy />
        </MainLayout>
    )

}