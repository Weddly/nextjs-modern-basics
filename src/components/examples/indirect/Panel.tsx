import { useState } from "react";
import Buttons from "./Buttons";

export default function Panel(){
    const [name, setName] = useState('Initial')

    function changeValue(newValue: string){
        console.log(newValue)
        setName(newValue)
    }

    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-3xl">{name}</h1>
            <Buttons changeValue={changeValue}/>
        </div>
    )
}