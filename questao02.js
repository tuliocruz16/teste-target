const num = prompt("Digite um numero: ");
function fibo(number) {
  var n1 = 0,
    n2 = 1,
    proximo;
  var temNumero = false;

  for (var i = 1; i <= number; i++) {
    if (n1 == number) {
      console.log("O numero informado pertence a sequencia!");
      temNumero = true;
    }
    proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
  }
  if (!temNumero) {
    console.log("O numero informado nao pertence a sequencia.");
  }
}

fibo(num);
