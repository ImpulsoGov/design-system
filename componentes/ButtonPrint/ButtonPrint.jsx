import React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { ButtonColorSubmitIcon } from "../ButtonColor/ButtonColor";

const ButtonPrint = ({
    label,
    child,
    escala
})=>{
    const Imprimir = ()=>{
        if (typeof window !== 'undefined') {
            const largura = window.innerWidth;
            const altura = window.innerHeight;
            const janelaImpressao = window.open('', '', `width=${largura},height=${altura}`);
            const conteudo = ReactDOMServer.renderToString(child);
            console.log(conteudo)
            janelaImpressao.document.write(`
            <html>
                <head>
                <style>
                    @media print {
                        @page {
                            transform: scale(${escala});
                            transform-origin: top left;
                        }
                        body {
                            margin: 0;
                        }
                    }
                </style>
                </head>
                <body>${conteudo}</body>
            </html>
            `);
            janelaImpressao.document.close();
            janelaImpressao.print();
        }}
    return(
        <>
            <ButtonColorSubmitIcon
                label={label}
                icon="https://media.graphassets.com/3vsKrZXYT9CdxSSyhjhk"
                submit={Imprimir}
            />
            {child}
        </>
    )
}

export {ButtonPrint}