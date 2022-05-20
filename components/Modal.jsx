import { useState } from "react";
import Close from "../img/cerrar.svg";

const Modal = ({ modal, setModal, animateModal, setAnimateModal }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Close} onClick={hideModal} />
      </div>
      <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>New Expense</legend>
        <div className="campo">
          <label htmlFor="name">Expense Name</label>
          <input
            id="name"
            type="text"
            placeholder="Add name of expense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            placeholder="Add quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""> --Select--</option>
            <option value="Savings"> Savings </option>
            <option value="Investment"> Investment </option>
            <option value="Food"> Food </option>
            <option value="House"> House Expenses </option>
            <option value="Health"> Health</option>
            <option value="Entertainment"> Entertainment </option>
          </select>
        </div>
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};

export default Modal;
