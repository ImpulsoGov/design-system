const ULTIMA_EQUIPE = "SEM EQUIPE RESPONSÁVEL";

export function ordenarEquipes(atual, seguinte) {
  const valorAtualMaiusculo = String(atual).toUpperCase() ?? "";
  const valorSeguinteMaiusculo = String(seguinte).toUpperCase() ?? "";

  if (valorSeguinteMaiusculo === ULTIMA_EQUIPE) {
    return -1
  }

  if (valorAtualMaiusculo === ULTIMA_EQUIPE) {
    return 1;
  }

  return valorAtualMaiusculo.localeCompare(valorSeguinteMaiusculo);
}
