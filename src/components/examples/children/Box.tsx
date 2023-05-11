export default function Box(props: any){
    return (
        <div className={`
            flex p-4
            bg-red-400 rounded-lg
        `}>
            {props.children}   
        </div>
    )
}