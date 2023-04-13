import React from "react";

function BudgetInput({ budget, handleBudgetChange }) {
  return (
    <div>
      <p>Your Budget:</p>
      <input
        type="number"
        value={budget !== 0 ? budget : ""} //隱藏初始值0
        onChange={handleBudgetChange} //當使用者輸入預算欄位時，呼叫 handleBudgetChange,在 handleBudgetChange 中，使用 setBudget 這個 hook 來updated current status of budget ，以呈現使用者輸入的值
        required
      />
    </div>
  );
}

export default BudgetInput;
