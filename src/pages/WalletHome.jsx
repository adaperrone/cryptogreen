import DashboardCard from "../components/molecules/DashboardCard"
import { Link } from "react-router-dom"
import TextSM from "../components/atoms/TextSM"
import Transaction from "../components/molecules/Transaction"
import IconButton from "../components/atoms/IconButton"
import Send from "../components/atoms/Send"
import Receive from "../components/atoms/Receive"
import MainLayout from "../layout/MainLayout"
import MainHeader from "../components/organisms/MainHeader"
import "../App.css"

export default function WalletHome() {

    const transactions = [
        { type: 'received', amount: '250,00', date: '01/01/2023', amountBTC: '0,011' },
        { type: 'send', amount: '1.200,00', date: '30/12/2022', amountBTC: '0,0052' },
        { type: 'received', amount: '192,00', date: '11/11/2022', amountBTC: '0,0064' },
    ]

    return (
        <>
            <MainLayout
                header={
                    <MainHeader
                        title="Wallet"
                        subtitle={<span>Welcome, <span className="font-bold">Paolo</span></span>}></MainHeader>
                }>
                <DashboardCard
                    title="1.234 USD"
                    subtitle="0,000043 BTC">
                </DashboardCard>
                <div className="flex justify-between mt-10">
                    <TextSM className="text-primario font-bold">Last Transactions</TextSM>
                    <Link to="/wallet/movement" className="text-accento font-bold text-lg hover:underline transition-all">
                        View All
                    </Link>
                </div>
                {
                    transactions.map((transaction, index) => {
                        return (
                            <Transaction
                                key={index}
                                type={transaction.type}
                                amount={transaction.amount}
                                date={transaction.date}
                                amountBTC={transaction.amountBTC}
                            ></Transaction>
                        )
                    })
                }
                <div className="mt-10 flex justify-center gap-10">
                    <IconButton to="/wallet/send" text="Send" icon={<Send />} />
                    <IconButton to="/wallet/receive" text="Receive" icon={<Receive />}></IconButton>
                </div>
            </MainLayout>
        </>
    )
}
