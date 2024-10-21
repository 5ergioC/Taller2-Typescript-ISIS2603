import { Serie } from "./Serie.js";
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series')!;

let cardD: HTMLElement = document.getElementById('cardDetails')!;
let imageD: HTMLImageElement = document.getElementById('imageDetails') as HTMLImageElement;
let titleD: HTMLElement = document.getElementById('titleDetails')!;
let descriptionD: HTMLElement = document.getElementById('descriptionDetails')!;
let linkD: HTMLAnchorElement = document.getElementById('linkDetails') as HTMLAnchorElement;

mostrarSeries();
mostrarPromedioSeries();

function mostrarSeries(): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="serie-link" data-serie-id="${serie.id}">${serie.nombre}</a></td>
            <td>${serie.plataforma}</td>
            <td>${serie.temporadas}</td>
        `;
        seriesTbody.appendChild(trElement);
        trElement.querySelector('.serie-link')!.addEventListener('click', () => {
            showCard(serie);
        });
    }
    seriesTable.appendChild(seriesTbody);
}

function mostrarPromedioSeries(): void {
    let totalTemporadas: number = 0;
    let numSeries: number = series.length;
    for (let serie of series){ 
        totalTemporadas += serie.temporadas;
    }

    var promedioTemporadas = Math.round(totalTemporadas / numSeries);
    var averageSeasonsText = document.getElementById('averageSeasonsText');
    if (averageSeasonsText) {
        averageSeasonsText.textContent = `Seasons average: ${promedioTemporadas.toFixed(2)}`;
    }
}
// Tuve que cambiar el link de las fotos a fin de seguir sacandolo de un link externo pero que funcionara, en lugar de solo descargarlas
function showCard(serie: Serie): void {
    cardD.style.display = "block";
    imageD.alt = serie.nombre;
    imageD.src = serie.foto;
    titleD.textContent = serie.nombre;
    descriptionD.textContent = serie.sinapsis;
    linkD.href = serie.link;
}