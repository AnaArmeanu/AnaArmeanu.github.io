function data2()
{
  var a = document.getElementById("data1");
  var d = new Date();
  a.innerHTML = d.toDateString();

//adaug "CSS"
 a.style.backgroundColor="white";
 a.style.height = "auto";
 a.style.width = "auto";
}
function scroll()
{
  var b=document.body;
  var i=1;
  b.addEventListener("keydown",function(e)
  {
      var x = e.keyCode;//codul tastei apasate
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
      if(x=="32" || x=="40")
        {
          switch(i)
          {
            case 1:document.getElementById("a1").click();
                  i++;
                  break;
            case 2:document.getElementById("a2").click();
                  i++;
                  break;
            case 3:document.getElementById("a3").click();
                        i++;
                        break;
              case 4:document.getElementById("a4").click();
                              i++;
                              break;
            default:
                  i=1;
          }
        }
      else {
          if(x=="38")
          {
            switch(i)
            {
              case 1:document.getElementById("a0").click();
                    i--;
                    break;
              case 2:document.getElementById("a1").click();
                    i--;
                    break;
              case 3:document.getElementById("a2").click();
                          i--;
                          break;
                case 4:document.getElementById("a3").click();
                                i--;
                                break;
              default:
                    i=1;
            }
          }
      }
  }, false);

}
window.onload = function()
{
  data2();
  scroll();
}
