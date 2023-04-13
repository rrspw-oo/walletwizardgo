import React from "react";

function ResetButton({ handleReset }) {
  return (
    <div className="containReset">
      <button className="resetBtn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
