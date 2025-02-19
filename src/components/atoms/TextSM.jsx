export default function TextSM({children, className}) {

    return(
        <p className={ " text-sm " + className}>{children}</p>
    )
    
}