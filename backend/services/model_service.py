from pathlib import Path

import joblib
import tensorflow as tf

# Project root directory
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# ML directories
MODELS_DIR = BASE_DIR / "ml" / "models"
DATA_DIR = BASE_DIR / "ml" / "data" / "processed"


class ModelService:
    def __init__(self):

        # Load ML models
        self.models = {
            "logistic_regression": joblib.load(MODELS_DIR / "logistic_regression.pkl"),
            "random_forest": joblib.load(MODELS_DIR / "random_forest.pkl"),
            "support_vector_machine": joblib.load(
                MODELS_DIR / "support_vector_machine.pkl"
            ),
        }

        # Load Deep Learning model
        self.neural_network = tf.keras.models.load_model(
            MODELS_DIR / "best_model.keras"
        )

        # Load scaler
        self.scaler = joblib.load(DATA_DIR / "scaler.pkl")

    def get_available_models(self):

        return [
            "logistic_regression",
            "random_forest",
            "support_vector_machine",
            "neural_network",
        ]

    def get_model(self, model_name):

        if model_name == "neural_network":
            return self.neural_network

        if model_name not in self.models:
            raise ValueError(f"Model '{model_name}' not found")

        return self.models[model_name]


# Create single instance
model_service = ModelService()
