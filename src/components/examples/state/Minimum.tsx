import { useState } from "react"

export default function Minimum(){
    const[name, setName] = useState('Fulano')


    return (
        <div className="flex flex-col gap-5 items-center">
            <span className="text-2xl font-black">Minimum State Example</span>
            <input 
                type="text" 
                className="entry"
                value={name}
                onChange={e => {
                    setName(e.target.value);
                }}
            />
        </div>
    )
}