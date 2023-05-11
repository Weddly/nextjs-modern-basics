import Child from "./Child"

export interface ParentProps{
    name: string
    surname: string
}

export default function Parent(props: ParentProps){
    return (
        <div>
            <h1 className="text-xl font-bold">
                {props.name} {props.surname}
            </h1>
            <ul className="list-disc ml-2">
                <Child name="Pedro" surname={props.surname}/>
                <Child name="Ana" surname={props.surname}/>
                <Child name="Rafael" surname={props.surname}/>
                <Child name="Letícia" surname={props.surname}/>
            </ul>
        </div>
    )
}