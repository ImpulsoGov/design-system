export const filtrosAplicadosImpressao = (chavesFiltros)=>{
    const filtros_aplicados = []
    chavesFiltros.forEach(chaveFiltro => {
        filtros_aplicados.push(`${Object.keys(chaveFiltro)[0]} ${chaveFiltro[Object.keys(chaveFiltro)[0]]}`)
    });
    return filtros_aplicados
}