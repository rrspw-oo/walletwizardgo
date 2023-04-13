import React from "react";

function AddButton({ handleAddItem }) {
  return (
    <button className="addItem" type="submit" required onClick={handleAddItem}>
      Add item
    </button>
  );
}

export default AddButton;
