import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"


export default function FormSend() {
    
    return(
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <FormInput
                id="withdrawalAddress"
                text="Withdrawal Address"
                type="text"
                required={true}
                placeholder="Withdrawal Address"
            />
            <FormInput
                id="withdrawalAmount"
                text="Withdrawal Amount"
                type="number"
                required={true}
                placeholder="Withdrawal Amount in USD"
            />
            <div className="flex flex-col items-center mb-6">
                <Button to="/wallet">SEND</Button>
            </div>
        </form>
    )
}