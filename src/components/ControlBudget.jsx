import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles}  from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const ControlBudget = ({budget, expenses, setExpenses, setBudget, setIsValidBudget}) => {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)

    const handleResetApp = () => {
        const result = confirm('Do you want to reset budget and expenses?')
        if (result) {
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        } else {
            console.log('no')
        }
    }

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0)
        const totalAvailable = budget - totalSpent
        const newPercentage = (((budget - totalAvailable)/budget) * 100).toFixed(2)
     

        setSpent(totalSpent)
        setAvailable(totalAvailable)

        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1000);

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
            <CircularProgressbar value={percentage} styles = {buildStyles({
                pathColor: percentage > 100 ? '#b42424cf' : '#3b82f6',
                trailColor: '#F5F5F5',
                textColor: percentage > 100 ? '#b42424cf' : '#3b82f6',
            })}
            text= {`${percentage}% Spent`}
            > </CircularProgressbar>
        </div>
        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={handleResetApp}>
                Reset
            </button>
            <p>
                <span>
                    Budget:
                </span> 
                {formatQuantity(budget)}
            </p>
            <p className={`${available < 0 ? 'negativo' : ''}`}>
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