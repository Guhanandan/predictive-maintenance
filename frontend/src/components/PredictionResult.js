import React from "react";

function PredictionResult({ prediction }) {
  return (
    <div className="result">
      <h2>Prediction Result:</h2>
      <p>{prediction}</p>
    </div>
  );
}

export default PredictionResult;
