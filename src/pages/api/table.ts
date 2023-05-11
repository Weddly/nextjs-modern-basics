import { NextApiRequest, NextApiResponse } from "next";

//http://localhost:3000/api/table?rows=6&columns=3

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const columns = +(req.query.columns || 10)
    const rows = +(req.query.rows || 10)
    
    
    res.status(200).send(`
    <html>
        <head>
            <meta charset="utf-8">
            <style>
                html {
                    color: #eee;
                    background-color: #333;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    font-size: 2rem;
                }
            </style>
        </head>
        <body>
            <table border="1">
                ${rowsAndColumns(rows, columns)}
            </table>
        </body>
    </html>  
    `)
}

function rowsAndColumns(rows: number, columns: number) {
    let html = '';
    for(let r = 0; r < rows; r++) {
        html += '<tr>';
        for(let c = 0; c < columns; c++) {
            html += `<td>${r + 1} x ${r + 1}</td>`;
        }
        html += "</tr>";
    }

    return html;
}