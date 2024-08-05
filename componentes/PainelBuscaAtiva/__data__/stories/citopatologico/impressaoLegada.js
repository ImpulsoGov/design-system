import * as ReactDOMServer from 'react-dom/server';
import { TabelaCitoImpressao } from "../../../../TabelaHiperDia";
import { colunasCito } from './colunasCito';
import { status_usuario_descricao } from './status_usuario_descricao';

const imprimir = (escala,child)=>{
  if (typeof window !== 'undefined') {
    const largura = window.innerWidth;
    const altura = window.innerHeight;
    const janelaImpressao = window.open('', '', `width=${largura},height=${altura}`);
    const conteudo = ReactDOMServer.renderToString(child);
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
  }
}

export const imprimirCitoLegado = (data) => imprimir(
  0.78,
  <TabelaCitoImpressao
    data={data}
    colunas={colunasCito}
    status_usuario_descricao={{ data: status_usuario_descricao }}
    fontFamily="sans-serif"
  />
)