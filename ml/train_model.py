from pathlib import Path

import pandas as pd
import tensorflow as tf
from tensorflow import keras

# ==========================================
# 1. LOAD PREPROCESSED DATA
# ==========================================

X_train = pd.read_csv("ml/data/processed/X_train.csv")
X_test = pd.read_csv("ml/data/processed/X_test.csv")

y_train = pd.read_csv("ml/data/processed/y_train.csv").values.ravel()
y_test = pd.read_csv("ml/data/processed/y_test.csv").values.ravel()


print("=" * 60)
print("BREAST CANCER PREDICTION - MODEL TRAINING")
print("=" * 60)

print(f"\nTraining data shape: {X_train.shape}")
print(f"Testing data shape: {X_test.shape}")


# ==========================================
# 2. CREATE MODELS DIRECTORY
# ==========================================

models_path = Path("ml/models")
models_path.mkdir(parents=True, exist_ok=True)


# ==========================================
# 3. BUILD NEURAL NETWORK
# ==========================================

model = keras.Sequential(
    [
        # Input Layer
        keras.layers.Input(shape=(30,)),
        # Hidden Layer 1
        keras.layers.Dense(64, activation="relu"),
        keras.layers.Dropout(0.3),
        # Hidden Layer 2
        keras.layers.Dense(32, activation="relu"),
        keras.layers.Dropout(0.2),
        # Hidden Layer 3
        keras.layers.Dense(16, activation="relu"),
        # Output Layer
        keras.layers.Dense(1, activation="sigmoid"),
    ]
)


# ==========================================
# 4. COMPILE MODEL
# ==========================================

model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=[
        "accuracy",
        keras.metrics.Precision(name="precision"),
        keras.metrics.Recall(name="recall"),
    ],
)


# ==========================================
# 5. DISPLAY MODEL SUMMARY
# ==========================================

print("\nMODEL ARCHITECTURE")
print("-" * 60)

model.summary()


# ==========================================
# 6. CALLBACKS
# ==========================================

early_stopping = keras.callbacks.EarlyStopping(
    monitor="val_loss", patience=15, restore_best_weights=True
)

model_checkpoint = keras.callbacks.ModelCheckpoint(
    filepath=str(models_path / "best_model.keras"),
    monitor="val_loss",
    save_best_only=True,
)


# ==========================================
# 7. TRAIN MODEL
# ==========================================

history = model.fit(
    X_train,
    y_train,
    validation_split=0.2,
    epochs=100,
    batch_size=32,
    callbacks=[early_stopping, model_checkpoint],
    verbose=1,
)


# ==========================================
# 8. SAVE FINAL MODEL
# ==========================================

model.save(models_path / "breast_cancer_model.keras")


# ==========================================
# COMPLETED
# ==========================================

print("\n" + "=" * 60)
print("MODEL TRAINING COMPLETED SUCCESSFULLY")
print("=" * 60)

print(f"\nBest model saved: {models_path / 'best_model.keras'}")
print(f"Final model saved: {models_path / 'breast_cancer_model.keras'}")
