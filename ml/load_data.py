import pandas as pd
from sklearn.datasets import load_breast_cancer

# Load the breast cancer dataset
data = load_breast_cancer()

# Convert features into a DataFrame
df = pd.DataFrame(data.data, columns=data.feature_names)

# Add target column
df["target"] = data.target

# Save dataset as CSV
df.to_csv("ml/data/raw/breast_cancer.csv", index=False)

print("Dataset saved successfully!")
print("Dataset shape:", df.shape)

print("\nFirst 5 rows:")
print(df.head())
