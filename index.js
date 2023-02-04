function CalcularPromedio() {
    let nombre= prompt("Ingrese el nombre del alumno");
    let notas;
    let promedio;
    
    while(nombre != "salir") {
        let suma= 0;
        let nnotas= parseInt(prompt("Ingrese la cantidad de notas a promediar"));
    
        for (i=0; i< nnotas; i++){
            notas= parseInt(prompt(`digita la nota ` + i));
            suma = suma + notas;
        }
        promedio = suma / nnotas;
        
    
    if (promedio >= 7) {
        alert(`el alumno ${nombre} esta aprobado con una nota de ${promedio}`);
    }
    else {
        alert(`el alumno ${nombre} esta desaprobado con una nota de ${promedio}`);
    }
    nombre= prompt("Ingrese el nombre de otro alumno o escriba salir");
}
}
CalcularPromedio()
