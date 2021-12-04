
// test previos
// let p1 = 'hola'
// let p2 = '(hola)'
// let p3 = '(()'
// let p4 = '(:)'
// let p5 = '(:()'
// let p6 = 'hoy pm: fiesta :):)'
// let p7 = ':(('
// let p8 = 'a (b (c (d) c) b) a :)'
// let p9 = '::(((todosiremos a:)'

// const rest = 'asd'
// let acumulador = 0
// b = p9

// for (var i = 0; i < b.length; i++) {
//   if(b.charAt(i) === '(') {
//     acumulador = acumulador + 1
//     if(b.charAt(i-1) === ':'){
//       console.log(b.charAt(i-1))
//       acumulador = acumulador - 1
//     }
//   }
//   if(b.charAt(i) === ')') {
//     acumulador = acumulador - 1
//     if(b.charAt(i-1) === ':'){
//       acumulador = acumulador + 1
//       if((b.charAt(i-2) === '(') || (acumulador > 0)){
//        acumulador = acumulador - 1
//       }
//     }
//   }

// }

// Funcion que recive el valor a evaluar y retonar si es correcto o no, mediante un numero que hara el control
function evaluarStrint (valor){
  let acumulador = 0
  b = valor
  for (var i = 0; i < b.length; i++) {
    if(b.charAt(i) === '(') {
      acumulador = acumulador + 1
      if(b.charAt(i-1) === ':'){
        console.log(b.charAt(i-1))
        acumulador = acumulador - 1
      }
    }
    if(b.charAt(i) === ')') {
      acumulador = acumulador - 1
      if(b.charAt(i-1) === ':'){
        acumulador = acumulador + 1
        if((b.charAt(i-2) === '(') || (acumulador > 0)){
         acumulador = acumulador - 1
        }
      }
    }
  }
  if ( acumulador === 0 ){
    console.log('correcto')
    console.log(acumulador)
  
  }else if ( acumulador !=  0 ) {
    console.log('incorrecto')
    console.log(acumulador)
  
  } 
  return acumulador
}

// Obteniendo los valores de mis componentes html
const funcion = document.querySelector("#evaluar")
const respuesta = document.querySelector("#respuesta")

// Evento click del boton para ejecutar la funcioń
funcion.addEventListener('click', ( () => {
  const valorEvaluar = document.querySelector("#valor").value 
  console.log(valorEvaluar, 'valor evaluar')
  const respFinal = evaluarStrint(valorEvaluar)
  console.log('click')
  if( respFinal === 0 ){
  respuesta.innerHTML = "Correcto"

  }else if(respFinal != 0){
  respuesta.innerHTML = "Incorrecto"
  }
  
}))