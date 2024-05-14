export function rendez(lista, irany) {
  lista.sort(function (e1, e2) {
    let eredmeny = 1;
    if (e1.nev < e2.nev) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  
  return lista;
}

export function szures(lista, keresoSzoveg) {
  const szurtLISTA = lista.filter(function (termekek) {
    return termekek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLISTA;
}