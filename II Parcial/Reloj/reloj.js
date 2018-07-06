function reloj() {
  var fecha=new Date();
  var hora = fecha.getHours();
  var min = fecha.getMinutes();
  var seg = fecha.getSeconds();
  var actualizar = setTimeout('reloj()',500);
  document.getElementById('pantalla').innerHTML = hora + ":" + min + ":"+ seg;
}
