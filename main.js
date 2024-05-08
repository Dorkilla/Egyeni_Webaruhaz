import { KUBULISTA } from "./adatok.js";

function termekHozzaadasaAKosarhoz(termekNeve, darab) {
    const termek = KUBULISTA.find(termek => termek.nev === termekNeve); //termék hozzáadása a kosárhoz
    if (termek) {
        const ar = termek.ar * darab;   //összeg kiszámolása
        const kosarTartalom = document.getElementById("kosar-tartalom"); //kosárba helyezés
        const ujElem = document.createElement("li");
        ujElem.className = "list-group-item"; //új elem létrehozása
        ujElem.textContent = termekNeve + " - " + darab + " db - " + ar + " Ft";
        kosarTartalom.appendChild(ujElem); //frissítés az új elemmel
        const osszegElem = document.getElementById("osszeg");
        let osszeg = parseInt(osszegElem.textContent);
        osszeg += ar;
        osszegElem.textContent = osszeg + " Ft";
    } else {
        console.error(`Nem található termék: ${termekNeve}`); //hiba üzenet
    }
}

function frissitTabla(lista = KUBULISTA) { //újra generálás(lista alapján)
    const tbody = document.getElementById("termekLista");
    tbody.innerHTML = "";
    lista.forEach(termek => {
        const tr = document.createElement("tr"); //minden elemhez új sor elem, táblázat megjelenítése, + gombok
        tr.innerHTML = ` 
            <td>${termek.nev}</td>
            <td>${termek.iz}</td>
            <td>${termek.meret}</td>
            <td><img src="${termek.kep}" alt="${termek.nev}" width="50"></td> 
            <td>${termek.ar}</td>
            <td>
                <input type="number" class="darabInput" value="1" min="1"> <!-- Darabszám mező -->
                <button class="btn btn-danger torlesGomb">Törlés</button>
                <button class="btn btn-success kosarbaRak">Kosárba</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Kosárba
    const kosarbaRakButtons = document.querySelectorAll('.kosarbaRak');
    kosarbaRakButtons.forEach(button => {
        button.addEventListener('click', function (event) { //eseménykezelő - gombnyomásra
            const termekNeve = event.target.closest('tr').querySelector('td:first-child').textContent; //adat hozzáadása adott soron belül
            const darabInput = event.target.closest('tr').querySelector('.darabInput');
            const darab = parseInt(darabInput.value);
            termekHozzaadasaAKosarhoz(termekNeve, darab); //kosárba helyezés
        });
    });
    torolEsemeny();
}

    // Törlés gomb
    function torolEsemeny() {
        const torlesGombok = document.querySelectorAll('.torlesGomb');
        torlesGombok.forEach(button => {
            button.addEventListener('click', function(event) {
                const termekNeve = event.target.closest('tr').querySelector('td:first-child').textContent;
                const lista = torol(KUBULISTA, termekNeve); 
                frissitTabla(lista); 
            });
        });
    }

document.getElementById('rendelesLead').addEventListener('click', function () {

});

document.getElementById('kosarMegjelenites').addEventListener('click', function () {

});


function vegosszegKiszamitasa() {
    let osszeg = 0;
    const kosarTetelek = document.querySelectorAll("#kosar-tartalom .list-group-item");
    kosarTetelek.forEach(tetel => {
        const arString = tetel.textContent.match(/\d+/);
        if (arString) {
            const ar = parseInt(arString[0]);
            osszeg += ar;
        }
    });
    return osszeg;
}

window.onload = function () {
    frissitTabla();

    document.getElementById("osszeg").textContent = vegosszegKiszamitasa() + " Ft";
    };
