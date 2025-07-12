const API_KEY = "7efe0271"

const peliculasRecomendadas = ["Rocky", "Star Wars", "Matrix", "Titanic", "Avatar", "Batman"];

document.addEventListener('DOMContentLoaded', () => {
    mostrarRecomendados();
});

function mostrarRecomendados() {
    const contenedor = document.getElementById('recomendados');
    contenedor.innerHTML = '';

    peliculasRecomendadas.forEach(titulo => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(titulo)}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    const div = document.createElement('div');
                    div.classList.add('recomendado');
                    div.innerHTML = `
                        <img src="${data.Poster !== "N/A" ? data.Poster : './placeholder.jpg'}" alt="${data.Title}">
                        <h3>${data.Title}</h3>
                    `;
                    contenedor.appendChild(div);
                }
            })
            .catch(error => {
                console.error(`Error al obtener datos de ${titulo}:`, error);
            });
    });
}




























