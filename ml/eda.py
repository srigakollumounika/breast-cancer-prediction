from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

# ==========================================
# 1. LOAD CLEANED DATASET
# ==========================================

df = pd.read_csv("ml/data/processed/breast_cancer_cleaned.csv")

# Create figures folder path
figures_path = Path("ml/reports/figures")
figures_path.mkdir(parents=True, exist_ok=True)

print("=" * 60)
print("EXPLORATORY DATA ANALYSIS")
print("=" * 60)

print(f"\nDataset shape: {df.shape}")


# ==========================================
# 2. TARGET DISTRIBUTION
# ==========================================

plt.figure(figsize=(7, 5))

sns.countplot(data=df, x="target")

plt.title("Breast Cancer Target Distribution")
plt.xlabel("Target (0 = Malignant, 1 = Benign)")
plt.ylabel("Number of Cases")

plt.tight_layout()

plt.savefig(figures_path / "target_distribution.png", dpi=300)

plt.close()

print("\n✓ Target distribution chart created")


# ==========================================
# 3. CORRELATION HEATMAP
# ==========================================

plt.figure(figsize=(20, 16))

correlation = df.corr()

sns.heatmap(correlation, cmap="coolwarm", center=0)

plt.title("Feature Correlation Heatmap")

plt.tight_layout()

plt.savefig(figures_path / "correlation_heatmap.png", dpi=300)

plt.close()

print("✓ Correlation heatmap created")


# ==========================================
# 4. FEATURE DISTRIBUTIONS
# ==========================================

selected_features = ["mean radius", "mean texture", "mean perimeter", "mean area"]

df[selected_features].hist(figsize=(12, 8), bins=20)

plt.suptitle("Distribution of Selected Features")

plt.tight_layout()

plt.savefig(figures_path / "feature_distributions.png", dpi=300)

plt.close()

print("✓ Feature distribution chart created")


# ==========================================
# 5. BOXPLOTS
# ==========================================

plt.figure(figsize=(14, 7))

sns.boxplot(data=df[selected_features])

plt.title("Boxplots of Selected Features")
plt.xticks(rotation=20)

plt.tight_layout()

plt.savefig(figures_path / "feature_boxplots.png", dpi=300)

plt.close()

print("✓ Boxplots created")


# ==========================================
# COMPLETED
# ==========================================

print("\n" + "=" * 60)
print("EDA COMPLETED SUCCESSFULLY")
print("=" * 60)

print(f"\nCharts saved in: {figures_path}")
