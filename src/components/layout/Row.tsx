export interface RowProps{
    children: React.ReactNode
}

export default function Row(props: RowProps) {
    return(
        <div className="flex flex-wrap justify-center gap-20">
            {props.children}
        </div>
    )
}