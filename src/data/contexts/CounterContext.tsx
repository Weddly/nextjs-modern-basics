import { createContext, useState } from "react";

interface CounterContextProps{
    number: number
    inc: () => void
    dec: () => void
}

const CounterContext = createContext<CounterContextProps>({
    number: 0,
    inc: () => {},
    dec: () => {}
})

export function CounterProvider(props: any) {
    const [number, setNumber] = useState<number>(0)

    const inc = () => setNumber(number + 1)
    const dec = () => setNumber(number - 1)

    return (
        <CounterContext.Provider
            value={{
                number,
                inc,
                dec
            }}
        >
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContext