//console.log, dice que es para interactuar con la consola...No entendí.
alert("Hola pibe")

var nombre ="Damián";
var edad = 32;
//Puedo usar una variable que una la información de otras con el '+', el único problema es que es demasiado
//engorroso si tengo que seguir haciendolo cuando el contenido es grande.
var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Mi información básica</h1>
<h2>Mi primer nombre es: ${nombre}</h2>
<h3>Mi edad es: ${edad} años</h3>
`;