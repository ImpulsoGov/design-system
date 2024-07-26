import * as icones from "../constantes/icones";
import * as estilos from "../constantes/estilosTags";

export const Selecionar_status_usuario_descricao = ({value,status_usuario_descricao})=> {
  const styleStatus = {
    12: estilos.tagVerdeComIcone,
    13: estilos.tagVermelhaComIcone,
    14: estilos.tagVermelhaComIcone,
    15: estilos.tagLaranjaComIcone,
    16: estilos.tagVermelhaComIcone
  }

  const descricao = status_usuario_descricao.find(item => item?.id_status_usuario == value)?.status_usuario_descricao
  return <div style={styleStatus[value]}> 
    {[13,14,16].includes(value) &&  <img src={icones.alerta_simbolo}/>} 
    {[15].includes(value) &&  <img src={icones.atencao_simbolo}/>} 
    {[12].includes(value) &&  <img src={icones.check_simbolo}/>} 
    <span>{descricao}</span>
  </div>
}
