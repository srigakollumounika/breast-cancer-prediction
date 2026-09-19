from pathlib import Path

import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# ==========================================
# 1. LOAD CLEANED DATASET
# ==========================================

df = pd.read_csv("ml/data/processed/breast_cancer_cleaned.csv")

print("=" * 60)
print("DATA PREPROCESSING")
print("=" * 60)

print(f"\nDataset shape: {df.shape}")


# ==========================================
# 2. SEPARATE FEATURES AND TARGET
# ==========================================

X = df.drop(columns=["target"])
y = df["target"]

print("\nFEATURES AND TARGET")
print("-" * 60)
print(f"Features shape: {X.shape}")
print(f"Target shape: {y.shape}")


# ==========================================
# 3. TRAIN-TEST SPLIT
# ==========================================

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42, stratify=y
)

print("\nTRAIN-TEST SPLIT")
print("-" * 60)
print(f"Training samples: {X_train.shape[0]}")
print(f"Testing samples: {X_test.shape[0]}")


# ==========================================
# 4. FEATURE SCALING
# ==========================================

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)

X_test_scaled = scaler.transform(X_test)

print("\nFEATURE SCALING")
print("-" * 60)
print("StandardScaler applied successfully")


# ==========================================
# 5. CREATE OUTPUT DIRECTORY
# ==========================================

output_path = Path("ml/data/processed")

output_path.mkdir(parents=True, exist_ok=True)


# ==========================================
# 6. SAVE PROCESSED DATA
# ==========================================

pd.DataFrame(X_train_scaled, columns=X.columns).to_csv(
    output_path / "X_train.csv", index=False
)

pd.DataFrame(X_test_scaled, columns=X.columns).to_csv(
    output_path / "X_test.csv", index=False
)

y_train.to_csv(output_path / "y_train.csv", index=False)

y_test.to_csv(output_path / "y_test.csv", index=False)


# ==========================================
# 7. SAVE SCALER
# ==========================================

joblib.dump(scaler, "ml/data/processed/scaler.pkl")

print("\n" + "=" * 60)
print("PREPROCESSING COMPLETED SUCCESSFULLY")
print("=" * 60)

print("\nFiles created:")
print("✓ X_train.csv")
print("✓ X_test.csv")
print("✓ y_train.csv")
print("✓ y_test.csv")
print("✓ scaler.pkl")
