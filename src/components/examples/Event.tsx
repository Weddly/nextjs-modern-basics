import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Event() {
    const [value, setValue] = useState(0)

    function increase() {
        setValue(value + 1);
    };

    function decrease() {
        setValue(value - 1);
    };

    return(
        <div className={`
            flex flex-col gap-4 items-center justify-center
            bg-black text-white h-screen
        `}>
            <span className="text-3xl">
                <b>Value:</b> {value}
            </span>
            <div className="flex gap-8">
                <button onClick={decrease}>
                    <IconMinus />                   
                </button>
                <button onClick={increase}>
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}