export default function Select({ id, placeholder, options = [] }) {

    return (
        <select
            id={id}
            name={id}
            defaultValue={placeholder}
            className="p-2 border border-secondario rounded-xl mt-2 focus:border-primario"
        >
            <option disabled>{placeholder}</option>
            {
                options.map((option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                })
            }
        </select>
    )
}