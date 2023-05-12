import Page from "@/components/template/Page";

export async function getStaticProps() {
    const url = 'http://localhost:3000/api/onSale'
    const resp = await fetch(url)
    const onSale = await resp.json()

    const date = new Date().toLocaleTimeString('pt-BR')
    return{
        props: {abc: 123, date, onSale},
        revalidate: 10
    }
}

export default function OnSalePage(props: any){
    return(
        <Page>
            <div>
                <span>{props.date}</span>
                <ul>
                    {props.onSale?.map((product: any) => {
                        return (
                            <li key={product.id}>
                                {product.name} - {product.price}
                            </li>
                        )
                    })}
                </ul>

            </div>
        </Page>
    )
}