export default function InputUploadFile({ text, id }) {

    return (
        <div className="flex items-center justify-center w-full">
            <label htmlFor={id} className="h-34 w-60 bg-accento border-2 border-dashed rounded-lg cursor-pointer">
                <div className="flex flex-col items-center justify-center pt-5">
                    <svg className="h-10 w-10 mb-2 text-primario" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.9999 19C19.209 19 20.9999 17.2091 20.9999 15C20.9999 12.7909 19.209 11 16.9999 11H16.9774C16.9923 10.8353 16.9999 10.6685 16.9999 10.5C16.9999 7.46243 14.5374 5 11.4999 5C8.4623 5 5.99986 7.46243 5.99986 10.5C5.99986 10.5047 5.99987 10.5095 5.99988 10.5142C4.04366 10.9113 2.57129 12.6408 2.57129 14.7142C2.57129 17.0811 4.49007 18.9999 6.857 18.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 19L12 14M12 14L14 16M12 14L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <p className="mb-2 text-sm text-primario font-bold">{text}</p>
                    <p className="text-xs text-primario">Click to upload or drag and drop</p>
                </div>
                <input id={id} type="file" className="hidden"></input>
            </label>
        </div>
    )

}