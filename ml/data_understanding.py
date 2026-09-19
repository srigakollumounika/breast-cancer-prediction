import pandas as pd

# Load the raw dataset
df = pd.read_csv("ml/data/raw/breast_cancer.csv")

# 1. Dataset Shape
print("=" * 60)
print("DATASET SHAPE")
print("=" * 60)
print(f"Rows: {df.shape[0]}")
print(f"Columns: {df.shape[1]}")

# 2. Column Names
print("\n" + "=" * 60)
print("COLUMN NAMES")
print("=" * 60)
print(df.columns.tolist())

# 3. Dataset Information
print("\n" + "=" * 60)
print("DATA TYPES AND INFORMATION")
print("=" * 60)
df.info()

# 4. Missing Values
print("\n" + "=" * 60)
print("MISSING VALUES")
print("=" * 60)
print(df.isnull().sum())

# 5. Duplicate Rows
print("\n" + "=" * 60)
print("DUPLICATE ROWS")
print("=" * 60)
print(f"Total duplicate rows: {df.duplicated().sum()}")

# 6. Statistical Summary
print("\n" + "=" * 60)
print("STATISTICAL SUMMARY")
print("=" * 60)
print(df.describe())

# 7. Target Distribution
print("\n" + "=" * 60)
print("TARGET DISTRIBUTION")
print("=" * 60)
print(df["target"].value_counts())

print("\nTarget meaning:")
print("0 = Malignant")
print("1 = Benign")
