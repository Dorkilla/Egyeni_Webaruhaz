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

export function termekHozzaadasaKosarhoz() {
  $(".gomb").click(function () {
    const index = $(this).data("index");
    const termek = KUBULISTA[index];
    kosarFrissitese(termek);
  });
}

function kosarFrissitese(termek) {
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
        <tbody>
          <tr>
            <td>${termek.nev}</td>
            <td>${termek.ar} Ft</td>
            <td>1</td>
            <td><button class="torles-gomb" data-termek="${termek.nev}">Törlés</button></td>
          </tr>
        </tbody>
      </table>
      <div class="osszesen">
        <h3>Összesen: ${termek.ar} Ft</h3>
      </div>
    </div>`;
  
  $(".kosar").html(kosarHTML);
}