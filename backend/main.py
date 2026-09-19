from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers.analytics import router as analytics_router
from backend.routers.history import router as history_router
from backend.routers.models import router as models_router
from backend.routers.prediction import router as prediction_router

# ============================================================
# CREATE FASTAPI APPLICATION
# ============================================================

app = FastAPI(
    title="BreastAI - Breast Cancer Prediction API",
    description="""
    Advanced Breast Cancer Prediction API powered by
    Machine Learning and Deep Learning models.
    """,
    version="2.0.0",
)


# ============================================================
# ENABLE CORS
# ============================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# INCLUDE ROUTERS
# ============================================================

app.include_router(prediction_router)

app.include_router(models_router)

app.include_router(analytics_router)

app.include_router(history_router)


# ============================================================
# HOME API
# ============================================================


@app.get("/", tags=["System"])
def home():

    return {
        "message": "Welcome to BreastAI API",
        "status": "running",
        "version": "2.0.0",
    }


# ============================================================
# HEALTH CHECK API
# ============================================================


@app.get("/health", tags=["System"])
def health_check():

    return {
        "status": "healthy",
        "api": "BreastAI API",
        "version": "2.0.0",
        "services": {
            "prediction": "active",
            "models": "active",
            "analytics": "active",
            "history": "active",
        },
    }
