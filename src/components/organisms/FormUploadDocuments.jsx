import Button from "../atoms/Button";
import InputUploadFile from "../molecules/InputUploadFile";

export default function FormUploadDocuments() {

    return (

        <form className="flex flex-col items-center justify-center mt-10">
            <div className="flex flex-col gap-10">
                <InputUploadFile text="Upload your ID" id="userID" />
                <InputUploadFile text="Upload your photo" id="userPhoto" />
            </div>
            <div className="mt-10">
                <Button to="/wallet">NEXT</Button>
            </div>
        </form>
    )

}