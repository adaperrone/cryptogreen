import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"

export default function FormEditPassword() {

    return (
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <FormInput
                id="currentPassword"
                text="Current Password"
                type="email"
                required={true}
                placeholder="Enter your current password"
            />
            <FormInput
                id="password"
                text="New password"
                type="password"
                required={true}
                placeholder="Enter your new password"
            />
            <FormInput
                id="confirmNewPassword"
                text="Confirm new Password"
                type="password"
                required={true}
                placeholder="Confirm your new password"
            />
            <div className="flex flex-col items-center mb-6">
                <Button to="/profile">CONFIRM</Button>
            </div>
        </form>
    )

}