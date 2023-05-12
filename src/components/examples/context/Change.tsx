import CounterContext from "@/data/contexts/CounterContext"
import { useContext } from "react"

export default function Change(){

    const {inc, dec}: any = useContext(CounterContext)

    return (
        <div className="flex gap-5">
            <button onClick={dec} className="panelButton text-2xl font-bold">
                -1
            </button>
            <button onClick={inc} className="panelButton text-2xl font-bold">
                +1
            </button>
        </div>
    )
}