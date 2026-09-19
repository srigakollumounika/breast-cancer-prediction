import numpy as np

from backend.services.model_service import model_service


class PredictionService:
    def predict(self, features, model_name):

        # Convert input to NumPy array
        features = np.array(features).reshape(1, -1)

        # Validate feature count
        if features.shape[1] != 30:
            raise ValueError("Exactly 30 feature values are required")

        # Scale features
        scaled_features = model_service.scaler.transform(features)

        # Get selected model
        model = model_service.get_model(model_name)

        # Neural Network Prediction
        if model_name == "neural_network":
            probability = float(model.predict(scaled_features, verbose=0)[0][0])

            prediction_value = 1 if probability >= 0.5 else 0

            probabilities = {
                "malignant": round(1 - probability, 4),
                "benign": round(probability, 4),
            }

        # Machine Learning Models
        else:
            prediction_value = int(model.predict(scaled_features)[0])

            probabilities_array = model.predict_proba(scaled_features)[0]

            probabilities = {
                "malignant": round(float(probabilities_array[0]), 4),
                "benign": round(float(probabilities_array[1]), 4),
            }

        # Convert prediction to label
        prediction = "Benign" if prediction_value == 1 else "Malignant"

        # Get probability of predicted class
        if prediction_value == 1:
            predicted_probability = probabilities["benign"]
        else:
            predicted_probability = probabilities["malignant"]

        # Confidence percentage
        confidence = round(predicted_probability * 100, 2)

        # Prediction class
        prediction_class = "1 - Benign" if prediction_value == 1 else "0 - Malignant"

        return {
            "prediction": prediction,
            "prediction_value": prediction_value,
            "confidence": confidence,
            # Direct probability for frontend
            "probability": predicted_probability,
            # Prediction class for frontend
            "prediction_class": prediction_class,
            # Both probabilities
            "probabilities": probabilities,
            # Selected model
            "model_used": model_name,
        }


# Create service instance
prediction_service = PredictionService()
