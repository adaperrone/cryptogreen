export default function Label({ htmlFor, children, required = false }) {

    return (
        <label
            htmlFor={htmlFor}
            className="font-semibold">{children} {required && <span className="text-rosso">*</span>}
        </label>
    )
}