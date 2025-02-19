import InputOTP from "../atoms/InputOTP";
import Button from "../atoms/Button";
import TextLg from "../atoms/TextLg";

export default function FormOTP() {

    return (
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <TextLg className="text-secondario font-semibold">We have sent you an OTP to your email address.
            10 Please enter the OTP below to verify your email address.</TextLg>
            <div className="flex justify-between mt-6 gap-2">
                <InputOTP></InputOTP>
                <InputOTP></InputOTP>
                <InputOTP></InputOTP>
                <InputOTP></InputOTP>
                <InputOTP></InputOTP>
                <InputOTP></InputOTP>
            </div>
            <div>
                <TextLg className="text-secondario text-center mt-6">Sending new code in: 00:20</TextLg>
            </div>
            <div className="flex flex-col items-center mb-6">
                <Button to="/wallet">NEXT</Button>
            </div>
        </form>
    )

}