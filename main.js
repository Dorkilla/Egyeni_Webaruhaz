import { KUBULISTA } from "./adatok.js";
import { htmlOsszeallitKartyak, kartyakMegjelenitese } from "./fuggvenyek.js";

//Termékkártyák összeállítása
const termekKartyakHTML = htmlOsszeallitKartyak(KUBULISTA);

// Termékkártyák megjelenítése az oldalon
kartyakMegjelenitese(termekKartyakHTML);

//Kártyák elrendezésének frissítése az oldal betöltésekor és az ablak méretének változásakor
$(document).ready(kartyakElrendezese);
$(window).resize(kartyakElrendezese);

//Kártyák elrendezésének dinamikus beállítása
function kartyakElrendezese() {
    const cardContainer = $(".termekek");
    const cardWidth = cardContainer.find(".card").first().outerWidth(true); // Kártya szélessége, beleértve a margókat is
    const containerWidth = cardContainer.width(); // Kártya konténer szélessége
    const cardsPerRow = Math.floor(containerWidth / cardWidth); // Kártyák száma egy sorban

    //Kártyák konténerének szélessége
    cardContainer.css("max-width", cardsPerRow * cardWidth + "px");
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

let irany = 1; /* 1 - növekvő rendezés , -1 csökkenő rendezés */
init(KUBULISTA);
szuresEsemeny();

function init(lista) {
    kartyakMegjelenitese(htmlOsszeallitKartyak(lista));
    rendezEsemeny();
    torolEsemeny();
}

//a függvény akkor fut le, ha a táblázat név fejlécére kattintunk. */
function rendezEsemeny() {
  const nevELEM = $(".termekek table th").eq(0);
  nevELEM.on("click", function () {
    const rendezesLISTA = rendez(KUBULISTA, irany);
    console.log(rendezesLISTA);
    init(rendezesLISTA);
    irany *= -1;
  });
}

function szuresEsemeny() {
    /* akkor kell lefutnia, ha megváltozik a keresőmező tartalma */
    const keresoELEM = $("#szuro");
    keresoELEM.on("keyup", function () {
      let keresoSzoveg = keresoELEM.val();
      const szLISTA = szures(KUBULISTA, keresoSzoveg);
      init(szLISTA);
    });
}

function torolEsemeny() {
    /* Akkor fog lefutni, ha sor melletti torol gombra kattintunk.  */
    const torolGOMB = $(".torol");
    torolGOMB.on("click", function (event) {
      /*  event.target az az elem, amelyik kiváltotta az eseményt */
      let id = event.target.id;
      console.log(id);
      const LISTA = torol(KUBULISTA, id);
      init(LISTA);
    });
}





