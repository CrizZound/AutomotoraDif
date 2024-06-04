import { enviarDatos } from "./operaciones.js";

const obtenerDigimones = async() => {
    try{
        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(`El error es: ${error}`);
    }
}

const crearTarjetas = (digimones) =>{

    let digimonRow = document.getElementById("digimonRow");

    digimones.map((digimon) =>{
        const {name, level : nivel, img : imagen} = digimon;

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
        titulo.textContent = name;

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = nivel;

        const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent= "Ver detalles";
        btnMostrar.addEventListener("click", () => {
            enviarDatos(name, nivel, imagen);
        })

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(btnMostrar);

        digimonRow.appendChild(divRow);
    })
}

obtenerDigimones()
    .then((digimones) => {
       crearTarjetas(digimones);
    })
    .catch((error) => {
        console.log(error);
    })
    