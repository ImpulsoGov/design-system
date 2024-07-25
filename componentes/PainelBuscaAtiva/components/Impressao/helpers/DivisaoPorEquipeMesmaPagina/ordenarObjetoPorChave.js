export const ordenarObjetoPorChave = (obj) => {
    const chavesOrdenadas = Object.keys(obj).sort();
    const objetoOrdenado = {};
  
    chavesOrdenadas.forEach((chave) => {
      objetoOrdenado[chave] = obj[chave];
    });
  
    return objetoOrdenado;
  };
