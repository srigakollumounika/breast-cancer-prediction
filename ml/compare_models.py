from pathlib import Path

import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    f1_score,
    precision_score,
    recall_score,
    roc_auc_score,
)
from sklearn.svm import SVC

# ==========================================
# 1. LOAD PREPROCESSED DATA
# ==========================================

X_train = pd.read_csv("ml/data/processed/X_train.csv")
X_test = pd.read_csv("ml/data/processed/X_test.csv")

y_train = pd.read_csv("ml/data/processed/y_train.csv").values.ravel()

y_test = pd.read_csv("ml/data/processed/y_test.csv").values.ravel()


print("=" * 70)
print("BREAST CANCER PREDICTION - MODEL COMPARISON")
print("=" * 70)


# ==========================================
# 2. CREATE MODELS
# ==========================================

models = {
    "Logistic Regression": LogisticRegression(max_iter=1000, random_state=42),
    "Random Forest": RandomForestClassifier(n_estimators=200, random_state=42),
    "Support Vector Machine": SVC(probability=True, random_state=42),
}


# ==========================================
# 3. TRAIN AND EVALUATE MODELS
# ==========================================

results = []

models_path = Path("ml/models")
models_path.mkdir(parents=True, exist_ok=True)


for name, model in models.items():
    print(f"\nTraining {name}...")

    # Train model
    model.fit(X_train, y_train)

    # Predictions
    y_pred = model.predict(X_test)

    y_prob = model.predict_proba(X_test)[:, 1]

    # Metrics
    accuracy = accuracy_score(y_test, y_pred)

    precision = precision_score(y_test, y_pred)

    recall = recall_score(y_test, y_pred)

    f1 = f1_score(y_test, y_pred)

    auc = roc_auc_score(y_test, y_prob)

    # Save results
    results.append(
        {
            "Model": name,
            "Accuracy": accuracy,
            "Precision": precision,
            "Recall": recall,
            "F1 Score": f1,
            "AUC Score": auc,
        }
    )

    # Save model
    filename = name.lower().replace(" ", "_")

    joblib.dump(model, models_path / f"{filename}.pkl")

    print(f"✓ {name} completed")
    print(f"Accuracy: {accuracy:.4f}")


# ==========================================
# 4. CREATE RESULTS DATAFRAME
# ==========================================

results_df = pd.DataFrame(results)


# ==========================================
# 5. SORT BY AUC SCORE
# ==========================================

results_df = results_df.sort_values(by="AUC Score", ascending=False)


# ==========================================
# 6. DISPLAY RESULTS
# ==========================================

print("\n")
print("=" * 70)
print("MODEL COMPARISON RESULTS")
print("=" * 70)

print(results_df.to_string(index=False))


# ==========================================
# 7. SAVE RESULTS
# ==========================================

results_path = Path("ml/reports")

results_path.mkdir(parents=True, exist_ok=True)


results_df.to_csv(results_path / "model_comparison.csv", index=False)


# ==========================================
# 8. FIND BEST MODEL
# ==========================================

best_model = results_df.iloc[0]

print("\n" + "=" * 70)

print("BEST MACHINE LEARNING MODEL")

print("=" * 70)

print(f"\nModel: {best_model['Model']}")

print(f"AUC Score: {best_model['AUC Score']:.4f}")


# ==========================================
# COMPLETED
# ==========================================

print("\n" + "=" * 70)
print("MODEL COMPARISON COMPLETED SUCCESSFULLY")
print("=" * 70)

print("\nResults saved to:")

print("ml/reports/model_comparison.csv")
