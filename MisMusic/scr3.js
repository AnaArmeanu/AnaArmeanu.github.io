function aratTrue()
{
  alert("You clicked the span first! :)");
}

function allowDrop(ev)
{
  ev.preventDefault();
}

function drag(ev)
{
  ev.dataTransfer.setData("text",ev.target.id);
}
function drop1(ev)
{
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  let rasp = document.getElementById("what");//acel p pentru simulare
  rasp.innerHTML="1";
}
function drop2(ev)
{
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  let rasp = document.getElementById("what");//acel p pentru simulare
  rasp.innerHTML="2";//raspuns gresit
}
function alegere(ev)
{
  var premiu = new Array();
  premiu[0]="Do not worry! You still have time to learn.";//0/3
  premiu.push("You should listen to more music!");//1/3
  premiu.push("Pretty good!");//2/3
  premiu.push("Congrats! You scored the perfect 3!");//3/3
  var rez=new Object();//obiect cu 1 proprietate
  rez.rezultat=0;//adaug o propr noua*/
  alert(ev.currentTarget);
  var aleg = document.getElementById("alegere");
  aleg.style.display="none";
  var art = document.querySelectorAll("article");
  var r = document.getElementById("r");
  var p = document.getElementById("p");
  var sbm = document.querySelectorAll(".sbm");
  var i=0;//articolul
  var j=i+1;//butonul
    if(r.checked==1)//rock
    {
        art[i].style.display="inline-block";
        i=i+1;
        for(var o=1;o<sbm.length;o++)
          sbm[o].onclick=function()
          {
            /*if(i>=1)
                  art[i-1].style.display="none";
            if(i<=3)
                  art[i].style.display="inline-block";
            i=i+1;
            j=j+1;*/
            switch(i)
            {
              case 1:
                    art[i-1].style.display="none";
                    art[i].style.display="inline-block";
                    let ras=document.querySelectorAll(".q1");
                    if(ras[3].checked && (!ras[0].checked && !ras[1].checked && !ras[2].checked))
                      rez.rezultat+=1;//raspuns corect
                    break;
              case 2:
                    art[i-1].style.display="none";
                    art[i].style.display="inline-block";
                    let ras1=document.getElementById("q2");
                    if(ras1.selectedIndex===1)
                      rez.rezultat+=1;//raspuns corect*/
                    break;
              case 3:
                    art[i-1].style.display="none";
                    art[i].style.display="inline-block";
                    let rasp = document.getElementById("what");
                    if(rasp.innerHTML==="1")//raspuns corect
                      rez.rezultat+=1;
                    break;

            default:
                break;
            }
            i=i+1;
            j=j+1;
            if(i===4)
            {

                                  let v=document.getElementById("p2");
                                  v.innerHTML+=parseInt(rez.rezultat)+" points.";
                              //    alert(parseInt(rez.rezultat));
                                    let v1=document.getElementById("p1");
                                    v1.innerHTML+=premiu[rez.rezultat];

                                  let s2=document.getElementById("s2");
                                  let p2=document.getElementById("ras");
                                  s2.onclick=function()
                                  {
                                    var stri="1) Led Zeppelin ; 2) Amy Lee ; 3) Linkin Park";//Linkin Park e gresit
                                    p2.innerHTML+=stri;
                                    var txt = stri.replace("Linkin Park", "Chevelle");
                                    p2.innerHTML = txt;
                                  }
            }
          };
    }
    else {
      if(p.checked==1)//pop
      {
          let r1 = document.getElementById("pop");
          r1.style.display="inline-block";
      }
    }
}
function scor()
{
  var sbm = document.querySelectorAll(".sbm")[0];
  var spn=document.getElementsByTagName("span")[0];
  spn.addEventListener("click", aratTrue, true);
  sbm.addEventListener("click", alegere, false);
}
window.onload = function()
{
  scor();
};
