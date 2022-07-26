let numeroPokemon = Number(prompt("Ingrese el número del pokemon según la Pokédex del 1 al 6: "));

function pokemon(){
    switch(numeroPokemon){
        case 1:
            return("El pokemon "+ numeroPokemon + " es Balbasaur.");
            break;
        case 2: 
            return("El pokemon "+ numeroPokemon + " es Ivysaur.");
            break;
        case 3: 
            return("El pokemon "+ numeroPokemon + " es Venusaur.");
            break;
        case 4: 
            return("El pokemon "+ numeroPokemon + " es Charmander.");
            break;
        case 5: 
            return("El pokemon "+ numeroPokemon + " es Charmeleon.");
            break;
        case 6: 
            return("El pokemon "+ numeroPokemon + " es Charizard.");
            break;
        default:
            return("Ingreso un dato no permitido. ")
    }
}

function tipoPokemon(){

    if ((numeroPokemon >= 1) && (numeroPokemon <= 3)){
        return (" Este pokemon es tipo planta.");
    }
    else if ((numeroPokemon >=4) && (numeroPokemon <=6)){
        return (" Este pokemon es tipo fuego.");
    }
    else{
        return(" No tenemos información del tipo.")
    }
}

function evolucion(){
    switch(numeroPokemon){
        case 1:
            return(" Su evolución es Ivysaur.");
            break;
        case 2: 
            return(" Su evolución es Venusaur.");
            break;
        case 3: 
            return(" No tiene más evoluciones.");
            break;
        case 4: 
            return(" Su evolución es Charmeleon.");
            break;
        case 5: 
            return(" Su evolución es Charizard.");
            break;
        case 6: 
            return(" No tiene más evoluciones.");
            break;
        default:
            return(" No hay evoluciones para ese número.")
    }
}

function consulta(){
    let pregunta ="Número incorrecto. ¿Desea intentarlo nuevamente?";

    if (numeroPokemon<1 || numeroPokemon>6 || numeroPokemon == " "){
        while (confirm(pregunta)){
            numeroPokemon = Number(prompt("Ingrese el número del pokemon según la Pokédex del 1 al 6: "));
            respuesta()
        }
    }
    else{
            
            confirm (pregunta)=== false;
        }
}

function respuesta(){
    if((numeroPokemon>=1) && (numeroPokemon<=6)){
        alert(pokemon() + tipoPokemon() + evolucion());
        let pregunta2 ="¿Desea agregar otro número?"
        while (confirm(pregunta2)){
            numeroPokemon = Number(prompt("Ingrese el número del pokemon según la Pokédex del 1 al 6: "));
            alert(pokemon() + tipoPokemon() + evolucion());

        }
    }
    else{
        consulta()
    }
}

respuesta()
 
