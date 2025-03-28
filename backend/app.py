from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load trained model
model = joblib.load("models/predictive_model.pkl")

@app.route("/")
def home():
    return "AI Predictive Maintenance API is Running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = np.array([[data['cpu_usage'], data['memory_usage'], data['response_time'], data['error_count']]])
    
    prediction = model.predict(features)
    result = "Failure Expected" if prediction[0] == 1 else "System Normal"
    
    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(debug=True)
