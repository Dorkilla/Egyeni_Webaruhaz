import { KUBULISTA } from "./adatok.js";
import { htmlOsszeallitKartyak, kartyakMegjelenitese, frissitKosar } from "./fuggvenyek.js";
import { rendez, szures } from "./adatkezelo.js";

//Kártyák elrendezése
function kartyakElrendezese() {
  const kartyaContainer = $(".termekek");
  const kartyaSzelesseg = kartyaContainer.find(".card").first().outerWidth(true); // Kártya szélessége
  const containerSzelesseg = kartyaContainer.width(); // Kártya konténer szélessége
  const kartyaSoronkent = Math.floor(containerSzelesseg / kartyaSzelesseg); // Kártyák száma egy sorban

  //Kártyák konténerének szélessége soronként
  kartyaContainer.css("max-width", kartyaSoronkent * kartyaSzelesseg + "px");
}

//Menüpontok közötti váltás
$(document).ready(function () {
  // Kezdetben csak a termékek és a kosár 
  $(".szemelyes-adatlap").hide();

  // Termékek oldal
  $("#termekLink").click(function () {
    $(".termekek, .kosar-es-osszeg").show();
    $(".szemelyes-adatlap").hide();
  });

  // Személyes adatlap
  $("#szemelyesAdatlapLink").click(function () {
    $(".termekek, .kosar-es-osszeg").hide();
    $(".szemelyes-adatlap").show();
  });
});


let irany = 1;
let rendezettLista = [];
let szLISTA = [];

init(KUBULISTA);

function init(lista) {
  rendezettLista = rendez(lista, irany);
  kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  rendezEsemeny();
  szuresEsemeny();
}

function rendezEsemeny() {
  const nevELEM = $("#NovekvoNev");
  nevELEM.on("click", function () {
    irany *= -1;
    rendezettLista = rendez(KUBULISTA, irany);
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });
}

function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let keresoSzoveg = keresoELEM.val();
    szLISTA = szures(KUBULISTA, keresoSzoveg);
    kartyakMegjelenitese(htmlOsszeallitKartyak(szLISTA));
  });
}




