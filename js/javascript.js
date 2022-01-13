function enviar() {
    let Nombres,Edad,Genero

    Nombres = document.getElementById('Nombres').value
    Edad = document.getElementById('Edad').value
    Genero = document.getElementById('Genero').value
   

    if (Edad >= 18) {
            if (Genero == 1) {
            rta= "Usted debe pagar 20.000 mil pesos"
            ValEdad = rta}
            else {
                rta= "Usted debe pagar 35.000 mil pesos"
            ValEdad = rta   
                }     
   
           
                     
             
        }else {
        ValEdad = "Hola" + " " + Nombres + " " + "usted es menor de edad y no puede ingresar"   
        } 

    alert(ValEdad)  
  
}


