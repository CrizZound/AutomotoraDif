export const enviarDatos = ( modelo, color, imagen) => {
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

            const nuevoHTML = new XMLSerializer().serializeToString(doc);
            
            document.body.innerHTML = nuevoHTML;


        })
        .catch((error) => {
            console.error (`Error al cargar los datos: ${error}`);
        })
}