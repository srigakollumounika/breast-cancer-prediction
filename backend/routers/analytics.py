from fastapi import APIRouter

router = APIRouter(prefix="/api/v1/analytics", tags=["Analytics"])


@router.get("/overview")
def get_analytics_overview():

    return {
        "project_name": "BreastAI",
        "dataset": {
            "total_records": 569,
            "total_features": 30,
            "classes": 2,
            "malignant_cases": 212,
            "benign_cases": 357,
        },
        "best_model": {
            "name": "Logistic Regression",
            "accuracy": 0.982456,
            "auc_score": 0.995370,
        },
        "neural_network": {
            "accuracy": 0.964912,
            "precision": 0.985700,
            "recall": 0.958300,
            "f1_score": 0.971800,
            "auc_score": 0.992400,
        },
    }


@router.get("/dataset")
def get_dataset_analytics():

    return {
        "total_records": 569,
        "total_features": 30,
        "target_distribution": {"malignant": 212, "benign": 357},
        "data_quality": {
            "missing_values": 0,
            "duplicate_rows": 0,
            "infinite_values": 0,
        },
    }


@router.get("/performance")
def get_model_performance():

    return {
        "logistic_regression": {
            "accuracy": 0.982456,
            "precision": 0.986111,
            "recall": 0.986111,
            "f1_score": 0.986111,
            "auc_score": 0.995370,
        },
        "support_vector_machine": {
            "accuracy": 0.982456,
            "precision": 0.986111,
            "recall": 0.986111,
            "f1_score": 0.986111,
            "auc_score": 0.995040,
        },
        "random_forest": {
            "accuracy": 0.956140,
            "precision": 0.958904,
            "recall": 0.972222,
            "f1_score": 0.965517,
            "auc_score": 0.993221,
        },
        "neural_network": {
            "accuracy": 0.964912,
            "precision": 0.985700,
            "recall": 0.958300,
            "f1_score": 0.971800,
            "auc_score": 0.992400,
        },
    }


@router.get("/system")
def get_system_status():

    return {
        "status": "operational",
        "api_version": "1.0.0",
        "ml_models": 4,
        "dataset_records": 569,
        "features": 30,
    }
