import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"

export default function FormEditUserData() {

    return (
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <FormInput
                id="name"
                text="Name"
                type="text"
                required={true}
                placeholder="Enter your name"
                value="Paolo"
            />
            <FormInput
                id="surname"
                text="Surname"
                type="text"
                required={true}
                placeholder="Enter your surname"
                value="Rossi"
            />
            <FormInput
                id="birthday"
                text="Birthday"
                type="text"
                required={true}
                value="05/04/1983"
            />
            <FormInput
                id="address"
                text="Address"
                type="text"
                required={true}
                placeholder="Insert your address"
                value="Via Roma, 1"
            />
            <div className="grid grid-cols-2 gap-4 w-full">
                <FormInput
                    id="city"
                    text="City"
                    type="text"
                    required={true}
                    placeholder="Insert your city"
                    value="Rende"
                />
                <FormInput
                    id="postalCode"
                    text="Postal Code"
                    type="text"
                    required={true}
                    placeholder="Insert your postal code"
                    value="87036"
                />
            </div>
            <div className="flex flex-col items-center mb-6">
                <Button to="/profile">CONFIRM</Button>
            </div>
        </form>
    )

}