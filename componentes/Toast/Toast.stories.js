import React, { useState } from "react";
import { Toast } from ".";

export default {
  title: "Componentes/Toast",
  component: Toast,
  argTypes: {
    autoHideDuration: {
      name: "autoHideDuration",
      description: "Tempo em milisegundos para que o card deixe de ser exibido automaticamente"
    },
    open: {
      name: "open",
      description: "Estado inicial que define se o componente será exibido ou não"
    },
    onClose: {
      name: "onClose",
      description: "Função que será executada para fechar o componente"
    },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(true);
  args.open = open;
  args.onClose = () => setOpen(false);
  return <Toast { ...args } />
};

export const Default = Template.bind({});
Default.args = {
  children: "Toast",
  open: true,
};
