export function rendez(lista, irany, szempont) {
  lista.sort(function (e1, e2) {
    let eredmeny = 0;
    if (szempont === "nev") {
      if (e1.nev < e2.nev) eredmeny = -1;
      else if (e1.nev > e2.nev) eredmeny = 1;
    } else if (szempont === "ar") {
      eredmeny = e1.ar - e2.ar;
    } else if (szempont === "meret") {
      eredmeny = e1.meret - e2.meret;
    }
    return eredmeny * irany;
  });
}

export function szures(lista, keresoSzoveg) {
  const szurtLISTA = lista.filter(function (termekek) {
    return termekek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLISTA;
}

var egyebOrszagSelect = document.getElementById("orszag");
var egyebOrszagDiv = document.getElementById("egyebOrszagDiv");

egyebOrszagSelect.addEventListener("change", function () {
  if (egyebOrszagSelect.value === "egyeb") {
    egyebOrszagDiv.style.display = "block";
  } else {
    egyebOrszagDiv.style.display = "none";
    document.getElementById("egyebOrszag").value = "";
  }
});

$(document).ready(function () {
  $("#varos").change(function () {
    if ($(this).val() === "egyeb") {
      $("#egyebVarosDiv").show();
    } else {
      $("#egyebVarosDiv").hide();
      $("#egyebVaros").val("");
    }
  });
});


$(document).ready(function () {
  var idopontDiv = $("#idopontDiv");
  var szemelyesAtvetelRadio = $("#szemelyes_atvetel");

  idopontDiv.hide(); //Kezdetben rejtve 

  szemelyesAtvetelRadio.change(function () {
    if (this.checked) {
      idopontDiv.show();
    } else {
      idopontDiv.hide();
    }
  });
});
function uzenetEsemeny(uzenet) {
  const rendelELEM = $(".rendel");
  rendelELEM.on("click", function () {
    window.alert(uzenet);
  });
}

uzenetEsemeny("Rendelésed sikeresen leadva! Hamarosan felvesszük veled a kapcsolatot.");