function saludo(){
    alert("Bienvenido amiga");
}


function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function rectangulo(){
    var figura= document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
}

function topmove(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("topmove");
}

function Left(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Left");
}

function Right(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Right");
}

function Bottom(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("Bottom");
}

function diagonal(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("diagonal");
}

function imagen(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("imagen");
}

function rombo(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");
}



// algoritmos
function suma( ){
    
    var A = 0;
    var B = 0;
   var suma = 0;
    A= parseInt (prompt("ingresa el primer valor: "));
    B= parseInt (prompt("ingresa el segundo valor: "));
    var suma = A + B ; 
    alert("el resultado de la suma es" + suma);

}

function operaciones (){

    var A = 0;
    var B = 0;
    var suma = 0;
    A= parseInt (prompt("ingrese el valor:"));
    B= parseInt (prompt("ingrese el valor:"));
    var suma = A + B ;
    alert("el resultado de la suma es" + suma);


    var A = 0;
    var B = 0;
    var resta = 0;
    A= parseInt (prompt("ingrese el valor:"));
    B= parseInt (prompt("ingrese el valor:"));
    var resta = A - B ;
    alert("el resultado de la resta es" + resta);

    var A = 0;
    var B = 0;
    var multiplicacion = 0;
    A= parseInt (prompt("ingrese el valor:"));
    B= parseInt (prompt("ingrese el valor:"));
    var multiplicacion = A * B ;
    alert("el resultado de la multiplicacion es" + multiplicacion);

    var A = 0;
    var B = 0;
    var division = 0;
    A= parseInt (prompt("ingrese el valor:"));
    B= parseInt (prompt("ingrese el valor:"));
    var division = A / B ;
    alert("el resultado de la division es" + division);

}

function area () {
    var base = 0 ;
    var altura = 0 ;
    var area = 0 ;
    base = parseInt(prompt("ingrese la base:"));
    altura = parseInt(prompt("ingrese la altura:"));
    var area = base * altura / 2 ;
    alert(" el resultado del area es " + area);
}
   
 function promedio () {
    var a = 0 ;
    var b = 0 ;
    var c = 0 ;
    var d = 0 ;
    var e = 0 ;
    var f = 0 ;
    var g = 0 ;

    var promedio = 0;
    a = parseInt(prompt("ingrese la nota:"));
    b = parseInt(prompt("ingrese la nota:"));
    c = parseInt(prompt("ingrese la nota:"));
    d = parseInt(prompt("ingrese la nota:"));
    e = parseInt(prompt("ingrese la nota:"));
    f = parseInt(prompt("ingrese la nota:"));
    g = parseInt(prompt("ingrese la nota:"));
  
    var promedio = a + b + c + d + e + f + g / 7 ;
   if (promedio >= 6.2){
    alert(" el alumno aprobo ");
   }else{
    alert(" el alumno no aprobo ");
   }

 }

    function porcentaje(){
    
        var tiempo = 0 ;
        var capital = 0;
        var ganancia = 0;
        var total=0;
    
        alert ("programa de descuento");
        tiempo =  parseInt(prompt("ingrese el tiempo"));
        capital = parseInt(prompt("ingrese cantidad a invertir "));
        ganancia = (capital*0.204) *tiempo;
        total =capital+ganancia;
        alert ("la ganancia total es: "+ ganancia);
        alert ("el total es: " + total);
      }

