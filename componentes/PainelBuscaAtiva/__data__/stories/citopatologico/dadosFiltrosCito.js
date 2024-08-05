export const dadosFiltrosCito = [
    {
      rotulo : "Filtrar por nome da equipe",
      data :  ["EMULTIPROF APS BONFIM RR","ESF CRISTINO","ESF DIMINIZ","ESF NOVA ESPERANCA", "ESF SAO FRANCISCO", "ESF TUCANO", "ESF VILENA", "SEM EQUIPE RESPONSÁVEL"],
      filtro : "equipe_nome"
    },
    {
      rotulo : "Filtrar por INE da equipe",
      data : ["0002277573","0001540971","0000369799"],
      filtro : "equipe_ine"
  
    },
    {
      rotulo : "Filtrar por faixa etária",
      data : ['0','1','2','3','4','5','6','7','8'],
      filtro : "id_faixa_etaria"
  
    },
    {
      rotulo : "Idade",
      data : ['Maior ou igual a 34','Menor que 34'],
      filtro : "idade"
  
    },
    {
      rotulo : "Filtrar por status",
      data : [12,13,14,15,16],
      labels : {
        12 : "Coleta em dia",
        13 : "Nunca realizou coleta",
        14 : "Coleta com menos de 25 anos",
        15 : "Vence no final do quadrimestre",
        16 : "Coleta vencida"
      },
      filtro : "id_status_usuario"
  
    },
    {
      rotulo : "Filtrar por nome do ACS",
      data : ["Alessandra de Fatima Pereira", "Raquel Nascimento da Silva", "Rafaela Aparecida de Moraes"],
      filtro : "acs_nome"
  
    },
  ]