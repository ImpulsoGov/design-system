import React from 'react'
import {IFrame} from '../componentes/IFrame/index'

export default {
  title: "DOCS/FundamentosVisuais/Tipografia",
  component: IFrame,
};

const Template = (args) => <IFrame {...args}/>

export const Default = Template.bind({});

Default.args ={
    height: "1700",
    link: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrcW1vEx9YZnaKCpzhCtUuE%2FHandoff---Impulso-Library%3Fnode-id%3D208%253A108%26scaling%3Dscale-down-width%26page-id%3D103%253A106"
};