/* Para resolver este ejercicio seguí la siguiente lógica,
Primero transformar cada caracter del array en codigo ascii,
Una vez transformado todo el array, separé cada cadena de texto con un -, 
para diferenciar cada texto de anagrama con otro.
para saber donde colocar el - hize un bloque de codigo que me agregara en un
nuevo array las longitudes de los textos sumadas.
una vez separados por el guion -, pude hacer un split para que me divida el array segun las
palabras, posteriormente transforme el array a number y ordene los numeros, 
con esto ya tenia para hacer comparaciones iguales de cada string e ir borrando las que se repetían.
Finalmente ordene mediante sort el array resultante
*/
function funWithAnagrams(text) {
  let aux = [];
  let aux2 = []; // contenedor de las longitudes acumuladas de cada palabra
  let arr = [];
  /*Bloque de codigo que guarda un array que contiene 
    la suma de las longitudes de cada palabra para poner el separador -
    */
  text.forEach((e) => {
    aux.push(e.length);
  });
  aux2.push(aux[0]);
  for (let i = 0; i < aux.length - 2; i++) {
    let x = aux[i + 1];
    let y = aux2[i];
    let z = x + y + 1;
    aux2.push(z);
  }
  //console.log(aux2);
  /* Aqui agrego el separador segun el array aux2 en donde acumulaba las
    longitudes de cada palabra */
  text.forEach((e, i) => {
    let aux3 = e.split("");
    aux3.forEach((el) => {
      arr.push(el.charCodeAt());
      if (arr.length == aux2[i]) {
        arr.push("-");
      }
    });
  });

  //console.log(arr);
  /* Transformo el array que estaba con todos los datos ascii por separado en
  conjuntos correspondientes a las palabras enteras  */
  let array = [];
  array = arr.join().split(",-,");
  //console.log(array)
  let array2 = [];
  let array3 = [];
  /* Debido a que el join en combinacion con el split me dan
tipos de datos string los tengo que convertir en enteros para poder
ordenarlos
*/
  array.forEach((e) => {
    array2 = e.split(",").map((e) => {
      return parseInt(e);
    });
    array3.push(
      array2.sort((a, b) => {
        return a - b;
      })
    );
  });

  /* ahora tengo un array de arrays en el cual ya puedo hacer las comparaciones
y poder ir eliminando los anagramas repetidos
*/
  let auxiliar = [];

  //console.log(array3[1]);

  for (let i = 0; i < array3.length; i++) {
    let x = array3[i];
    let y = array3[i + 1];

    if (JSON.stringify(x) == JSON.stringify(y)) {
      auxiliar.push(i + 1);
      array3.splice(i + 1, 1);
      text.splice(i + 1, 1);
      i = i - 1;
    }
  }
  //console.log(auxiliar);
  //console.log(array3);
  /* Finalmente ordeno el resultado */
  console.log(text.sort());
}

funWithAnagrams(["code", "doce", "ecod", "framer", "frame"]);
