const validacao = async(setResposta,validarCredencial,entrar,mail,senha)=>{
    const res = await validarCredencial(mail,senha)
    console.log(res)
    if (typeof(res["access_token"]) !== "undefined"){
        entrar('credentials', { redirect: true,username:mail, password: senha })
    }else{
        setResposta(res["detail"])
    }
    return res
}

export {validacao}