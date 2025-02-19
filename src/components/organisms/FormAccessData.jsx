import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"
import { Link } from "react-router-dom"

export default function FormAccessData() {

    return (
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <FormInput
                id="email"
                text="Email"
                type="email"
                required={true}
                placeholder="Enter your email"
            />
            <FormInput
                id="password"
                text="Password"
                type="password"
                required={true}
                placeholder="Enter your password"
            />
            <FormInput
                id="confirmpassword"
                text="Confirm Password"
                type="password"
                required={true}
                placeholder="Confirm Password"
            />
            <div className="flex flex-col items-center mb-6">
                <Button to="/register/user-data">NEXT</Button>
                <Link to="/login" className="font-bold text-xl mt-3">LOG IN</Link>
            </div>
        </form>
    )
}