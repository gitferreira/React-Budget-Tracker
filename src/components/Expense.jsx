import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";
import iconSavings from "../img/icono_ahorro.svg";
import iconFood from "../img/icono_comida.svg";
import iconHouse from "../img/icono_casa.svg";
import iconEntertainment from "../img/icono_ocio.svg";
import iconHealth from "../img/icono_salud.svg";
import iconSubscriptions from "../img/icono_suscripciones.svg";
import iconOther from "../img/icono_gastos.svg";

const iconLibrary = {
  Savings: iconSavings,
  Food: iconFood,
  House: iconHouse,
  Entertainment: iconEntertainment,
  Health: iconHealth,
  Subscriptions: iconSubscriptions,
  Other: iconOther,
};
const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const category = expense.category;
  const name = expense.name;
  const quantity = expense.quantity;
  const id = expense.id;
  const date = expense.date;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={()=> setEditExpense(expense)}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () =>  (
    <TrailingActions>
    <SwipeAction onClick={()=> deleteExpense(id)}
     destructive={true}>
      Delete
    </SwipeAction>
  </TrailingActions>
  )


  return (
    <SwipeableList>
      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()
     
      }
      > 
      <div className="gasto sombra ">
        <div className="contenido-gasto">
          <img src={iconLibrary[category]} alt="icon logo" />
          <div className="descripcion-gasto">
            <p className="categoria">{category}</p>
            <p className="nombre-gasto">{name}</p>
            <p className="fecha-gasto">
              Added: {""}
              <span>{formatDate(date)}</span>
            </p>
          </div>
        </div>
        <p className="cantidad-gasto">{quantity}EUR</p>
      </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
