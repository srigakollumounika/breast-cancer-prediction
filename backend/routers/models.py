from fastapi import APIRouter

router = APIRouter(prefix="/api/v1/models", tags=["Models"])


MODEL_RESULTS = [
    {
        "name": "Logistic Regression",
        "id": "logistic_regression",
        "accuracy": 0.982456,
        "precision": 0.986111,
        "recall": 0.986111,
        "f1_score": 0.986111,
        "auc_score": 0.995370,
        "best_model": True,
    },
    {
        "name": "Support Vector Machine",
        "id": "support_vector_machine",
        "accuracy": 0.982456,
        "precision": 0.986111,
        "recall": 0.986111,
        "f1_score": 0.986111,
        "auc_score": 0.995040,
        "best_model": False,
    },
    {
        "name": "Random Forest",
        "id": "random_forest",
        "accuracy": 0.956140,
        "precision": 0.958904,
        "recall": 0.972222,
        "f1_score": 0.965517,
        "auc_score": 0.993221,
        "best_model": False,
    },
    {
        "name": "Neural Network",
        "id": "neural_network",
        "accuracy": 0.964912,
        "precision": 0.985700,
        "recall": 0.958300,
        "f1_score": 0.971800,
        "auc_score": 0.992400,
        "best_model": False,
    },
]


@router.get("/")
def get_models():
    return {"total_models": len(MODEL_RESULTS), "models": MODEL_RESULTS}


@router.get("/comparison")
def compare_models():
    return {"models": MODEL_RESULTS}


@router.get("/best")
def get_best_model():

    best_model = next(model for model in MODEL_RESULTS if model["best_model"])

    return best_model
