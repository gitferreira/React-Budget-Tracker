import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label> Filter </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value=""> --Select--</option>
            <option value="Savings"> Savings </option>
            <option value="Subscriptions"> Subscriptions </option>
            <option value="Food"> Food </option>
            <option value="House"> House Expenses </option>
            <option value="Health"> Health</option>
            <option value="Entertainment"> Entertainment </option>
            <option value="Other"> Other </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
