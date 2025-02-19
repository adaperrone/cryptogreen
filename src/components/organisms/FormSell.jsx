import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";

export default function FormSell() {

    return (
        <form className="flex flex-col gap-8 h-full items-center py-10">
            <FormInput
                id="amount"
                text="Amount in BTC"
                type="number"
                required={true}
                placeholder="Insert amount in BTC">
            </FormInput>
            <FormInput
                id="conversion"
                text="Conversion in USD"
                type="number"
                required={false}
                placeholder="Amount in USD">
            </FormInput>
            <div className="mt-16">
                <Button to="/market">SELL</Button>
            </div>
        </form>
    )

}