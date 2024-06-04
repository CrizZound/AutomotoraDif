export const enviarDatos = (name, nivel, imagen) => {
    const rutaArchivoHtml = '../personaje.html';

    fetch(rutaArchivoHtml)
        .then(response => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString (html, 'text/html');

            const imagePage = doc.getElementById('ImagePage');
            imagePage.src = imagen;

            const titlePage= doc.getElementById('titlePage');
            titlePage.textContent = name;

            const nivelPage = doc.getElementById('nivelPage');
            nivelPage.textContent = nivel;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);
            
            document.body.innerHTML = nuevoHTML;


        })
        .catch((error) => {
            console.error (`Error al cargar los datos: ${error}`);
        })
}