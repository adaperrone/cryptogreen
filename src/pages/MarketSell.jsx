import MainLayout from "../layout/MainLayout";
import ActionHeader from "../components/organisms/ActionHeader";
import FormSell from "../components/organisms/FormSell";

export default function MarketSell() {

    return (
        <MainLayout
            header={<ActionHeader title="Sell" />}>
            <FormSell />
        </MainLayout>
    )
}