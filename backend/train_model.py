import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load dataset (Simulated logs: CPU usage, Memory usage, Response time, Error count, Disk Usage, Network Latency)
df = pd.read_csv("dataset/software_logs.csv")  

# Feature selection
X = df[['cpu_usage', 'memory_usage', 'response_time', 'error_count', 'disk_usage', 'network_latency']]
y = df['failure']  # 1 for failure, 0 for normal

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Save model
joblib.dump(model, "models/predictive_model.pkl")
