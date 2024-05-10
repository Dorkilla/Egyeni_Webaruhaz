export function szures(lista, keresoSzoveg) {
  const szuroLISTA = lista.filter(function (termek) {
    return termek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szuroLISTA;
}

export function rendezNev(lista, irany) {
  lista.sort(function (e1, e2) {
    let nev1 = e1.nev.toUpperCase();
    let nev2 = e2.nev.toUpperCase();
    if (nev1 < nev2) {
      return -1 * irany;
    }
    if (nev1 > nev2) {
      return 1 * irany;
    }
    return 0;
  });
  return lista;
}

export function rendezAr(lista, irany) {
  lista.sort(function (e1, e2) {
    return (e1.ar - e2.ar) * irany;
  });
  return lista;
}

export function kartyakMegjelenitese(txt) {
  const oldalDivELEM = $("#termekKartyak");
  oldalDivELEM.html(txt);
}