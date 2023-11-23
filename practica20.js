
/* Crear la funcion denominada 'validarTaxi que reciba
un objeto literal con varios atributos, incluido el anio 
de fabricacion. Luego calcular la vida util del taxi y, 
si es menor a 10 anios, devolver true; de lo contrario, devolver false. */
let vehiculo = 

{
    marca: 'Hyundai',
    fabrication: 2013,
    modelo: "Santa Fe",
    color: "Amarillo"
} 

function validateTaxi (vehicle) 

{

    let currentYear = 2023;
    let years = currentYear - vehicle.fabrication;

    if (years<=10) 
    {
        alert ("Es Valido")
        } 

    else 
    {
        alert("No es Valido")
    }
} 


let result = validateTaxi (vehiculo)




