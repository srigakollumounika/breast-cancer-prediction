from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
import tensorflow as tf
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
    f1_score,
    precision_score,
    recall_score,
    roc_auc_score,
    roc_curve,
)

# ==========================================
# 1. LOAD TEST DATA
# ==========================================

X_test = pd.read_csv("ml/data/processed/X_test.csv")

y_test = pd.read_csv("ml/data/processed/y_test.csv").values.ravel()


# ==========================================
# 2. LOAD TRAINED MODEL
# ==========================================

model = tf.keras.models.load_model("ml/models/best_model.keras")


print("=" * 60)
print("BREAST CANCER MODEL EVALUATION")
print("=" * 60)

print(f"\nTest data shape: {X_test.shape}")


# ==========================================
# 3. MAKE PREDICTIONS
# ==========================================

y_prob = model.predict(X_test)

y_pred = (y_prob >= 0.5).astype(int).ravel()


# ==========================================
# 4. CALCULATE METRICS
# ==========================================

accuracy = accuracy_score(y_test, y_pred)

precision = precision_score(y_test, y_pred)

recall = recall_score(y_test, y_pred)

f1 = f1_score(y_test, y_pred)

auc = roc_auc_score(y_test, y_prob)


print("\nMODEL PERFORMANCE")
print("-" * 60)

print(f"Accuracy : {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall   : {recall:.4f}")
print(f"F1 Score : {f1:.4f}")
print(f"AUC Score: {auc:.4f}")


# ==========================================
# 5. CLASSIFICATION REPORT
# ==========================================

print("\nCLASSIFICATION REPORT")
print("-" * 60)

print(classification_report(y_test, y_pred, target_names=["Malignant", "Benign"]))


# ==========================================
# 6. CREATE REPORT DIRECTORY
# ==========================================

figures_path = Path("ml/reports/figures")

figures_path.mkdir(parents=True, exist_ok=True)


# ==========================================
# 7. CONFUSION MATRIX
# ==========================================

cm = confusion_matrix(y_test, y_pred)

plt.figure(figsize=(7, 5))

sns.heatmap(
    cm,
    annot=True,
    fmt="d",
    cmap="Blues",
    xticklabels=["Malignant", "Benign"],
    yticklabels=["Malignant", "Benign"],
)

plt.title("Confusion Matrix")

plt.xlabel("Predicted")

plt.ylabel("Actual")

plt.tight_layout()

plt.savefig(figures_path / "confusion_matrix.png", dpi=300)

plt.close()

print("\n✓ Confusion matrix created")


# ==========================================
# 8. ROC CURVE
# ==========================================

fpr, tpr, thresholds = roc_curve(y_test, y_prob)

plt.figure(figsize=(7, 5))

plt.plot(fpr, tpr, label=f"AUC = {auc:.4f}")

plt.plot([0, 1], [0, 1], linestyle="--")

plt.title("ROC Curve")

plt.xlabel("False Positive Rate")

plt.ylabel("True Positive Rate")

plt.legend()

plt.tight_layout()

plt.savefig(figures_path / "roc_curve.png", dpi=300)

plt.close()

print("✓ ROC curve created")


# ==========================================
# COMPLETED
# ==========================================

print("\n" + "=" * 60)
print("MODEL EVALUATION COMPLETED SUCCESSFULLY")
print("=" * 60)
