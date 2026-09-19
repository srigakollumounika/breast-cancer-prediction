from fastapi import APIRouter, HTTPException

from backend.routers.history import add_prediction_to_history
from backend.schemas.prediction import PredictionInput, PredictionResponse
from backend.services.prediction_service import prediction_service

router = APIRouter(prefix="/api/v1", tags=["Prediction"])


@router.post("/predict", response_model=PredictionResponse)
def predict(data: PredictionInput):

    try:
        # Make prediction using selected model
        result = prediction_service.predict(
            features=data.features, model_name=data.model_name
        )

        # Automatically save prediction to history
        add_prediction_to_history(result)

        # Return prediction result
        return result

    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error))

    except Exception as error:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(error)}")
