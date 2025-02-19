import MainLayout from "../layout/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"

export default function ProfileFAQ() {

    return (

        <MainLayout
            header={<ActionHeader title="FAQ" />}>
            <div className="mt-6">
                <div>
                    <button className="flex items-center justify-between w-full p-5 font-bold border border-accento rounded-t-xl bg-accento text-bianco">
                        <span>What is bitcoin?</span>
                        <svg className="w-6 h-6 shrink-0 rotate-180 " fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <div className="p-5 border ">
                        <p className="text-primario">Bitcoin is a cryptocurrency, a form of electronic
                            cash. It is a decentralized digital currency without a central bank or single
                            administrator that can be sent from user to user on the peer-to-peer bitcoin
                            network without the need for intermediaries.
                        </p>
                    </div>
                </div>
                <div>
                    <button className="flex items-center justify-between w-full p-5 font-bold border  text-primario">
                        <span>Is there any risks?</span>
                        <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="p-5 border hidden">
                        <p className="text-primario">Flowbite is first conceptualized and designed
                            using the Figma software so everything you see in the library has a design
                            equivalent in our Figma file.
                        </p>
                    </div>
                </div>
                <div>
                    <button className="flex items-center justify-between w-full p-5 font-bold border text-primario mb-6">
                        <span>How can I buy Bitcoin?</span>
                        <svg className="w-6 h-6 shrink-0 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="p-5 border hidden">
                        <p className="text-primario">You can buy Bitcoin with a credit card,
                            debit card, bank transfer, or cash. You can also buy Bitcoin with PayPal,
                            Apple Pay, or Google Pay.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    )

}