import { KUBULISTA } from "./adatok.js";
import { htmlOsszeallitKartyak, kartyakMegjelenitese, frissitKosar } from "./fuggvenyek.js";
import { rendez, szures } from "./adatkezelo.js";

//Kártyák elrendezésének dinamikus beállítása
function kartyakElrendezese() {
  const kartyaContainer = $(".termekek");
  const kartyaSzelesseg = kartyaContainer.find(".card").first().outerWidth(true); // Kártya szélessége, beleértve a margókat is
  const containerSzelesseg = kartyaContainer.width(); // Kártya konténer szélessége
  const kartyaSoronkent = Math.floor(containerSzelesseg / kartyaSzelesseg); // Kártyák száma egy sorban

  //Kártyák konténerének szélessége soronként
  kartyaContainer.css("max-width", kartyaSoronkent * kartyaSzelesseg + "px");
}

//Menüpontok közötti váltás
$(document).ready(function () {
  // Kezdetben csak a termékek és a kosár jelenik meg
  $(".szemelyes-adatlap").hide();

  // Termékek oldalra lapozás esetén
  $("#termekLink").click(function () {
    $(".termekek, .kosar-es-osszeg").show();
    $(".szemelyes-adatlap").hide();
  });

  // Személyes adatlapra lapozás esetén
  $("#szemelyesAdatlapLink").click(function () {
    $(".termekek, .kosar-es-osszeg").hide();
    $(".szemelyes-adatlap").show();
  });
});


let irany = 1;
init(KUBULISTA);

function init(lista) {
  const rendezesLISTA = rendez(lista, irany);
  kartyakMegjelenitese(htmlOsszeallitKartyak(rendezesLISTA));
  rendezEsemeny();
  szuresEsemeny();
}

function rendezEsemeny() {
  const nevELEM = $("#NovekvoNev");
  nevELEM.on("click", function () {
    irany *= -1;
    const rendezettLista = rendez(KUBULISTA, irany);
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });
  init(rendezettLista)
}

function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let keresoSzoveg = keresoELEM.val();
    const szLISTA = szures(KUBULISTA, keresoSzoveg);
    kartyakMegjelenitese(htmlOsszeallitKartyak(szLISTA));
  });
  init(szLISTA)
}




