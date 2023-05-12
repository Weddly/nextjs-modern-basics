import CounterContext from "@/data/contexts/CounterContext"
import { useContext } from "react"

export default function Show(){

    const ctx:any = useContext(CounterContext)

    return (
        <div>
            <span className="text-5xl font-black">
                {ctx.number}
            </span>   
        </div>
    )
}