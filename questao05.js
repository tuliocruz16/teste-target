function inverteString(str) {
  // String vazia que servirá que retornará a palavra invertida.
  var palavraInvertida = "";

  // Aqui começa o laço no ultimo caractere da string, ou seja o tamanho - 1.
  // Enquanto o i for maior ou igual a 0, decrementamos ele para que possar iterar
  // por toda a string.
  // e fazemos isso armazendando o valor da posicao i da string na variavel palavras invertida
  // dessa forma ela recebe os caracteres, da ultima posicao ate a primeira.
  for (var i = str.length - 1; i >= 0; i--) {
    palavraInvertida += str[i];
  }
  return palavraInvertida; // "olleh"
}

inverteString("invertida");
