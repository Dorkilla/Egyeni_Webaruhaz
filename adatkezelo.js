export function rendez(lista, irany) {
  /* rendez(lista) -> rendezettLista | a paraméterében kapott listát név szerint megrendezi;   */
  lista.sort(function (e1, e2) {
    /*  név szerint */
    let eredmeny = 1;
    if (e1.nev < e2.nev) {
      eredmeny = -1;
    }
    //ha a visszatérési értéke pozitív, akkor nem cserél, ha negatív, akkor cserél */
    return eredmeny * irany;
  });
  
  return lista;
}

export function szures(lista, keresoSzoveg) {
  /* 
-> szurtLista | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében. mindez akkor fut le, ha beírunk valamit a keresőmezőbe.  */
  const szurtLISTA = lista.filter(function (termekek) {
    return termekek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLISTA;
}

export function torol(lista, id) {
  /* torol(lista,id )->tLista | kitorli a listából az adott id-jű elemet.*/

  lista.splice(id, 1);
  return lista;
}