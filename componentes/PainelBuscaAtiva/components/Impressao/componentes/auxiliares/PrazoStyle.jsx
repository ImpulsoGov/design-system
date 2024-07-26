import * as estilos from "../constantes/estilosTags";
import * as icones from "../constantes/icones";

export const PrazoStyle = ({value})=>{
  return <div style={value != "Em dia" ? estilos.tagLaranjaComIcone : estilos.tagVerdeComIcone}>
    {value != "Em dia" && <img src={icones.atencao_simbolo}/>} 
    {value == "Em dia" && <img src={icones.check_simbolo}/>} 
    {value}
  </div>
}
