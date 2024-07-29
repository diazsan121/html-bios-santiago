
var x=0;
var tareas=[];

function Agregar(tarea){  
x=x+1;
//creamos nuestra lista
if (x==1) {   document.getElementById("HOJA1").innerHTML = tarea;
   tareas.push(tarea);
}
     
if (x==2) {    document.getElementById("HOJA2").innerHTML = tarea;  
   tareas.push(tarea);
 }
if (x==3) {
   document.getElementById("HOJA3").innerHTML = tarea;   
   tareas.push(tarea);
}
} 
function completar(){ 
    var msg1 = document.getElementById('HOJA1'); 
    var msg2 = document.getElementById('HOJA2');
    var msg3 = document.getElementById('HOJA3');  
          
    if (document.miFormulario.cbox1.checked) {
        msg1.innerText = 'La tarea 1 está completada'; }
     else { msg1.innerText = ""}
       
     if (document.miFormulario.cbox2.checked) {
        msg2.innerText = 'La tarea 2 está completada'; }
      else { msg2.innerText = ""}
      
     if (document.miFormulario.cbox3.checked) {
        msg3.innerText = 'La tarea 3 está completada'; }
     else { msg3.innerText = ""}
      
}
function ver_lista(){
   //recorre elemento por elemento y los muestra con alert()
   for(i=0; i<tareas.length; i++) {
      alert(tareas[i]);   
}
}

function eliminar(){ 
   tareas.pop();
    var msg1 = document.getElementById('HOJA1'); 
    var msg2 = document.getElementById('HOJA2');
    var msg3 = document.getElementById('HOJA3');  
    
    if (document.miFormulario.cbox1.checked) {
        msg1.innerText = 'LA TAREA1 FUE ELIMINADA';  }        
    else { msg1.innerText = ""}     
    
    if (document.miFormulario.cbox2.checked) {
        msg2.innerText = 'LA TAREA2 FUE ELIMINADA'; }
    else { msg2.innerText = ""}
      
    if (document.miFormulario.cbox3.checked) {
        msg3.innerText = 'LA TAREA3 FUE ELIMINADA'; }
    else { msg3.innerText = ""}
        
}