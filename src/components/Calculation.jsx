import React from "react";

function Calculation({ handleCalculation, isOverBudget, changes }) {
  return (
    <div>
      <button className="calCulation" onClick={handleCalculation}>
        Calculation
      </button>
      {isOverBudget ? (
        <p className="exceeded">You have exceeded your budget 😨</p>
      ) : (
        <p className="remaining">
          Your remaining would be :${changes ? `${changes}✨` : ""}{" "}
        </p>
      )}
    </div>
  );
}

export default Calculation;
