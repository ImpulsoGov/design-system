import React from 'react'
import { Content3Col } from './index'
import { TextCol } from '../TextCol/TextCol'

export default {
  title: "Componentes/Content3Col",
  component: Content3Col,
  argTypes: { 
    titulo: {
        name: "título",
        description: "Título da página *string*"
    },
    child1: {
        name: "child1",
        description:"Bloco de conteúdo \n\n **título:** Título do bloco *string*\n\n **corpo:** Conteúdo em texto do bloco *string*"
    },
    child2: {
        name: "child2",
        description: "Bloco de conteúdo \n\n **título:** Título do bloco *string*\n\n **corpo:** Conteúdo em texto do bloco *string*"

    },
    child3: {
        name: "child3",
        description: "Bloco de conteúdo \n\n **título:** Título do bloco *string*\n\n **corpo:** Conteúdo em texto do bloco *string*"
    },
},
};
const Template = (args) => <Content3Col {...args}/>
export const Default = Template.bind({});
Default.args={
    titulo : "Por que devo fazer?",
    child1 : 
        <TextCol
            titulo = "Descomplicada"
            corpo = "Você preenche um formulário, nós entramos em contato em até três dias úteis e já marcamos a primeira conversa. Não precisa assinar nada, é sem burocracia."
        />,
    
    child2 : 
        <TextCol
            titulo = "Gratuita"
            corpo = "A consultoria é 100% gratuita. Você poderá marcar até três encontros totalmente gratuitos e ter acesso a análises e materiais criados por nossos especialistas."
        />,
    
    child3 : 
        <TextCol
            titulo = "Personalizada"
            corpo = "Trazemos análises e recomendações personalizadas para seu município melhorar nos indicadores e na capitação ponderada, sempre adequando à realidade local."
        />
}