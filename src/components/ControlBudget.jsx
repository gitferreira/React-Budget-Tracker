import {useEffect, useState} from 'react'

const ControlBudget = ({budget, expenses}) => {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.quantity = total, 0)
    }, [expenses])

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
                {formatQuantity(available)}
            </p>
            <p>
                <span>
                    Spent:
                </span>
                {formatQuantity(spent)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget