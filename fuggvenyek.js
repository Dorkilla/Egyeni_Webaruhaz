export function htmlOsszeallitNav(aktualisIndex) {
    const oldalLista = ["Termékek", "Kosár", "Személyes Adatok"];
    let txtN = "";
    txtN += `<div class='container-fluid'>`;
    txtN += `<ul class="navbar-nav">`;
    for (let index = 0; index < oldalLista.length; index++) {
        let osztaly = (index === aktualisIndex) ? "active nav-link" : "nav-link";
        txtN += `<li class="nav-item"><a class="${osztaly}" href='index.html'>${oldalLista[index]}</a></li>`;
    }
    txtN += `</ul>`;
    txtN += `</div>`;
    return txtN;
}

export function megjelenit(txtN) {
    const oldalDivELEM = $(".oldal");
    oldalDivELEM.html(txtN);
}

export function htmlOsszeallitKartyak(KUBULISTA) {
    let htmlKartyak = "";
    KUBULISTA.forEach((termek) => {
      htmlKartyak += `
        <div class="col-4">
          <div class="card">
            <img src="${termek.kep}" class="card-img-top" alt="${termek.nev}" />
            <div class="card-body">
              <h5 class="card-title">${termek.nev}</h5>
              <p class="card-text">${termek.leiras}</p>
              <p class="card-text">Ár: ${termek.ar} Ft</p>
            </div>
          </div>
        </div>
      `;
    });
    return htmlKartyak;
  }
  

export function kartyakMegjelenitese(txt) {
    const oldalDivELEM = $(".kartyak");
    oldalDivELEM.html(txt);
}

export function rendezes(lista) {
    const nevELEM = $("#NovekvoNev");
    const nevELEM2 = $("#CsokkenoNev");
    const arELEM = $("#NovekvoAr");
    const arELEM2 = $("#CsokkenoAr");
    const meretELEM = $("#NovekvoMeret");
    const meretELEM2 = $("#CsokkenoMeret");

    nevELEM.on("click", function () {
        const rLISTA = rendezNev(lista, 1, "nev");
        init(rLISTA);
    });
    nevELEM2.on("click", function () {
        const rLISTA = rendezNev(lista, -1, "nev");
        init(rLISTA);
    });
    arELEM.on("click", function () {
        const rLISTA = rendezAr(lista, 1);
        init(rLISTA);
    });
    arELEM2.on("click", function () {
        const rLISTA = rendezAr(lista, -1);
        init(rLISTA);
    });
    meretELEM.on("click", function () {
        const rLISTA = rendezNev(lista, 1, "datum");
        init(rLISTA);
    });
    meretELEM2.on("click", function () {
        const rLISTA = rendezNev(lista, -1, "datum");
        init(rLISTA);
    });
}
