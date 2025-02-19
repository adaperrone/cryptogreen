import MainLayout from "../layout/MainLayout"
import MainHeader from "../components/organisms/MainHeader"
import DashboardCard from "../components/molecules/DashboardCard"
import TextSM from "../components/atoms/TextSM"
import IconButton from "../components/atoms/IconButton"
import Receive from "../components/atoms/Receive"
import Send from "../components/atoms/Send"

export default function MarketHome() {

    return (
        <MainLayout
            header={
                <MainHeader
                    title="Market"
                    subtitle={<span>Welcome, <span className="font-bold">Paolo</span></span>}>
                </MainHeader>
            }>
            <DashboardCard
                title="1.234 USD"
                subtitle="0,000043 BTC"
            />
            <div className="pt-2">
                <img className="w-full mt-6"
                    src="./src/assets/media/market.png" alt="market" />
                <div className="flex justify-between text-secondario">
                    <TextSM>24H</TextSM>
                    <TextSM>1W</TextSM>
                    <TextSM className={"text-bianco bg-secondario w-8 h-6 text-center rounded-xl"}>1M</TextSM>
                    <TextSM>3M</TextSM>
                    <TextSM>1Y</TextSM>
                    <TextSM className="font-bold">ALL</TextSM>
                </div>
            </div>
            <div className="mt-12 flex justify-center gap-10">
                <IconButton to="/market/buy" text="Buy" icon={<Receive />}></IconButton>
                <IconButton to="/market/sell" text="Sell" icon={<Send />}></IconButton>
            </div>
        </MainLayout>
    )
}