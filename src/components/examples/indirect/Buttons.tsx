export interface ButtonsProps {
    changeValue: (newValue: string) => void
}

export default function Buttons(props: ButtonsProps){
    return(
        <div className="flex gap-5">
            <button className="panelButton" onClick={() => props.changeValue('Pedro')}>
                Pedro
            </button>
            <button className="panelButton" onClick={() => props.changeValue('Ana')}>
                Ana
            </button>
            <button className="panelButton" onClick={() => props.changeValue('Rafael')}>
                Rafael
            </button>
            <button className="panelButton" onClick={() => props.changeValue('Letícia')}>
                Letícia
            </button>

        </div>
    )


}