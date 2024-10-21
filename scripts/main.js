import { series } from './data.js';
var seriesTable = document.getElementById('series');
var cardD = document.getElementById('cardDetails');
var imageD = document.getElementById('imageDetails');
var titleD = document.getElementById('titleDetails');
var descriptionD = document.getElementById('descriptionDetails');
var linkD = document.getElementById('linkDetails');
mostrarSeries();
mostrarPromedioSeries();
function mostrarSeries() {
    var seriesTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"#\" class=\"serie-link\" data-serie-id=\"").concat(serie.id, "\">").concat(serie.nombre, "</a></td>\n            <td>").concat(serie.plataforma, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
        seriesTbody.appendChild(trElement);
        trElement.querySelector('.serie-link').addEventListener('click', function () {
            showCard(serie);
        });
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedioSeries() {
    var totalTemporadas = 0;
    var numSeries = series.length;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.temporadas;
    }
    var promedioTemporadas = Math.round(totalTemporadas / numSeries);
    var averageSeasonsText = document.getElementById('averageSeasonsText');
    if (averageSeasonsText) {
        averageSeasonsText.textContent = "Seasons average: ".concat(promedioTemporadas.toFixed(2));
    }
}
function showCard(serie) {
    cardD.style.display = "block";
    imageD.alt = serie.nombre;
    imageD.src = serie.foto;
    titleD.textContent = serie.nombre;
    descriptionD.textContent = serie.sinapsis;
    linkD.href = serie.link;
}
