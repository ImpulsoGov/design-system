import React, {useState} from 'react';
import { PainelBuscaAtiva } from './index';
import { dataCito } from './__data__/stories/citopatologico/dataCito';
import { dataDiabetes } from './__data__/stories/diabetes/dataDiabetes';
import { dataHipertensao } from './__data__/stories/hipertensao/dataHipertensao';
import { CitoArgs } from './__data__/stories/citopatologico/CitoArgs';
import { DiabetesArgs } from './__data__/stories/diabetes/DiabetesArgs';
import { HipertensaoArgs } from './__data__/stories/hipertensao/HipertensaoArgs';
import { vacinacaoArgs } from './__data__/stories/vacinacao/vacinacaoArgs';
import { indicador3Args } from './__data__/stories/gestantesIndicador3/indicador3Args';

export default {
  title: "Componentes/PainelBuscaAtiva",
  component: PainelBuscaAtiva,
};

const Template = (args) =>{
  const dados = {
    "diabetes" : dataDiabetes,
    "hipertensao" : dataHipertensao,
    "cito" : dataCito
  }
  const [data,setData]=useState(dados[args.painel])
  const [filtrosAplicados, setFiltrosAplicados] = useState(false)
  const [showSnackBar, setShowSnackBar] = useState({
    open: false,
    message: "",
    background: "",
    color: "",
  })
  args["data"] = data
  args["setData"] = setData
  args["showSnackBar"] = showSnackBar
  args["setShowSnackBar"] = setShowSnackBar
  args["setFiltros_aplicados"] = setFiltrosAplicados
  return <PainelBuscaAtiva {...args}/>
}

export const Diabetes = Template.bind({});
Diabetes.args=DiabetesArgs
export const Hipertensao = Template.bind({});
Hipertensao.args=HipertensaoArgs
export const Cito = Template.bind({});
Cito.args=CitoArgs
export const Vacinacao = Template.bind({});
Vacinacao.args = vacinacaoArgs
export const GestantesIndicador3 = Template.bind({});
GestantesIndicador3.args = indicador3Args
