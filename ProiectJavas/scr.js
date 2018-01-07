function data2() {
  var a = document.getElementById("data1");
  var d = new Date();
  a.innerHTML = d.toDateString();

  //adaug "CSS"
  a.style.backgroundColor = "white";
  a.style.height = "auto";
  a.style.width = "auto";
}

function scroll() {
  var b = document.body;
  var i = 1;
  var dreapta = 0; // sa stiu cand sunt in dreapta
  b.addEventListener("keydown", function(e) {
    var x = e.keyCode; //codul tastei apasate
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
    if ((x === 32 || x === 40) && (!dreapta)) {

      switch (i) {
        case 1:
          document.getElementById("a1").click();
          i++;
          break;
        case 2:
          document.getElementById("a2").click();
          i++;
          break;
        case 3:
          document.getElementById("a3").click();
          i++;
          break;
        case 4:
          document.getElementById("a4").click();
          i++;
          break;
          /*      case 5:
                document.getElementById("a5").click();
                                i++;
                                break;*/
        default:
          document.getElementById("a0").click();
          i = 1;


      }
    } else {
      if ((x === 38) && (!dreapta)) {
        switch (i) {
          case 1:
            break;
          case 2:
            document.getElementById("a0").click();
            i--;
            break;
          case 3:
            document.getElementById("a1").click();
            i--;
            break;
          case 4:
            document.getElementById("a2").click();
            i--;
            break;
          case 5:
            document.getElementById("a3").click();
            i--;
            break;
            /*          case 6:
                      document.getElementById("a4").click();
                                      i--;
                                      break;*/
          default:
            i = 1;
        }
      }
    }
    if (x === 39) //dreapta
    {
      switch (i) {
        case 2:
          document.getElementById("d1").click();
          dreapta = 1;
          break;
        case 3:
          document.getElementById("d2").click();
          dreapta = 1;
          break;

        case 4:
          document.getElementById("d3").click();
          dreapta = 1;
          break;

        default:
          break;

      }
    }
    if ((x === 37) && (dreapta === 1)) //stanga
    {
      switch (i) {
        case 2:
          document.getElementById("a1").click();
          dreapta = 0;
          break;
        case 3:
          document.getElementById("a2").click();
          dreapta = 0;
          break;
        case 4:
          document.getElementById("a3").click();
          dreapta = 0;
          break;
        default:
          break;
      }
    }

  }, false);

  //butoane: JOS
  var jos = document.querySelectorAll(".jos");
  for (var j1 = 0; j1 < jos.length; j1++)
    jos[j1].onclick = function() {
      switch (i) {
        case 1: //header i=1
          document.getElementById("a1").click(); //rock
          i = 2;
          break;
        case 2: //rock
          document.getElementById("a2").click(); //folk
          i = 3;
          break;
        case 3: //folk
          document.getElementById("a3").click(); //pop
          i = 4;
          break;
        case 4: //pop
          document.getElementById("a4").click(); //mai multe
          i = 5;
          break;
        default:
          break;
      }
    };

  //butoane: DREAPTA
  var drp = document.querySelectorAll(".dreapta");
  for (var j1 = 0; j1 < drp.length; j1++)
    drp[j1].onclick = function() {
      switch (i) {
        case 2: //rock
          document.getElementById("d1").click(); //ro-vid
          dreapta = 1;
          break;
        case 3: //pop
          document.getElementById("d2").click(); //folk
          dreapta = 1;
          break;
        case 4: //folk
          document.getElementById("d3").click(); //pop
          dreapta = 1;
          break;
        default:
          break;
      }
    };

  //butoane: STANGA
  var stg = document.querySelectorAll(".stanga");
  for (var j1 = 0; j1 < stg.length; j1++)
    stg[j1].onclick = function() {
      switch (i) {
        case 2: //rock
          document.getElementById("a1").click(); //ro-vid
          dreapta = 0;
          break;
        case 3: //pop
          document.getElementById("a2").click(); //folk
          dreapta = 0;
          break;
        case 4: //folk
          document.getElementById("a3").click(); //pop
          dreapta = 0;
          break;
        default:
          break;
      }
    };
  //butoane: SUS
  var sus = document.querySelectorAll(".sus");
  for (var j1 = 0; j1 < sus.length; j1++)
    sus[j1].onclick = function() {
      switch (i) {
        case 2: //rock
          document.getElementById("a0").click(); //header
          i = 1;
          break;
        case 3: //folk
          document.getElementById("a1").click(); //rock
          i--;
          break;
        case 4: //pop
          document.getElementById("a2").click(); //folk
          i--;
          break;
        case 5: //altele
          document.getElementById("a3").click(); //pop
          i--;
          break;
        default:
          break;
      }
    };

}

function stil() {
  var but = document.getElementById("stil");
  but.onclick = function() {
    var st = window.getComputedStyle(but, null).getPropertyValue("position");
    alert("My (mr. Button) position is: " + st);
  };
}

function timp() {
  var i = 0;
  setInterval(function() {
    i++;
    var v = document.getElementById("pt");
    v.innerHTML = st + i + st2;
  }, 60000, st = "Ati petrecut ", st2 = " min pe site"); //1 min
}

function reclama() {

  var distrug = document.getElementById("dis");
  var as = document.getElementById("as");
  var but = document.getElementById("s1");
  if (localStorage.getItem("name") != null) {
    as.removeChild(distrug);
    var h = document.createElement("h3");
    var node = document.createTextNode("Hi, " + localStorage.getItem("name") + "!");
    h.setAttribute("id", "dis");
    h.appendChild(node);
    as.insertBefore(h, as.childNodes[0]);
    distrug = document.getElementById("dis");
  }
  but.onclick = function() {

    var nume = document.getElementById("nume").value;
    localStorage.setItem("name", nume);
    as.removeChild(distrug);
    var h = document.createElement("h3");
    var node = document.createTextNode("Hi, " + nume);
    h.setAttribute("id", "dis");
    h.appendChild(node);
    as.insertBefore(h, as.childNodes[0]);
    distrug = document.getElementById("dis");
  };

  //    setTimeout(function(){ as.style.display="block"}, 3000); fara parametrii
  setTimeout(function() {
    as.style.display = stil
  }, 3000, stil = "block"); //cu parametrii

  var but1 = document.getElementById("i1");
  but1.onclick = function() {
    as.style.display = "none";
  };
}

window.onload = function() {
  alert("Use the arrow keys to navigate on the site! :)");
  var e1 = document.getElementById("e1");
  e1.classList.remove("ecran1");
  e1.classList.add("ecran");
  let arata = document.getElementById("e1");
  arata.style.display = "block";
  data2();
  scroll();
  stil();
  timp();
  reclama();
};
