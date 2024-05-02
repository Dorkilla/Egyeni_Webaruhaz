import { KUBULISTA } from "./adatok.js";

function termekHozzaadasaAKosarhoz(termekNeve, darab) {
    const termek = KUBULISTA.find(termek => termek.nev === termekNeve);
    if (termek) {
        const ar = termek.ar * darab; 
        const kosarTartalom = document.getElementById("kosar-tartalom");
        const ujElem = document.createElement("li");
        ujElem.className = "list-group-item";
        ujElem.textContent = termekNeve + " - " + darab + " db - " + ar + " Ft"; 
        kosarTartalom.appendChild(ujElem);
        const osszegElem = document.getElementById("osszeg");
        let osszeg = parseInt(osszegElem.textContent); 
        osszeg += ar; 
        osszegElem.textContent = osszeg + " Ft"; 
    } else {
        console.error(`Nem található termék: ${termekNeve}`);
    }
}

function frissitTabla(lista = KUBULISTA) {
    const tbody = document.getElementById("termekLista");
    tbody.innerHTML = "";
    lista.forEach(termek => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${termek.nev}</td>
            <td>${termek.iz}</td>
            <td>${termek.meret}</td>
            <td><img src="${termek.kep}" alt="${termek.nev}" width="50"></td>
            <td>${termek.ar}</td>
            <td>
                <input type="number" class="darabInput" value="1" min="1"> <!-- Darabszám mező -->
                <button class="btn btn-danger torlesGomb">Törlés</button>
                <button class="btn btn-primary szerkesztesGomb">Szerkesztés</button>
                <button class="btn btn-success kosarbaRak">Kosárba</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Kosárba
    const kosarbaRakButtons = document.querySelectorAll('.kosarbaRak');
    kosarbaRakButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const termekNeve = event.target.closest('tr').querySelector('td:first-child').textContent;
            const darabInput = event.target.closest('tr').querySelector('.darabInput');
            const darab = parseInt(darabInput.value);
            termekHozzaadasaAKosarhoz(termekNeve, darab);
        });
    });

    // Törlés gomb
    const torlesGombok = document.querySelectorAll('.torlesGomb');
    torlesGombok.forEach(button => {
        button.addEventListener('click', function(event) {
            const trElem = event.target.closest('tr'); 
            const termekNeve = trElem.querySelector('td:first-child').textContent;
            const darabElem = trElem.querySelector('.darabInKosar'); 
            const darab = parseInt(darabElem.textContent); 
            const ar = parseInt(trElem.querySelector('td:nth-child(5)').textContent); 
            const osszegElem = document.getElementById("osszeg");
            let osszeg = parseInt(osszegElem.textContent); 
            osszeg -= ar * darab; 
            osszegElem.textContent = osszeg + " Ft"; 
            trElem.remove(); 
            termekTorleseAKosarbol(termekNeve); 
        });
    });
    // Szerkesztés gomb 
    const szerkesztesGombok = document.querySelectorAll('.szerkesztesGomb');
    szerkesztesGombok.forEach(button => {
        button.addEventListener('click', function (event) {
            const termekNeve = event.target.closest('tr').querySelector('td:first-child').textContent;
            const darabInput = event.target.closest('tr').querySelector('.darabInput');
            const darab = parseInt(darabInput.value);
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