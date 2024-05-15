import { KUBULISTA } from "./adatok.js";

export function htmlOsszeallitKartyak(termekek) {
  let txt = "<div class='row row-cols-1 row-cols-md-3 g-4' style='margin-top: 20px;'>"; //Az összes kártya egy sorban helyezkedik el
  for (let index = 0; index < termekek.length; index++) {
    txt += `
      <div class="col">
        <div class="card bg-black text-white">
          <img class="card-img-top" src="${termekek[index].kep}" alt="Kép" style="object-fit: cover; height: 200px;"> <!-- A képek méretének beállítása -->
          <div class="card-body">
            <div class="termek-info"> <!-- Div elem a termék információinak -->
              <h5 class="card-title">Név:</h5>
              <h6 class="nev">${termekek[index].nev}</h6>
              <h5 class="card-title">Íz:</h5>
              <p class="iz">${termekek[index].iz}</p>
              <h5 class="card-title">Méret:</h5>
              <p class="meret">${termekek[index].meret}</p>
              <h5 class="card-title">Leírás:</h5>
              <p class="leiras">${termekek[index].info}</p>
              <h5 class="card-title">Ár:</h5>
              <p class="card-text">${termekek[index].ar} Ft</p>
              <button class="gomb" data-index="${index}" type="button">Kosárba</button>
            </div>
          </div>
        </div>
      </div>`;
  }
  txt += "</div>";
  return txt;
}

export function kartyakMegjelenitese(txt) {
  const kartyakDivELEM = $(".termekek");
  kartyakDivELEM.html(txt);
}


let kosarTartalma = [];

function frissitKosar() {  //Táblázatként megjelenít
  let kosarHTML = `
  <div class="container">
  <h2>Kosár:</h2>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Név</th>
        <th scope="col">Ár</th>
        <th scope="col">Darab</th>
        <th scope="col">Törlés</th>
      </tr>
    </thead>
    <tbody>`;
  let osszeg = 0;
  let termekDarabok = {};

  kosarTartalma.forEach(termek => {
    if (termekDarabok.hasOwnProperty(termek.nev)) { //Számolja, hogy az adott termék hányszor került bele a kosárba
      termekDarabok[termek.nev]++;
    } else {
      termekDarabok[termek.nev] = 1;
    }

    osszeg += termek.ar;  
  });

  for (let termekNev in termekDarabok) {  //Megkeresi az aktuális termékhez az adatokat 
    if (termekDarabok.hasOwnProperty(termekNev)) {
      const termekAdatok = KUBULISTA.find(termek => termek.nev === termekNev);
      kosarHTML += `
        <tr>
          <td>${termekNev}</td>
          <td>${termekAdatok.ar} Ft</td>
          <td>${termekDarabok[termekNev]}</td>
          <td><button class="torles-gomb" data-termek="${termekNev}">Törlés</button></td>
        </tr>`;
    }
  }

//Megjeleníti az összeget
  kosarHTML += `  
      </tbody>
    </table>
    <div class="osszesen">
      <h3>Összesen: ${osszeg} Ft</h3>
    </div>`;

  $(".kosar").html(kosarHTML);
}

$(document).on("click", ".gomb", function () {
  const index = $(this).data("index");
  const termek = KUBULISTA[index];

  kosarTartalma.push(termek);

  frissitKosar();
});

$(document).on("click", ".torles-gomb", function () {
  const termekNev = $(this).data("termek");

  // Megkeresi a kiválasztott terméket a kosárban
  const index = kosarTartalma.findIndex(termek => termek.nev === termekNev);

  // Ha a termék többször van
  if (kosarTartalma.filter(termek => termek.nev === termekNev).length > 1) {
    // Eltávolít egy darabot
    kosarTartalma.splice(index, 1);
  } else {
    //Ha csak egy darab van belőle 
    kosarTartalma.splice(index, 1);
  }

  frissitKosar();
});

export { frissitKosar };
