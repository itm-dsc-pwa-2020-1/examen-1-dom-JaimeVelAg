function dark() {
  alert("modo oscuro");

  var cuerpo = document.getElementById("grid_container");
  cuerpo.classList.remove("grid-container");
  cuerpo.classList.add("grid-oscuro");

    var cabecera = document.getElementById("cabecera");
    cabecera.classList.remove("cabecera");
    cabecera.classList.add("cabecera-oscuro");

    var pie = document.getElementById("pie")
    pie.classList.remove("item-5");
    pie.classList.add("item-5oscuro");

    var slogan = document.getElementById("slogan");
    slogan.setAttribute("id", "slogan-oscuro");

    var acerca = document.getElementById("acerca");
    acerca.setAttribute("id", "acerca-oscuro");

    var item3 = document.getElementById("item-3");
    item3.classList.remove("item-3");
    item3.classList.add("item3-oscuro");

    var item2 = document.getElementById("item-2");
    item2.classList.remove("item-2");
    item2.classList.add("item2-oscuro");

    
}


function normal(){
  alert("modo normal");

  var cuerpo = document.getElementById("grid_container");
  cuerpo.classList.remove("grid-oscuro");
  cuerpo.classList.add("grid-container");

    var cabecera = document.getElementById("cabecera");
    cabecera.classList.remove("cabecera-oscuro");
    cabecera.classList.add("cabecera");

    var pie = document.getElementById("pie")
    pie.classList.remove("item-5oscuro");
    pie.classList.add("item-5");

    var slogan = document.getElementById("slogan-oscuro");
    slogan.setAttribute("id", "slogan");

    var acerca = document.getElementById("acerca-oscuro");
    acerca.setAttribute("id", "acerca");

    var item3 = document.getElementById("item-3");
    item3.classList.remove("item3-oscuro");
    item3.classList.add("item-3");

    var item2 = document.getElementById("item-2");
    item2.classList.remove("item2-oscuro");
    item2.classList.add("item-2");
}
