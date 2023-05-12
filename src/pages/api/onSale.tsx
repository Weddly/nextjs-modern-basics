import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const delay = 6000
    const start = Date.now()
    while(Date.now() - start < delay) {}

    res.status(200).json([
        {id: 1, name: 'Pen', price: 7.59},
        {id: 2, name: 'Pencil', price: 3.65},
        {id: 3, name: 'Notebook', price: 20.99},
    ])

}