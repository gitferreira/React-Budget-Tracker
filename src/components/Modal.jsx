import { useState, useEffect } from "react";
import Message from "../components/Message";
import Close from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("")
  const [id, setId] = useState('')

  useEffect(()=> {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name)
      setQuantity(editExpense.quantity)
      setCategory(editExpense.category)
      setId(editExpense.id)
      setDate(editExpense.date)
    }
  },[])

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpense({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes("")) {
      setMessage("All fields must be filled");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    saveExpense({ name, quantity, category, id, date });
 
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Close} onClick={hideModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>{editExpense.name ? 'Edit Expense' : 'New Expense'} </legend>
        {message && <Message type="error">{message}</Message>}
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
            onChange={e => setQuantity(Number(e.target.value))}
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
            <option value="Subscriptions"> Subscriptions </option>
            <option value="Food"> Food </option>
            <option value="House"> House Expenses </option>
            <option value="Health"> Health</option>
            <option value="Entertainment"> Entertainment </option>
            <option value="Other"> Other </option>
          </select>
        </div>
        <input type="submit" value={editExpense.name ? 'Edit Expense' : 'Add Expense'} />
      </form>
    </div>
  );
};

export default Modal;
