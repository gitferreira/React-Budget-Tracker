import React from 'react'

const ControlBudget = ({budget}) => {

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'EUR'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas '>
        <div>
            Graphic here
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>
                    Budget:
                </span> 
                {formatQuantity(budget)}
            </p>
            <p>
                <span>
                    Available:
                </span>
                {formatQuantity(0)}
            </p>
            <p>
                <span>
                    Spent:
                </span>
                {formatQuantity(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget