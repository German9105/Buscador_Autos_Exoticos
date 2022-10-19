const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");
const clase = document.querySelector("#clase");

const max = new Date().getFullYear();
const min = max - 10;


//?Paso 4: Generar objeto 
const datosBusqueda = {
    marca:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas: "",
    transmision:"",
    color:"",
    clase:"",
};

//? Paso 2: Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos); //Muestra los autos al cargar
    llenarSelect(); //Muestra los años de los autos
}); 

//? Paso 5: Crear un event listener para cada select de busqueda

marca.addEventListener("change", e => {
    datosBusqueda.marca = e.target.value;
    console.log(resultado);
    filtrarAuto();
}); 
    
year.addEventListener("change", e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
}); 

minimo.addEventListener("change", e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
}); 

maximo.addEventListener("change", e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
}); 

puertas.addEventListener("change", e => {
    datosBusqueda.puertas =  parseInt(e.target.value);
    filtrarAuto();
}); 

transmision.addEventListener("change", e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});


color.addEventListener("change", e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

clase.addEventListener("change", e => {
    datosBusqueda.clase = e.target.value;
    filtrarAuto();
});



//? Paso 3:  Funciones
function mostrarAutos(autos) { //*1
    limpiarHTML(); // Elimina el HTML previo
    autos.forEach( auto => {
        const {marca,modelo,year,precio,puertas,color,transmision,clase} = auto;
        const autoHtml = document.createElement("p");
        autoHtml.textContent = `
        ${marca} ${modelo} - Año: ${year} - $${precio}.00 MXN - Puertas: ${puertas} - ${color} - Transmision: ${transmision} - Tipo: ${clase}`;
        //Insertar en el HTML
        resultado.appendChild(autoHtml);
            })
            };

//? Paso 7: Limpiar HTML
function limpiarHTML () {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }


}

//?Genera los años del select      
 function llenarSelect(){ //* 2
     for( let i = max; i >= min; i--){
        const opcion = document.createElement("option")
              opcion.value = i;
              opcion.textContent = i;
              year.appendChild(opcion); //Agrega las opciones de año al select
            }
           };   
 
//? Paso 6: Funcion que filtra en base a la busqueda

function filtrarAuto() { //* 3
    const resultado = autos.filter (filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor).filter(filtrarClase);
    
    console.log(resultado);

    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}
function noResultado () {
    limpiarHTML();
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta","error");
    noResultado.textContent = "Sin resultados de busqueda";
    resultado.appendChild(noResultado);


}

function filtrarMarca (auto) { //* 4
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
        return auto;
}

function filtrarYear (auto) { //* 5
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
        return auto;
}

function filtrarMinimo (auto) { //* 6
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
        return auto;
}

function filtrarMaximo (auto) { //* 7
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
        return auto;
}

function filtrarPuertas (auto) { //* 8
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
        return auto;
}

function filtrarTransmision (auto) { //* 8
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
        return auto;
}

function filtrarColor (auto) { //* 8
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
        return auto;
}

function filtrarClase (auto) { //* 9
    if(datosBusqueda.clase){
        return auto.clase === datosBusqueda.clase;
    }
        return auto;
}

 

        
        
