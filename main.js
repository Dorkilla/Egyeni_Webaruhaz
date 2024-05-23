import { KUBULISTA } from "./adatok.js";
import { htmlOsszeallitKartyak, kartyakMegjelenitese } from "./fuggvenyek.js";
import { rendez, szures } from "./adatkezelo.js";

$(document).ready(function () {
  //Kártyák elrendezése
  const kartyaContainer = $(".termekek");
  const kartyaSzelesseg = kartyaContainer.find(".card").first().outerWidth(true); //Kártya szélessége
  const containerSzelesseg = kartyaContainer.width(); //Kártya konténer szélessége
  const kartyaSoronkent = Math.floor(containerSzelesseg / kartyaSzelesseg); //Kártyák száma egy sorban

  //Kártyák k. szélessége soronként
  kartyaContainer.css("max-width", kartyaSoronkent * kartyaSzelesseg + "px");

  //Kezdetben csak a termékek és a kosár 
  $(".szemelyes-adatlap").hide();

  // Menüpontok közötti váltás
  $("#termekLink").click(function () {
    $(".termekek, .kosar-es-osszeg").show();
    $(".szemelyes-adatlap").hide();
  });

  $("#szemelyesAdatlapLink").click(function () {
    $(".termekek, .kosar-es-osszeg").hide();
    $(".szemelyes-adatlap").show();
  });
});

let irany = 1;
let rendezettLista = [];
let szLISTA = [];

function init(lista) {
  rendezettLista = rendez(lista, irany, "nev"); 
  kartyakMegjelenitese(htmlOsszeallitKartyak(KUBULISTA));
  rendezEsemeny();
  szuresEsemeny();
}

function rendezEsemeny() {
  const nevNovekvoELEM = $("#NovekvoNev");
  const nevCsokkenoELEM = $("#CsokkenoNev");
  const arNovekvoELEM = $("#NovekvoAr");
  const arCsokkenoELEM = $("#CsokkenoAr");
  const meretNovekvoELEM = $("#NovekvoMeret");
  const meretCsokkenoELEM = $("#CsokkenoMeret");

  nevNovekvoELEM.on("click", function () {
    irany = 1;
    rendezettLista = rendez(KUBULISTA, irany, "nev");
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });

  nevCsokkenoELEM.on("click", function () {
    irany = -1;
    rendezettLista = rendez(KUBULISTA, irany, "nev");
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });

  arNovekvoELEM.on("click", function () {
    irany = 1;
    rendezettLista = rendez(KUBULISTA, irany, "ar");
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });

  arCsokkenoELEM.on("click", function () {
    irany = -1;
    rendezettLista = rendez(KUBULISTA, irany, "ar");
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });

  meretNovekvoELEM.on("click", function () {
    irany = 1;
    rendezettLista = rendez(KUBULISTA, irany, "meret");
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });

  meretCsokkenoELEM.on("click", function () {
    irany = -1;
    rendezettLista = rendez(KUBULISTA, irany, "meret");
    kartyakMegjelenitese(htmlOsszeallitKartyak(rendezettLista));
  });
}

function szuresEsemeny() {
  //Keresés esemény 
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let keresoSzoveg = keresoELEM.val();
    szLISTA = szures(KUBULISTA, keresoSzoveg);
    kartyakMegjelenitese(htmlOsszeallitKartyak(szLISTA));
  });
}


init(KUBULISTA);













