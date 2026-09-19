from pathlib import Path

import numpy as np
import pandas as pd

# ==========================================
# 1. LOAD RAW DATASET
# ==========================================

df = pd.read_csv("ml/data/raw/breast_cancer.csv")

print("=" * 60)
print("DATA CLEANING AND VALIDATION")
print("=" * 60)

print(f"\nOriginal dataset shape: {df.shape}")


# ==========================================
# 2. CHECK MISSING VALUES
# ==========================================

missing_values = df.isnull().sum().sum()

print("\nMISSING VALUES")
print("-" * 60)
print(f"Total missing values: {missing_values}")


# ==========================================
# 3. REMOVE DUPLICATES
# ==========================================

duplicate_rows = df.duplicated().sum()

print("\nDUPLICATE RECORDS")
print("-" * 60)
print(f"Duplicates before cleaning: {duplicate_rows}")

df = df.drop_duplicates()

print(f"Dataset shape after removing duplicates: {df.shape}")


# ==========================================
# 4. CHECK INFINITE VALUES
# ==========================================

infinite_values = np.isinf(df.select_dtypes(include=np.number)).sum().sum()

print("\nINFINITE VALUES")
print("-" * 60)
print(f"Total infinite values: {infinite_values}")


# ==========================================
# 5. CHECK NEGATIVE VALUES
# ==========================================

features = df.drop(columns=["target"])

negative_values = (features < 0).sum().sum()

print("\nNEGATIVE VALUES")
print("-" * 60)
print(f"Total negative values: {negative_values}")


# ==========================================
# 6. SAVE CLEAN DATASET
# ==========================================

processed_path = Path("ml/data/processed")

processed_path.mkdir(parents=True, exist_ok=True)

output_file = processed_path / "breast_cancer_cleaned.csv"

df.to_csv(output_file, index=False)

print("\n" + "=" * 60)
print("CLEANING COMPLETED SUCCESSFULLY")
print("=" * 60)

print(f"Final dataset shape: {df.shape}")
print(f"Cleaned dataset saved to: {output_file}")
