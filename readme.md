## Specifikáció
Lista megjelenítése kártya formátumban
Lista rendezése név szerint, ár szerint, és méret szerint 
Lista szűrése név alapján
Termékek kosárba helyezése, és annak eltávolítása
Űrlap alapján rendelés leadása, személyes információk megadása
Rendelés leadása után, egy felugró üzenet kiírása

## Függvények
htmlOsszeallitKartyak(termekek):
Egy HTML stringet állít össze kártyák formájában az adott termékek adatai alapján. Paramétere a termékek tömb, ami minden termék adatait tartalmazza.

kartyakMegjelenitese(txt):
Megjeleníti a kapott HTML stringet a termékek osztályú elemen belül.

frissitKosar():
Frissíti a kosár tartalmát és megjelenítését. Összeállít egy HTML stringet, ami tartalmazza a kosárban lévő termékek nevét, árát, darabszámát és a törlés gombot. Valamint kiszámolja az összegét az összes terméknek és megjeleníti az összeget is. A kosár tartalmát a kosarTartalma tömbből veszi, ami az aktuális kosárban lévő termékeket tárolja.

$(document).on("click", ".gomb", function ()):
Figyeli a kattintást a .gomb osztályú gombokon. Amikor a gombra kattintunk az eseménykezelő által, megkapja az adott termék indexét a KUBULISTA tömbből, majd hozzáadja ezt a terméket a kosarTartalma tömbhöz. Ezután meghívja a frissitKosar függvényt a kosár frissítéséhez.

$(document).on("click", ".torles-gomb", function ()):
Figyeli a kattintást a .torles-gomb osztályú gombokon (ez a termékek törlésére szolgál a kosárból). Amikor a gombra kattintunk az eseménykezelő által megkapja a törlendő termék nevét az osztály, majd annak az indexe alapján kitörli a kosarTartalma tömbből. Ha a termék többször is szerepel a kosárban, csak egy darabot távolít el belőle, de ha csak egy darab van a kosárban, akkor az egész terméket törli. Ezután meghívja a frissitKosar függvényt a kosár frissítéséhez.

init(lista):
Meghívja a rendez és szűrés függvényeket, majd frissíti a kártyákat a kartyakMegjelenitese függvénnyel, és hozzárendeli az eseménykezelőket a rendezéshez és a szűrésekhez.

rendezEsemeny():
Különböző rendezési szempontok alapján lehet rendezni pl.: név, ár és méret alapján. Amikor a gombra kattintunk az eseménykezelő által megváltozik a rendezés iránya (meghívja a rendez függvényt) és frissíti a kártyákat a megfelelő rendezési szempontok szerint.

szuresEsemeny():
Figyeli a keresőmezőt, és amikor változás történik, meghívja a szűrés függvényt a keresőszöveggel, majd frissíti a kártyákat a szűrt eredményekkel.

rendez(lista, irany, szempont):
Rendezést végez a kapott listán az adott szempont, és irány alapján. A sort() függvényt használja a rendezéshez. A szempont változó alapján dönti el, hogy melyik mező szerint kell rendezni a listát (név, ár, méret). Az irány változó határozza meg, hogy növekvő vagy csökkenő sorrendben történjen a rendezés.

szures(lista, keresoSzoveg):
Szűrést végez a kapott listán a megadott keresőszöveg alapján. A filter() függvényt használja a szűréshez. A termékek nevének nagybetűs változatát (termekek.nev.toUpperCase()) hasonlítja össze a keresőszöveggel, ezért ugyanúgy fog reagálni, ha kis, vagy nagybetűs, nem lesz különbség.

egyebOrszagSelect.addEventListener("change", function ())
Figyeli az ország legördülő menüt. Ha az egyéb opciót választjuk, akkor megjeleníti az egyebOrszagDiv-et, ami által megadhatunk bármilyen ország nevet. Ellenkező esetben nem jeleníti meg a divet.

$(document).ready(function () )
  $("#varos").change(function ())
Figyeli a város legördülő menüt. Ha az egyéb opciót választjuk, akkor megjeleníti az egyebVarosDiv-et, ami által megadhatunk bármilyen város nevet. Ellenkező esetben nem jeleníti meg a divet.

$(document).ready(function () )
szemelyesAtvetelRadio.change(function ())
Figyeli a szemelyes_atvetel rádiógombot. Ha ezt választjuk, akkor megjeleníti az idopontDiv-et, ezáltal megadhatjuk az átvétel időpontját. Ellenkező esetben nem jeleníti meg a div-et.

function uzenetEsemeny(uzenet) 
Eseménykezelőt hoz létre a rendelés gombra, kattintás által. Ha a gombra kattintunk, egy üzenetet jelenít meg egy felugró ablakban. Itt adhatjuk meg az üzenet tartalmát is.





