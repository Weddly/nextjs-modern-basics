export interface ChildProps{
    name: string
    surname: string
}

export default function Child(props: ChildProps){
    return (
        <li>
            {props.name} {props.surname}
        </li>
    )
}