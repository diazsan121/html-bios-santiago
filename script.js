
/*function AgregarOnClick(){ 
document.miFormulario.agregartarea.click(); 
var msg1 = document.getElementById('HOJA1'); 
var msg2 = document.getElementById('HOJA2');
var msg3 = document.getElementById('HOJA3');    
if (document.miFormulario.tarea1.value) {
 msg1.innerText = 'El elemento está marcado tarea1'; 
 lista.push(msg1);}
else { msg1.innerText = ""}
} */
function Agregar(tarea){ 
   

        document.getElementById("HOJA1").innerHTML = tarea;

document.getElementById("HOJA2").innerHTML = tarea;

document.getElementById("HOJA3").innerHTML = tarea;


} 
function completar(){ 
    var msg1 = document.getElementById('HOJA1'); 
    var msg2 = document.getElementById('HOJA2');
    var msg3 = document.getElementById('HOJA3');  
    var lista = [];

    if (document.miFormulario.cbox1.checked) {
        msg1.innerText = 'La tarea 1 está completada'; 
        lista.push(msg1);}
     else { msg1.innerText = ""}
      
    
       if (document.miFormulario.cbox2.checked) {
        msg2.innerText = 'La tarea 2 está completada'; 
        lista.push(msg2);}
     else { msg2.innerText = ""}
      
     if (document.miFormulario.cbox3.checked) {
        msg3.innerText = 'La tarea 3 está completada'; 
        lista.push(msg3);}
     else { msg3.innerText = ""}
      

}

function eliminar(){ 
    var msg1 = document.getElementById('HOJA1'); 
    var msg2 = document.getElementById('HOJA2');
    var msg3 = document.getElementById('HOJA3');  
    var articulos = ["   t1","  t2","    T3"];
    var lista = [];

    if (document.miFormulario.cbox1.checked) {
        msg1.innerText = ''; 
        lista.push(msg1);}
     else { msg1.innerText = ""}
      
    
       if (document.miFormulario.cbox2.checked) {
        msg2.innerText = ''; 
        lista.push(msg2);}
     else { msg2.innerText = ""}
      
     if (document.miFormulario.cbox3.checked) {
        msg3.innerText = ''; 
        lista.push(msg3);}
     else { msg3.innerText = ""}
     
     document.write(articulos[0]);    
     document.write(articulos[1]); 
     document.write(articulos[2]); 
     document.write(lista[0]);    
     document.write(lista[1]);      
}