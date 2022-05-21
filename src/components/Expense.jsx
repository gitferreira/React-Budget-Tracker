import React from "react";
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
const Expense = ({ expense }) => {
  const category = expense.category;
  const name = expense.name;
  const quantity = expense.quantity;
  const id = expense.id;
  const date = expense.date;
  return (
    <div className="gasto sombra ">
      <div className="contenido-gasto">
        <img src={iconLibrary[category]} alt = "icon logo" />
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
  );
};

export default Expense;
