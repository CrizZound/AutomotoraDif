$(document).ready(function(){

    const obterDigimones = () => {
        return $.ajax({
            url: "https://digimon-api.vercel.app/api/digimon",
            method: "GET",
            daraType: "json",
            error: function(error){
                console.log(`El error es: ${error}`)
            }
        });
    }

    const enviarDatos = (name, nivel, imagen) => {
        console.log("Hola");
    }

    const crearTarjetas = (digimones) => {
        let digimonRow = $("#digimonRow");

        $.each(digimones, (index, digimon) => {

            const {name, level: nivel, img: imagen} = digimon;

            const divRow = $("<div>").addClass("col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2 mb-2");
            const card = $("<div>").addClass("card");
            const img= $("<img>").attr("src", imagen).addClass("card-img-top");
            const divBody = $("<div>").addClass("card-body");
            const titulo = $("<h5>").addClass("card-title").text(name);
            const subTitulo = $("<p>").addClass("card-text").text(nivel);
            const btnMostrar = $("<button>").addClass("btn btn-danger").text("Ver detalles");

            btnMostrar.click(() => {
                enviarDatos(name, nivel, imagen);
            });
            
            digimonRow.append(divRow);

            divRow.append(card);

            card.append(img);
            card.append(divBody);

            divBody.append(titulo);
            divBody.append(subTitulo);
            divBody.append(btnMostrar);
            
            
        })
    }

    obterDigimones()
        .then(digimones => crearTarjetas(digimones))
        .catch(error => console.log(`El error es: ${error}`))
            
        
})