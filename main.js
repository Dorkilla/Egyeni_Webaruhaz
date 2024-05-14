import { KUBULISTA } from "./adatok.js";
import { htmlOsszeallitKartyak, kartyakMegjelenitese, frissitKosar } from "./fuggvenyek.js";
import { rendez, szures } from "./adatkezelo.js";

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


let irany = 1;

$(document).ready(function() {
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl)
    });
});

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
}

function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let keresoSzoveg = keresoELEM.val();
    const szLISTA = szures(KUBULISTA, keresoSzoveg);
    kartyakMegjelenitese(htmlOsszeallitKartyak(szLISTA));
  });
}





