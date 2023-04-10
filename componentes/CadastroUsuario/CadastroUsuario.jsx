import React, { useState } from "react";
import style from "./CadastroUsuario.module.css";
import { DataGrid } from '@mui/x-data-grid';
import { CardAlert, ModalAlertOff } from "../ModalAlert/ModalAlert";
import { ButtonColorSubmit } from "../ButtonColor";


const alterarCadastroModal = (props)=>{
    const [cpf, setCPF] = useState("");
    const [mail, setMail] = useState("");
    const [INE, setINE] = useState("");
    console.log(props)
    return(
        <div className={style.conteinerAlterarCadastro}>
            <p className={style.TituloAlterarCadastro}>{props.props.titulo}</p>
                <div className={style.containerCampo}>
                    <input 
                        className={style.Campo}
                        type="text"
                        placeholder="E-mail"
                        value={mail}
                        onChange={(e) => {setMail(e.target.value);}}
                    />
                    <ButtonColorSubmit
                        label="Alterar"
                        submit={props.props.submit.mail}
                        arg={mail}
                    />
                </div>
                <div className={style.containerCampo}>
                    <input 
                        className={style.Campo}
                        type="text" 
                        placeholder="CPF"
                        value={cpf}
                        onChange={(e) => {setCPF(e.target.value);}}
                    />
                    <ButtonColorSubmit
                        label="Alterar"
                    />
                </div>
                <div className={style.containerCampo}>
                    <input 
                        className={style.Campo}
                        type="text" 
                        placeholder="Equipe"
                        value={INE}
                        onChange={(e) => {setINE(e.target.value);}}
                    />
                    <ButtonColorSubmit
                        label="Alterar"
                    />
                </div>
        </div>
        )
}


const CadastroUsuario = ({
  titulo,
  data,
  colunas,
  submit
  }) => {
    const [show,setShow] = useState(false)
    const alterarCadastro = ()=><button className={style.buttonShowModal} onClick={()=>{setShow(true);console.log(show);}}>✎</button>
    colunas.unshift({ 
        field: 'renderCell',
        headerName: 'Alterar Cadastro',
        width: 100,
        renderCell : alterarCadastro,
        headerAlign: 'center',
        align : 'center'
    })
    return (
        <>
            <ModalAlertOff 
                Child={CardAlert} 
                childProps={{
                    child : alterarCadastroModal,
                    childProps : {
                        titulo:"Alterar Cadastro",
                        submit:submit
                    }
                }}
                display = {show}
                setDisplay = {setShow}
            />
            <p className={style.Titulo}>{titulo}</p>
            <div style={{ padding:80, paddingTop:0, height: 575, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={colunas}
                    initialState={{
                        ...data.initialState,
                        pagination: { paginationModel: { pageSize: 10 } },
                    }}                                
                    pageSizeOptions={[10, 30, 45]}
                    getRowId={(row) => row.cpf}
                    sx={{
                        '& .MuiDataGrid-columnHeaderTitle': {
                            textOverflow: "clip",
                            whiteSpace: "break-spaces",
                            lineHeight: 1,
                            textAlign: "center"
                        }
                    }}
                />
            </div>
        </>
)}
  
export {CadastroUsuario};