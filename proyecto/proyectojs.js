//funcion
function validacion(horizontal, vertical){
if((fila>=1)&&(fila<=6)&&(columna>=1)&&(columna<=6))
  {
    alert("todo correcto")
  }
}

//variables fila y columna
var fila=Number(prompt("Introduzca numero de fila"))
var columna=Number(prompt("Introduzca numero de columna"))

//aplicar function
validacion = validacion(fila,columna)

//ifs
if (fila > 6) {alert("Fila no es valida")

}

if (fila < 1) {alert("Fila no es valida")

}

if (columna > 6) {alert("Columna no es valida")

}

if (columna < 1 ) {alert("Columna es no valida")

}

//arrays filas

var fila1=Array(1,2,3,4,5,6);
var fila2=Array(2,2,3,4,5,6);
var fila3=Array(3,2,3,4,5,6);
var fila4=Array(4,2,3,4,5,6);
var fila5=Array(5,2,3,4,5,6);
var fila6=Array(6,2,3,4,5,6);
//arrays colores

var colores1=Array("blue","yellow","pink","red","yellow","blue");
var colores2=Array("blue","white","pink","red","yellow","blue");
var colores3=Array("blue","yellow","blue","red","red","pink");
var colores4=Array("pink", "white", "pink", "red", "green", "red");
var colores5=Array("green","white","green","green","white","yellow");
var colores6=Array("green","white","pink","white","green","yellow");

var long1=fila1.length
var long2=fila2.length
var long3=fila3.length
var long4=fila4.length
var long5=fila5.length
var long6=fila6.length


function tablero(){
  for(let i=0; i <long1; i++){
    console.log(fila1[i]+ " con " +colores1[i]);
  }
}
for(let i=0; i <long1; i++){
  console.log(fila2[i]+ " con " +colores2[i]);
}
for(let i=0; i <long1; i++){
  console.log(fila3[i]+ " con " +colores3[i]);
}
for(let i=0; i <long1; i++){
  console.log(fila4[i]+ " con " +colores4[i]);
}
for(let i=0; i <long1; i++){
  console.log(fila5[i]+ " con " +colores5[i]);
}
for(let i=0; i <long1; i++){
  console.log(fila6[i]+ " con " +colores6[i]);
}

tablero()

var posInicial=[0,0]
var posFinal=[0,0]

var num1 = +Math.floor((Math.random() * 6)+1 );
var num2 = +Math.floor((Math.random() * 6)+1 );
var num3 = +Math.floor((Math.random() * 6)+1 );
var num4 = +Math.floor((Math.random() * 6)+1 );

while(num1 === num3){
  num3 = +Math.floor((Math.random()*6)+1)
}

while(num2 === num4){
  num4 = +Math.floor((Math.random()*6)+1)
}

function caAleatoria(){
  for(var i = 0; i < 1; i++)
  console.log(posInicial[posInicial.length -2] = num1);
}

for (var i=0; i < 1; i++){
  console.log(posInicial[posInicial.length -1] = num2)
  };


for (var i=0; i < 1; i++){
  console.log(posFinal[posFinal.length -2] = num3)
  };


for (var i=0; i < 1; i++){
  console.log(posFinal[posFinal.length -1] = num4)
  };


var random =caAleatoria()

console.log(`Posicion inicial ${posInicial}`)
console.log(`Posicion final ${posFinal}`)
