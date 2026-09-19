import json
import uuid
from datetime import datetime
from pathlib import Path

from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/api/v1/history", tags=["Prediction History"])


# Path for history file
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
HISTORY_FILE = DATA_DIR / "prediction_history.json"


def initialize_history():

    DATA_DIR.mkdir(exist_ok=True)

    if not HISTORY_FILE.exists():
        with open(HISTORY_FILE, "w") as file:
            json.dump([], file)


def load_history():

    initialize_history()

    with open(HISTORY_FILE, "r") as file:
        return json.load(file)


def save_history(history):

    with open(HISTORY_FILE, "w") as file:
        json.dump(history, file, indent=4)


@router.get("/")
def get_history():

    history = load_history()

    return {"total_predictions": len(history), "predictions": history}


@router.get("/{prediction_id}")
def get_prediction(prediction_id: str):

    history = load_history()

    prediction = next((item for item in history if item["id"] == prediction_id), None)

    if prediction is None:
        raise HTTPException(status_code=404, detail="Prediction not found")

    return prediction


@router.delete("/{prediction_id}")
def delete_prediction(prediction_id: str):

    history = load_history()

    updated_history = [item for item in history if item["id"] != prediction_id]

    if len(updated_history) == len(history):
        raise HTTPException(status_code=404, detail="Prediction not found")

    save_history(updated_history)

    return {"message": "Prediction deleted successfully"}


def add_prediction_to_history(prediction_data):

    history = load_history()

    new_prediction = {
        "id": str(uuid.uuid4()),
        "prediction": prediction_data["prediction"],
        "confidence": prediction_data["confidence"],
        "model_used": prediction_data["model_used"],
        "probabilities": prediction_data["probabilities"],
        "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }

    history.insert(0, new_prediction)

    save_history(history)

    return new_prediction
