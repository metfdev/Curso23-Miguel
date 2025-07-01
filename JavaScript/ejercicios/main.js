

//Ejercicio Numero 1
function ListarNumerosPares(num_initial = 0){
  if(num_initial >= 0){
    if(num_initial <= 100){
      if((num_initial % 2) == 0){
        console.log("El numero: " + num_initial + " es par" );
        ListarNumerosPares(num_initial + 1);
      }else{
        ListarNumerosPares(num_initial + 1);
      }
    }else{
      return;
    }
  }else{
    ListarNumerosPares(num_initial + 1);
  }
}

//Ejercicio Numero 2
function ListarFrutas(lista,contador = 0){
  const longitud = lista.length;
  if(contador < longitud ){
    console.log("Listado de frutas: " + lista[contador]);
    ListarFrutas(lista,contador+1);
  }else{
    console.log("La lista ha finalizado");
    return;
  }
}

//Ejercicio Numero 3
function Factotrial(){
  let ingreso = prompt("Ingrese el número a calcular");
  if(ingreso === null ){
    return;
  }else if(ingreso === ""){
    alert("Error, debe ingresar un valor");
  }else{
    let numero = Number(ingreso);
    let anterior = numero - 1;
    if(numero < 0 ){
      alert("Numero Invalido, ingrese otro numero");
    }else{
      if(numero == 0){
        alert("El Factorial de " + numero + "!"+" es: 1");
      }else{
        let resultado = proceso(numero,anterior);
        alert("El Factorial de " + numero + "!"+" es: " + resultado);
      }
    }
  }
}

function proceso(numero,anterior){
  if(anterior >= 1){
    let calculo = numero * anterior;
    return proceso(calculo,anterior - 1);
  }else{
    return(numero);
  }
}

//Ejercicio Numero 3
function Fibonacci(){
  let ingreso = prompt("Ingrese el número hasta donde se va ha calcular");
  if(ingreso === null ){
    return;
  }else if(ingreso === ""){
    alert("Error, debe ingresar un valor");
  }else{
    let numero = Number(ingreso);
    if (numero < 0) {
      alert("Número Inválido, ingrese otro número");
    } else {
      alert("Abra la consola para ver el resultado");
      console.log("La sucesión de Fibonacci hasta " + numero + " es:");
      calculoSucesion(numero, 0, 1);
    }
  }
}

function calculoSucesion(numero,f1,f2){
  if (f1 > numero) {
    return;
  }
  console.log(f1);
  if (f1 <= numero) {
    let nueva = f1 + f2;
    return calculoSucesion(numero, f2, nueva);
  }
}

