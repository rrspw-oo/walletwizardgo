import React from "react";
//傳入以下 props
//handleDeleteItem:表當按下刪除按鈕時要執行的函數
//deleteItem: 代表要刪除的項目的索引
function DeleteButton({ deleteItem, handleDeleteItem }) {
  return (
    <div className="wrapDele">
      <button className="delete" onClick={() => handleDeleteItem(deleteItem)}>
        Remove
      </button>
    </div>
  );
}

export default DeleteButton;
