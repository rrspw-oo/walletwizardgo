import "./App.css";
import React, { useState } from "react";
import BudgetInput from "./components/Budget";
import ItemInput from "./components/Item";
import PriceInput from "./components/Price";
import AddButton from "./components/addButton";
import DeleteButton from "./components/deleteBtn";
import Calculation from "./components/Calculation";
import ResetButton from "./components/resetButton";

function App() {
  const [budget, setBudget] = useState(0);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [isOverBudget, setIsOverBudget] = useState(false);
  const [changes, setChanges] = useState(0);

  // 重置為0
  const handleReset = () => {
    setBudget(0);
    setItems([]);
    setItemName("");
    setItemPrice(0);
    setIsOverBudget(false);
    setChanges(0);
  };
  //

  const handleBudgetChange = (event) => {
    setBudget(Number(event.target.value));
  };

  const handleItem = (event) => {
    setItemName(event.target.value);
  };

  const handlePrice = (event) => {
    setItemPrice(Number(event.target.value));
  };

  const handleAddItem = (event) => {
    event.preventDefault(); // prevent form submission
    const newItem = { name: itemName, price: itemPrice };
    setItems([...items, newItem]);
    setItemName(""); // 將 itemName 設為空字串
    setItemPrice(0);
  };

  const handleDeleteItem = (remove) => {
    const newItems = [...items];
    newItems.splice(remove, 1);
    setItems(newItems);
  };

  const handleCalculation = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });

    const changes = budget - total;
    setChanges(changes);

    if (total > budget) {
      setIsOverBudget(true);
    } else {
      setIsOverBudget(false);
    }
  };

  return (
    <div className="wrapper">
      <h1>Wallet Wizard 🧙🏽‍♀️</h1>
      <p className="intro">manage our finances on-the-go</p>
      <form onSubmit={handleAddItem}>
        <BudgetInput budget={budget} handleBudgetChange={handleBudgetChange} />
        <div>
          <ItemInput item={itemName} handleItem={handleItem} required />
          <PriceInput item={itemPrice} handlePrice={handlePrice} required />
          <AddButton />
        </div>
      </form>

      {items.map((item, deleteItem) => (
        <div key={deleteItem} className="item-row">
          <div className="item-info">
            <div className="itemContent">
              <p className="item-name">{item.name}</p>
              <span className="item-price">＄{item.price}</span>
            </div>
            <DeleteButton
              deleteItem={deleteItem}
              handleDeleteItem={handleDeleteItem}
            />
          </div>
        </div>
      ))}

      <Calculation
        handleCalculation={handleCalculation}
        isOverBudget={isOverBudget}
        changes={changes}
      />
      <ResetButton handleReset={handleReset} onClick={handleReset} />

      <footer>wurouwei©</footer>
    </div>
  );
}

export default App;
