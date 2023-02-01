function CalcularPromedio() {
    let nombre= prompt("Ingrese el nombre del alumno")
    let nota1 = parseInt(prompt("Ingrese nota del primer cuatrimestre"));
    let nota2 = parseInt(prompt("Ingrese nota del segundo cuatrimestre"));
    let promedio = (nota1 + nota2) / 2;
    if (promedio >= 7) {
        alert(`el alumno ${nombre} esta aprobado`)
    }
    else {
        alert(`el alumno ${nombre} esta desaprobado`)
    }
}
CalcularPromedio()
