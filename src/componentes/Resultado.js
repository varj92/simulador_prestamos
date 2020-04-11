import React from 'react'

const Resultado = ({cantidad,total,plazo}) => ( 
        <div className="u-full-width resultado">
            <h2>Cotización</h2>
            <p>La cantidad solicitada es ${cantidad}</p>
            <p>El plazo a pagar es de {plazo} meses</p>
            <p>El abono mensual es de ${((cantidad + total) / plazo).toFixed(2)}</p>
            <p>El total a pagar es ${cantidad + total}</p>
        </div>
); 
export default Resultado;