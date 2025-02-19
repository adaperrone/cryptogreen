import FormSelect from "../molecules/FormSelect";
import Button from "../atoms/Button"
import FormTextarea from "../molecules/FormTextarea";

export default function FormSupport() {

    return (
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <FormSelect
                id="problem"
                text="Problem"
                required={true}
                placeholder="Choose a problem"
                options={['Problem with the app', 'Problem with the website', 'Problem with the payment', 'Other']}
            ></FormSelect>
            <FormTextarea
                id="description"
                text="Description"
                required={true}
                placeholder="Decribe your problem"
            ></FormTextarea>
            <div className="text-center flex flex-col items-center my-6">
                <Button to="/profile">CONFIRM</Button>
            </div>
        </form>
    )

}