export function calcularTotal(cantidad, plazo){
    
    let totalCantidad=0;

    switch(plazo){
        case 3:
            totalCantidad = cantidad * .05;
            break;
        case 6:
            totalCantidad = cantidad * .10;
            break;
        case 9:
            totalCantidad = cantidad * .15;
            break;
        case 12:
            totalCantidad = cantidad * .20;
            break;
        case 24:
            totalCantidad = cantidad * .50;
            break;
        default:
            break;
    }
    return totalCantidad;
}