document.getElementById('calculateButton').addEventListener('click', function() {
    const edad = parseInt(document.getElementById('edad').value);
    const ingresoMensual = parseFloat(document.getElementById('ingresoMensual').value);
    const fondoactual = parseFloat(document.getElementById('fondoactual').value);
    
    // Validar entradas
    if (isNaN(edad) || isNaN(ingresoMensual) || isNaN(fondoactual)) {
        alert("Por favor, introduce valores válidos.");
        return;
    }
    
   
    const tasareemplazo = 0.60;
    
 
    const estimadopension = ingresoMensual * edad * tasareemplazo / 12;
  
    const estimadofondo = (edad * ingresoMensual) + fondoactual;
    
    // Mostrar los resultados y ocultar el mensaje inicial
    document.getElementById('estimadopension').innerText = `S/ ${estimadopension.toFixed(2)}`;
    document.getElementById('estimadofondo').innerText = `S/ ${estimadofondo.toFixed(2)}`;
    document.getElementById('saldoactual').innerText = `S/ ${fondoactual.toFixed(2)}`;
    
    // Ocultar el mensaje inicial y mostrar los resultados
    document.getElementById('initialMessage').style.display = 'none';
    document.getElementById('results').style.display = 'block';
});