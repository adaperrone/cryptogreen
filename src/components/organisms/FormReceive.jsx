import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"

export default function FormReceive() {

    return (
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <img className="mb-6 w-56" src="../src/assets/media/qrcode.png" alt="qr code" />
            <FormInput
                id="walletwalAddress"
                text="Wallet Address"
                type="text"
                required={true}
                placeholder="shd9uqwd7jekwu6end5n"
            />
            <div className="flex flex-col items-center mb-6">
                <Button to="/wallet">COPY LINK</Button>
            </div>
        </form>
    )
}