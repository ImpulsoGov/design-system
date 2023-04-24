import React from 'react';
import { MateriaisComplementares } from './index';

export default {
      title: "Componentes/MateriaisComplementares",
      component: MateriaisComplementares,
};
const Template = (args) => <MateriaisComplementares { ...args } />;

export const Desktop = Template.bind({});
Desktop.args = {
      modulos: [
            { id: 0, tipo: "MATERIAIS", titulo: "Introdução aos indicadores de Hipertensão e Diabetes na APS", liberado: true, concluido: true },
            { id: 1, tipo: "MATERIAIS", titulo: "Introdução aos indicadores de Hipertensão e Diabetes na APS", liberado: true, concluido: true },
            { id: 2, tipo: "MATERIAIS", titulo: "Qualificação do registro e monitoramento de dados", liberado: true, concluido: false },
            { id: 3, tipo: "TUTORIAIS", titulo: "Gestão de processos de trabalho", liberado: true, concluido: false }
      ],
      modulo: [
            { id: 1, moduloID: 0, formato: "VIDEO", titulo: "Introdução sobre a Capacitação", concluido: true, link: "/", openInNewTab: true },
            { id: 1, moduloID: 1, formato: "VIDEO", titulo: "Introdução sobre a Capacitação", concluido: true, link: "/", openInNewTab: true },
            { id: 2, moduloID: 1, formato: "PPT", titulo: "Introdução ao Indicador de Hipertensão + Introdução ao Indicador de Diabetes", concluido: false, link: "/", openInNewTab: false },
            { id: 1, moduloID: 2, formato: "PDF", titulo: "Introdução ao Previne Brasil", concluido: false, link: "/" },
            { id: 2, moduloID: 2, formato: "QUIZ", titulo: "Quizz de avaliação desses conteúdos", concluido: false, link: "/" }
      ],
      ultimoModulo: 0,
      mobile: false
};
