from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd

# ==========================================
# 1. LOAD MODEL COMPARISON RESULTS
# ==========================================

results_path = "ml/reports/model_comparison.csv"

df = pd.read_csv(results_path)


print("=" * 60)
print("MODEL COMPARISON VISUALIZATION")
print("=" * 60)

print("\nModel Results:")
print(df)


# ==========================================
# 2. CREATE FIGURES DIRECTORY
# ==========================================

figures_path = Path("ml/reports/figures")

figures_path.mkdir(parents=True, exist_ok=True)


# ==========================================
# 3. ACCURACY COMPARISON
# ==========================================

plt.figure(figsize=(10, 6))

plt.bar(df["Model"], df["Accuracy"])

plt.title("Model Accuracy Comparison")
plt.xlabel("Models")
plt.ylabel("Accuracy")

plt.xticks(rotation=15)

plt.ylim(0.90, 1.0)

plt.tight_layout()

plt.savefig(figures_path / "model_accuracy_comparison.png", dpi=300)

plt.close()

print("\n✓ Accuracy comparison chart created")


# ==========================================
# 4. AUC COMPARISON
# ==========================================

plt.figure(figsize=(10, 6))

plt.bar(df["Model"], df["AUC Score"])

plt.title("Model AUC Score Comparison")
plt.xlabel("Models")
plt.ylabel("AUC Score")

plt.xticks(rotation=15)

plt.ylim(0.90, 1.0)

plt.tight_layout()

plt.savefig(figures_path / "model_auc_comparison.png", dpi=300)

plt.close()

print("✓ AUC comparison chart created")


# ==========================================
# 5. MULTI-METRIC COMPARISON
# ==========================================

metrics = ["Accuracy", "Precision", "Recall", "F1 Score", "AUC Score"]

df_plot = df.set_index("Model")[metrics]

df_plot.T.plot(kind="bar", figsize=(12, 7))

plt.title("Machine Learning Model Performance Comparison")
plt.xlabel("Metrics")
plt.ylabel("Score")

plt.ylim(0.90, 1.0)

plt.xticks(rotation=0)

plt.legend(title="Models")

plt.tight_layout()

plt.savefig(figures_path / "model_metrics_comparison.png", dpi=300)

plt.close()

print("✓ Multi-metric comparison chart created")


# ==========================================
# COMPLETED
# ==========================================

print("\n" + "=" * 60)
print("VISUALIZATION COMPLETED SUCCESSFULLY")
print("=" * 60)

print("\nCharts saved in:")
print("ml/reports/figures")
