import { enviarDatos } from "./operaciones.js";

const obtenerAutos = async() => {
    try{
        const response = await fetch("https://api-render-f1bl.onrender.com/");
        const data = await response.json();
        return data.carModels;
    }
    catch(error){
        console.log(`El error es: ${error}`);
    }
}


const crearTarjetas = (autos) =>{

    let autoRow = document.getElementById("autoRow");

    autos.map((auto) =>{
        const {modelo, color, imagen, descripcion, precio} = auto;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img")
        img.src = imagen;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = modelo;

        const subTitulo = document.createElement("h6");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = color;

        const precioSub = document.createElement("p");
        precioSub.classList.add("card-text");
        precioSub.textContent = precio;

        const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("botonDetalle");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent= "Ver detalles";
        btnMostrar.addEventListener("click", () => {
            enviarDatos(modelo, color, imagen, descripcion, precio);
        })

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(precioSub);
        divBody.appendChild(btnMostrar);

        autoRow.appendChild(divRow);
    })
}

obtenerAutos()
    .then((autos) => {
       crearTarjetas(autos);
    })
    .catch((error) => {
        console.log(error);
    })
    