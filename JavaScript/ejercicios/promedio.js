function promedio(notas=[], suma=0, contador=0) {
        
        if (numero !== 0) {
            suma += numero;
            contador++;
        }

    if (contador > 0) {
        const promedio = suma / contador;
        alert(`El promedio es: ${promedio}`);
    } else {
        alert("No se ingresaron números.");
    }
}

