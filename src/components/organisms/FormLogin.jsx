import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"
import { Link } from "react-router-dom"

export default function FormLogin() {
    
    return(
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
            <div className="flex flex-col items-center mb-6">
                <Button to="/login/otp">NEXT</Button>
                <Link to="/register/access-data" className="font-bold text-xl mt-3">SIGN UP</Link>
            </div>
        </form>
    )
}