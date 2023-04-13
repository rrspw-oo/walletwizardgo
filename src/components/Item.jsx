import React from "react";
function ItemInput({ item, handleItem, handleAddItem }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // 防止表單自動提交
    handleAddItem();
  };

  return (
    <div>
      <p>Item</p>
      <input
        type="text"
        pattern="^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$"
        value={item}
        placeholder="please enter items you want to buy"
        onChange={handleItem}
        className="item"
        required
      />
    </div>
  );
}

export default ItemInput;
