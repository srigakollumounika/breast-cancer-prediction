from typing import List

from pydantic import BaseModel, Field


class PredictionInput(BaseModel):
    features: List[float] = Field(
        ...,
        min_length=30,
        max_length=30,
        description="List of exactly 30 breast cancer features",
    )

    model_name: str = Field(
        default="logistic_regression", description="Model to use for prediction"
    )


class PredictionResponse(BaseModel):
    prediction: str
    prediction_value: int
    confidence: float
    probabilities: dict
    model_used: str


class ModelInfo(BaseModel):
    name: str
    accuracy: float
    precision: float
    recall: float
    f1_score: float
    auc_score: float
