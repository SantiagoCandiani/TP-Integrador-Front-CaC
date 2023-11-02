document.addEventListener("DOMContentLoaded", function () {
  var calcularButton = document.getElementById("calcularButton");
  var totalAPagar = document.getElementById("totalAPagar");
  var ticketForm = document.getElementById("ticketForm");
  var borrarButton = document.getElementById("borrarButton");

  calcularButton.addEventListener("click", function () {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var cantidadTickets = parseInt(
      document.getElementById("cantidadTickets").value
    );
    var categoria = document.getElementById("categoria").value;

    var precioPorTicket = 200;
    var descuento = 0;

    switch (categoria) {
      case "estudiante":
        descuento = 0.8; // 80% de descuento para estudiantes
        break;
      case "trainee":
        descuento = 0.5; // 50% de descuento para trainees
        break;
      case "junior":
        descuento = 0.15; // 15% de descuento para juniors
        break;
    }

    var total = cantidadTickets * precioPorTicket * (1 - descuento);
    total = total.toFixed(2);

    totalAPagar.textContent = total;
  });
  
  borrarButton.addEventListener("click", function () {
    // Borra la información cargada en el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidadTickets").value = "";
    document.getElementById("categoria").value = "estudiante"; // Puedes establecer la categoría predeterminada

    totalAPagar.textContent = "0.00"; // Restablece el total a cero
  });
});
