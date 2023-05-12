import { useState } from "react"

interface Product {
    name: string
    price: number
    discount: number
}

export default function Form(){
    const [product, setProduct] = useState<Product>({
        name: '',
        price: 0,
        discount: 0
    })

    return (
        <div className="flex flex-col gap-5 items-center">
            <span className="text-2xl font-black">Form Example</span>
            <div>
                <span>Name:</span>
                <input 
                    type="text" 
                    value={product.name}
                    className="entry"
                    onChange={e=>{
                        setProduct({
                            ...product,
                            name: e.target.value
                        })
                    }}     
                />
            </div>
            <div>
                <span>Price:</span>
                <input 
                    type="number" 
                    value={product.price}
                    className="entry"
                    min={0}
                    step={0.1}
                    onChange={e=>{
                        setProduct({
                            ...product,
                            price: +e.target.value
                        })
                    }}     
                />
            </div>
            <div>
                <span>Discount:</span>
                <input 
                    type="number" 
                    value={product.discount}
                    className="entry"
                    min={0}
                    max={0.6}
                    step={0.01}
                    onChange={e=>{
                        setProduct({
                            ...product,
                            discount: +e.target.value
                        })
                    }}     
                />
            </div>
            <div className="flex flex-col gap-5 text-2xl">
                <span>{product.name}</span>
                <span>{product.price}</span>
                <span>{product.discount}</span>
                <span>{product.price * (1 - product.discount)}</span>
            </div>
        </div> 
    )
}