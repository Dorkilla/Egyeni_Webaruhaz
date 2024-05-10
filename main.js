import { KUBULISTA } from "./adatok.js";
import { rendezAr, rendezNev } from "./adatkezelo.js";
import { kartyakMegjelenitese } from "./fuggvenyek.js";

export function rendezes(lista) {
    const nevELEM = $("#NovekvoNev");
    const nevELEM2 = $("#CsokkenoNev");
    const arELEM = $("#NovekvoAr");
    const arELEM2 = $("#CsokkenoAr");
    const meretELEM = $("#NovekvoMeret");
    const meretELEM2 = $("#CsokkenoMeret");

    nevELEM.on("click", function () {
        const rLISTA = rendezNev(lista, 1, "nev");
        kartyakMegjelenitese(htmlOsszeallitKartyak(rLISTA));
    });
    nevELEM2.on("click", function () {
        const rLISTA = rendezNev(lista, -1, "nev");
        kartyakMegjelenitese(htmlOsszeallitKartyak(rLISTA));
    });
    arELEM.on("click", function () {
        const rLISTA = rendezAr(lista, 1);
        kartyakMegjelenitese(htmlOsszeallitKartyak(rLISTA));
    });
    arELEM2.on("click", function () {
        const rLISTA = rendezAr(lista, -1);
        kartyakMegjelenitese(htmlOsszeallitKartyak(rLISTA));
    });
    meretELEM.on("click", function () {
        const rLISTA = rendezNev(lista, 1, "meret");
        kartyakMegjelenitese(htmlOsszeallitKartyak(rLISTA));
    });
    meretELEM2.on("click", function () {
        const rLISTA = rendezNev(lista, -1, "meret");
        kartyakMegjelenitese(htmlOsszeallitKartyak(rLISTA));
    });

    const kartyakHTML = htmlOsszeallitKartyak(lista);
    kartyakMegjelenitese(kartyakHTML);
}

rendezes(KUBULISTA);