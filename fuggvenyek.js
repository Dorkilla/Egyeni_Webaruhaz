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

export function kosar(KUBULISTA, kosarTartalma) {
  $(".gomb").on("click", function (event) {
    let index = parseInt(event.target.dataset.index);
    let aktualisElem = KUBULISTA[index];
    let i = 0;
    while (i < kosarTartalma.length && aktualisElem.nev !== kosarTartalma[i].nev) {
      i++;
    }
    if (i < kosarTartalma.length) {
      while (kosarTartalma[i].db < 5) {
        kosarTartalma[i].db++;
      }
    } else {
      aktualisElem.db = 1;
      kosarTartalma.push(aktualisElem);
    }
    megjelenitKosar(kosarOsszeallit(kosarTartalma));
    let osszeg = kosarOsszeg(kosarTartalma);
    $(".osszesen #osszeg").text(`${osszeg} Ft`);
  });
}