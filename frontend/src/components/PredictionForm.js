import React, { useState } from "react";

function PredictionForm({ onPredict }) {
  const [formData, setFormData] = useState({
    cpu_usage: "",
    memory_usage: "",
    response_time: "",
    error_count: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>CPU Usage (%): <input type="number" name="cpu_usage" value={formData.cpu_usage} onChange={handleChange} required /></label>
      <label>Memory Usage (%): <input type="number" name="memory_usage" value={formData.memory_usage} onChange={handleChange} required /></label>
      <label>Response Time (ms): <input type="number" name="response_time" value={formData.response_time} onChange={handleChange} required /></label>
      <label>Error Count: <input type="number" name="error_count" value={formData.error_count} onChange={handleChange} required /></label>
      <button type="submit">Predict</button>
    </form>
  );
}

export default PredictionForm;
