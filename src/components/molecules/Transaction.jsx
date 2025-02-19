import ArrowUp from "../atoms/ArrowUp";
import ArrowDown from "../atoms/ArrowDown";
import TextSM from "../atoms/TextSM";


export default function Transaction({ type, amount, date, amountBTC }) {
    let arrowIcon;
    let prefix;
    let textColor;

    if (type === 'received') {
        arrowIcon = <ArrowUp className="text-accento fa-2x" />;
        prefix = '+';
        textColor = "text-accento";
    } else {
        arrowIcon = <ArrowDown className="text-rosso fa-2x" />;
        prefix = '-';
        textColor  = "text-rosso";
    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center my-2">
                {arrowIcon}
                <div className="ml-2">
                    <TextSM className= "text-primario font-bold capitalize">
                        {type}
                    </TextSM>
                    <p className="text-secondario text-sm">{date}</p>
                </div>
            </div>
            <div>
                <TextSM className={`${textColor} font-semibold`}>{prefix} {amount} USD</TextSM>
                <p className="text-secondario text-sm text-right">{amountBTC} BTC</p>
            </div>
        </div>
    )
}