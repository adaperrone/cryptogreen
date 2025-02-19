import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"


export default function FormUserData() {

    return (
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <FormInput
                id="name"
                text="Name"
                type="text"
                required={true}
                placeholder="Enter your name"
            />
            <FormInput
                id="surname"
                text="Surname"
                type="text"
                required={true}
                placeholder="Enter your surname"
            />
            <FormInput
                id="birthday"
                text="Birthday"
                type="date"
                required={true}
                placeholder="dd/mm/yyyy"
            />
            <FormInput
                id="address"
                text="Address"
                type="text"
                required={true}
                placeholder="Insert your address"
            />
            <div className="grid grid-cols-2 gap-4 w-full">
                <FormInput
                    id="city"
                    text="City"
                    type="text"
                    required={true}
                    placeholder="Insert your city"
                />
                <FormInput
                    id="postalCode"
                    text="Postal Code"
                    type="text"
                    required={true}
                    placeholder="Insert your postal code"
                />
            </div>
            <div className="flex flex-col items-center mb-6">
                <Button to="/register/upload-documents">NEXT</Button>
            </div>
        </form>
    )

}