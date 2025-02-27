import React, { useState } from "react";
import axios from "axios";
import PredictionForm from "./components/PredictionForm";
import PredictionResult from "./components/PredictionResult";
import "./App.css";

function App() {
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = async (formData) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="container">
      <h1>AI Predictive Maintenance</h1>
      <PredictionForm onPredict={handlePrediction} />
      {prediction && <PredictionResult prediction={prediction} />}
    </div>
  );
}

export default App;
