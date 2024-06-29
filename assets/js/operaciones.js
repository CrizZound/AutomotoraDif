export const enviarDatos = ( modelo, color, imagen, descripcion, precio) => {
    const rutaArchivoHtml = '../autos.html';

    fetch(rutaArchivoHtml)
        .then(response => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString (html, 'text/html');

            const imagePage = doc.getElementById('ImagePage');
            imagePage.src = imagen;

            const titlePage= doc.getElementById('titlePage');
            titlePage.textContent = modelo;

            const colorPage = doc.getElementById('colorPage');
            colorPage.textContent = color;

            const precioPage = doc.getElementById('precioPage');
            precioPage.textContent = precio;


            const descripcionPage = doc.getElementById('descripcionPage');
            descripcionPage.textContent = descripcion;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);
            
            document.body.innerHTML = nuevoHTML;


        })
        .catch((error) => {
            console.error (`Error al cargar los datos: ${error}`);
        })
}