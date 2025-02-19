import MainLayout from "../layout/MainLayout";
import Transaction from "../components/molecules/Transaction";
import ActionHeader from "../components/organisms/ActionHeader";
import "../App.css"

export default function WalletMovement() {

    const transactions = [
        { type: 'received', amount: '250,00', date: '01/01/2023', amountBTC: '0,011' },
        { type: 'send', amount: '1.200,00', date: '30/12/2022', amountBTC: '0,0052' },
        { type: 'received', amount: '192,00', date: '11/11/2022', amountBTC: '0,0064' },
        { type: 'received', amount: '250,00', date: '01/01/2023', amountBTC: '0,011' },
        { type: 'send', amount: '1.200,00', date: '30/12/2022', amountBTC: '0,0052' },
        { type: 'received', amount: '192,00', date: '11/11/2022', amountBTC: '0,0064' },
    ]

    return (
        <MainLayout
            header={<ActionHeader title="Movements" />}>
            <div className="pt-6 h-full flex flex-col justify-center">
                <div className="flex mb-8">
                    <h2 className="text-2xl font-bold">Filter : </h2>
                    <button className="grow bg-rosso rounded-3xl mx-2 text-bianco font-bold">Send</button>
                    <button className="grow bg-accento rounded-3xl mx-2 text-bianco font-bold">Received</button>
                </div>
                <div className="overflow-y-scroll max-h-96">
                    {
                        transactions.map((transaction, index) => (
                            <Transaction
                                key={index}
                                type={transaction.type}
                                amount={transaction.amount}
                                date={transaction.date}
                                amountBTC={transaction.amountBTC}
                            ></Transaction>
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    )
}