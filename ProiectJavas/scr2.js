
function panza()
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var sbm = document.getElementById("sbm");
  sbm.onclick = function()
  {
    var x1=document.getElementById("x1").value;
    var y1=document.getElementById("y1").value;
    x1=parseFloat(x1);
    y1=parseFloat(y1);
    var x2=document.getElementById("x2").value;
    var y2=document.getElementById("y2").value;
    x2=parseFloat(x2);
    y2=parseFloat(y2);

    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    var rez=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    alert("The new line's length: "+rez+" pixels");
  };
}
window.onload = function()
{
  panza();
};
