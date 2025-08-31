      function EnviarNombre() {
        var nombre = document.getElementById("Nombre").value
        document.getElementById("Mensaje1").innerHTML = "¡Hola, " + nombre + "!";
        document.getElementById("Mensaje2").innerHTML = "Elija el cafe que quiera tomar, Solo de click en el boton";
      }
       function eviarMensaje() {
        var nombre = document.getElementById("Nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un cafe normal porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
       function eviarMensaje1() {
        var nombre = document.getElementById("Nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un cafe cortado porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
       function eviarMensaje2() {
        var nombre = document.getElementById("Nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un Sutil Equilibrado porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
       function eviarMensaje3() {
        var nombre = document.getElementById("Nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un Cortado Expreso porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
       function eviarMensaje4() {
        var nombre = document.getElementById("Nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un Capuchino porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
       function eviarMensaje5() {
        var nombre = document.getElementById("Nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un Capuchino Con Nutella porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }