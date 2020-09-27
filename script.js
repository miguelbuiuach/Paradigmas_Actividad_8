
const operacionFlechita = () => {
    nombre = document.getElementById('nombre').value;
    sexo = document.getElementById('sexo').value;

    var resultado2;

    sexo == "masculino" ? resultado2 = (`Bienvenido ${nombre}`) : resultado2 = (`Bienvenida ${nombre}`);

    document.getElementById('resultado').innerHTML = resultado2;
    
}