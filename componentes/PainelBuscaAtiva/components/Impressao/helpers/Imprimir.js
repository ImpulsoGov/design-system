import * as ReactDOMServer from 'react-dom/server';

export const Imprimir = (
    escala,
    child,
    lista,
    aba,
    sub_aba="",
    mixpanel
)=>{
    mixpanel.track('button_click', {
        'button_action': "imprimir_lista",
        'nome_lista_nominal': lista,
        'aba_lista_nominal' : aba,
        'sub_aba_lista_nominal' : sub_aba
      });
    if(typeof window !== 'undefined') {
        const largura = window.innerWidth;
        const altura = window.innerHeight;
        const conteudo = ReactDOMServer.renderToString(child);
        const janelaImpressao = window.open('', '', `width=${largura},height=${altura}`);
        janelaImpressao.document.write(`
        <html>
            <head>
            <style>
                @media print and (orientation: landscape){
                    @page {
                        transform: scale(${escala});
                        transform-origin: top left;
                        margin : 14px;
                    }
                    body {
                        margin: 0;
                    }
                    .largura {
                        width : 1215px;
                    }
                    .retrato{
                        display : none
                    }
                    .paisagem{
                        display : block;
                    }
                }
                @media print and (orientation: portrait){
                    @page {
                        transform: scale(${escala});
                        transform-origin: top left;

                    }
                    body {
                        margin: 0;
                    }
                    .largura {
                        width : 868px
                    }
                    .retrato{
                        display : block;
                    }
                    .paisagem{
                        display : none;
                    }
                }
            </style>
            </head>
            <body>${conteudo}</body>
        </html>
        `);
        janelaImpressao.document.close();

        //aguarda imagens carregarem 
        const imagens = janelaImpressao.document.images;
        let carregadas = 0;
        const totalImagens = imagens.length;
        for (let i = 0; i < totalImagens; i++) {
            if (imagens[i].complete) {
                carregadas++;
            } else {
                imagens[i].onload = () => {
                    carregadas++;
                    if (carregadas === totalImagens) {
                        janelaImpressao.print();
                    }
                };
                imagens[i].onerror = () => {
                    carregadas++;
                    if (carregadas === totalImagens) {
                        janelaImpressao.print();
                    }
                };
            }
        }

        if (carregadas === totalImagens) {
            janelaImpressao.print();
        }
    }
}