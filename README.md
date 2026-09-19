<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B9D,50:C850C0,100:4158D0&height=220&section=header&text=BreastAI&fontSize=80&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Breast%20Cancer%20Prediction%20%7C%20Full-Stack%20AI%2FML%20Application&descAlignY=58&descSize=18" width="100%" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=800&color=C850C0&center=true&vCenter=true&width=640&lines=4+ML+Models+%E2%9A%A1+98.25%25+Best+Accuracy;React+%2B+Vite+%7C+FastAPI+%7C+Scikit-learn+%7C+Keras;Predict+%E2%80%A2+Compare+%E2%80%A2+Analyse+%E2%80%A2+Track" alt="Typing SVG" />

<br/>

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)](https://scikit-learn.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)

<br/>

![Accuracy](https://img.shields.io/badge/Best_Accuracy-98.25%25-00C853?style=flat-square&labelColor=1a1a2e)
![AUC](https://img.shields.io/badge/AUC-99.54%25-00B8D4?style=flat-square&labelColor=1a1a2e)
![Models](https://img.shields.io/badge/ML_Models-4-C850C0?style=flat-square&labelColor=1a1a2e)
![Features](https://img.shields.io/badge/Features-30-FF6B9D?style=flat-square&labelColor=1a1a2e)
![Samples](https://img.shields.io/badge/Samples-569-4158D0?style=flat-square&labelColor=1a1a2e)
![Status](https://img.shields.io/badge/Status-Complete-success?style=flat-square&labelColor=1a1a2e)

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF6B9D,50:C850C0,100:4158D0&height=4" width="100%" />

> [!WARNING]
> **Educational / demonstration project only.** BreastAI is **not** a medical diagnosis system and must never be used for real clinical decisions. Always consult a qualified healthcare professional.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:4158D0,50:C850C0,100:FF6B9D&height=4" width="100%" />

<details open>
<summary><b>📑 Table of Contents</b></summary>
<br/>

| | | |
|---|---|---|
| [🔍 Overview](#-overview) | [✨ Features](#-features) | [🛠 Tech Stack](#-tech-stack) |
| [🏗 Architecture](#-architecture) | [📁 Structure](#-project-structure) | [📊 Dataset](#-dataset) |
| [⚙️ ML Pipeline](#️-ml-pipeline) | [🏆 Performance](#-model-performance) | [🚀 Getting Started](#-getting-started) |
| [🔌 API Reference](#-api-reference) | [🖥 Pages](#-application-pages) | [📉 Visualizations](#-visualizations) |
| [✅ Status](#-project-status) | [🔭 Roadmap](#-roadmap) | [👩‍💻 Author](#-author) |

</details>

---

## 🔍 Overview

BreastAI trains and compares **four machine learning models** on the Breast Cancer Wisconsin dataset and serves them through a production-style REST API. Users enter **30 medical features** in a React interface and instantly receive a **Malignant / Benign** classification with class probabilities, a confidence score, and the model used — while every prediction is logged to a searchable history.

<table>
<tr>
<td width="33%" align="center">

### 🧠
**End-to-End ML**

Understanding → Cleaning → Preprocessing → Training → Evaluation → Comparison

</td>
<td width="33%" align="center">

### ⚡
**Clean API Design**

Routers, schemas and services cleanly separated in FastAPI with Pydantic validation

</td>
<td width="33%" align="center">

### 🎨
**Modern SPA**

React + Vite frontend consuming a single centralized Axios service layer

</td>
</tr>
</table>

---

## ✨ Features

<table>
<tr>
<td width="50%">

#### 🔮 Smart Prediction
30 feature inputs → instant Malignant/Benign result with confidence score and class probabilities.

</td>
<td width="50%">

#### 🧪 One-Click Sample Data
Prefill the entire form with a valid sample record for rapid testing.

</td>
</tr>
<tr>
<td width="50%">

#### 📊 Model Comparison
Accuracy, Precision, Recall, F1 and AUC side-by-side for all four models.

</td>
<td width="50%">

#### 🏆 Best Model Detection
The top-performing model is auto-highlighted across the UI and API.

</td>
</tr>
<tr>
<td width="50%">

#### 📈 Live Analytics
Dataset statistics, class balance and real-time model performance metrics.

</td>
<td width="50%">

#### 🕓 Prediction History
View, inspect and delete every past prediction, persisted server-side.

</td>
</tr>
<tr>
<td width="50%">

#### 📉 Visual Reports
Confusion matrix, ROC curves, correlation heatmaps and distribution plots.

</td>
<td width="50%">

#### 📘 Interactive Docs
Auto-generated Swagger UI for exploring and testing every endpoint.

</td>
</tr>
</table>

---

## 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=react,vite,js,css,python,fastapi,sklearn,tensorflow,git,github,vscode&theme=dark&perline=11" />

</div>

<div align="center">

| 🎨 Frontend | ⚙️ Backend | 🤖 Machine Learning | 🧰 Tools |
|:---:|:---:|:---:|:---:|
| React.js | Python | Scikit-learn | Git |
| Vite | FastAPI | TensorFlow / Keras | GitHub |
| Axios | Uvicorn | NumPy | VS Code |
| Lucide React | Pydantic | Pandas | Swagger UI |
| CSS | | Joblib | |

</div>

---

## 🏗 Architecture

```mermaid
flowchart LR
    subgraph CLIENT["🎨 Frontend — React + Vite"]
        UI["Pages<br/>Dashboard · Prediction<br/>Models · Analytics · History"]
        AX["services/api.jsx<br/>Axios Layer"]
        UI --> AX
    end

    subgraph SERVER["⚙️ Backend — FastAPI"]
        R["Routers<br/>prediction · models<br/>analytics · history"]
        S["Schemas<br/>Pydantic Validation"]
        SV["Services<br/>model_service<br/>prediction_service"]
        R --> S --> SV
    end

    subgraph MLLAYER["🤖 ML Layer"]
        SC["scaler.pkl<br/>StandardScaler"]
        M["Trained Models<br/>LR · SVM · RF · NN"]
        SC --> M
    end

    DB[("📁 prediction_history.json")]

    AX -->|"REST · /api/v1"| R
    SV --> SC
    M -->|"prediction + probability"| SV
    SV --> DB

    style CLIENT fill:#4158D0,stroke:#4158D0,color:#fff
    style SERVER fill:#009688,stroke:#009688,color:#fff
    style MLLAYER fill:#C850C0,stroke:#C850C0,color:#fff
    style DB fill:#FF6B9D,stroke:#FF6B9D,color:#fff
```

---

## 📁 Project Structure

<details>
<summary><b>📂 Click to expand the full tree</b></summary>
<br/>

```
Breast-Cancer-Prediction/
│
├── 🔧 backend/
│   ├── data/
│   │   └── prediction_history.json
│   ├── routers/
│   │   ├── analytics.py
│   │   ├── history.py
│   │   ├── models.py
│   │   └── prediction.py
│   ├── schemas/
│   │   └── prediction.py
│   ├── services/
│   │   ├── model_service.py
│   │   └── prediction_service.py
│   └── main.py
│
├── 🎨 frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Prediction.jsx
│   │   │   ├── Models.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── History.jsx
│   │   ├── services/
│   │   │   └── api.jsx
│   │   └── App.jsx
│   └── package.json
│
├── 🤖 ml/
│   ├── data/
│   │   ├── raw/
│   │   └── processed/
│   ├── models/
│   ├── reports/
│   │   └── figures/
│   ├── load_data.py
│   ├── data_understanding.py
│   ├── data_cleaning.py
│   ├── data_preprocessing.py
│   ├── eda.py
│   ├── train_model.py
│   ├── evaluate_model.py
│   ├── compare_models.py
│   └── visualize_model_comparison.py
│
├── 📚 docs/
└── 🚫 .gitignore
```

</details>

---

## 📊 Dataset

<div align="center">

**Breast Cancer Wisconsin (Diagnostic) Dataset**

![Records](https://img.shields.io/badge/Records-569-4158D0?style=for-the-badge)
![Features](https://img.shields.io/badge/Features-30-C850C0?style=for-the-badge)
![Classes](https://img.shields.io/badge/Classes-2-FF6B9D?style=for-the-badge)
![Clean](https://img.shields.io/badge/Missing_%2F_Duplicates-0-00C853?style=for-the-badge)

</div>

```mermaid
pie showData
    title Class Distribution
    "Benign (357)" : 357
    "Malignant (212)" : 212
```

| Property | Value | |
|---|---|---|
| Total Records | `569` | ![](https://img.shields.io/badge/-✓-00C853?style=flat-square) |
| Total Features | `30` | ![](https://img.shields.io/badge/-all_numeric-4158D0?style=flat-square) |
| Malignant Cases | `212` | `37.3%` |
| Benign Cases | `357` | `62.7%` |
| Missing Values | `0` | ![](https://img.shields.io/badge/-clean-00C853?style=flat-square) |
| Duplicates | `0` | ![](https://img.shields.io/badge/-clean-00C853?style=flat-square) |
| Infinite Values | `0` | ![](https://img.shields.io/badge/-clean-00C853?style=flat-square) |

---

## ⚙️ ML Pipeline

```mermaid
flowchart TD
    A["📥 Load Data"] --> B["🔎 Data Understanding"]
    B --> C["🧹 Data Cleaning"]
    C --> D["🔧 Preprocessing"]
    D --> E["✂️ Train / Test Split"]
    E --> F["📐 StandardScaler"]
    F --> G{"🤖 Model Training"}
    G --> H["Logistic Regression"]
    G --> I["Support Vector Machine"]
    G --> J["Random Forest"]
    G --> K["Neural Network"]
    H & I & J & K --> L["📊 Evaluation & Comparison"]
    L --> M["💾 Save Models + Scaler"]

    style A fill:#4158D0,color:#fff,stroke:#4158D0
    style G fill:#C850C0,color:#fff,stroke:#C850C0
    style L fill:#FF6B9D,color:#fff,stroke:#FF6B9D
    style M fill:#00C853,color:#fff,stroke:#00C853
```

<details>
<summary><b>💾 Generated artifacts</b></summary>
<br/>

| `ml/data/processed/` | `ml/models/` |
|---|---|
| `X_train.csv` | `logistic_regression.pkl` |
| `X_test.csv` | `support_vector_machine.pkl` |
| `y_train.csv` | `random_forest.pkl` |
| `y_test.csv` | `breast_cancer_model.keras` |
| `scaler.pkl` | `best_model.keras` |

</details>

---

## 🏆 Model Performance

<div align="center">

| 🥇 | Model | Accuracy | Precision | Recall | F1 Score | AUC |
|:---:|---|:---:|:---:|:---:|:---:|:---:|
| 🥇 | **Logistic Regression** | ![](https://img.shields.io/badge/98.25%25-00C853?style=flat-square) | `98.61%` | `98.61%` | `98.61%` | ![](https://img.shields.io/badge/99.54%25-00B8D4?style=flat-square) |
| 🥈 | **Support Vector Machine** | ![](https://img.shields.io/badge/98.25%25-00C853?style=flat-square) | `98.61%` | `98.61%` | `98.61%` | ![](https://img.shields.io/badge/99.50%25-00B8D4?style=flat-square) |
| 🥉 | **Neural Network** | ![](https://img.shields.io/badge/96.49%25-8BC34A?style=flat-square) | `98.57%` | `95.83%` | `97.18%` | ![](https://img.shields.io/badge/99.24%25-00B8D4?style=flat-square) |
| 4️⃣ | **Random Forest** | ![](https://img.shields.io/badge/95.61%25-FFB300?style=flat-square) | `95.89%` | `97.22%` | `96.55%` | ![](https://img.shields.io/badge/99.32%25-00B8D4?style=flat-square) |

</div>

**Accuracy at a glance**

```
Logistic Regression   ████████████████████████████████████████  98.25%  🥇
Support Vector Mach.  ████████████████████████████████████████  98.25%
Neural Network        ███████████████████████████████████████░  96.49%
Random Forest         ██████████████████████████████████████░░  95.61%
```

> [!TIP]
> **Logistic Regression** is the deployed best model — it ties on accuracy with SVM but edges ahead on AUC (`99.54%`), while staying the fastest and most interpretable of the four.

---

## 🚀 Getting Started

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square&logo=python&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Git](https://img.shields.io/badge/Git-required-F05032?style=flat-square&logo=git&logoColor=white)

</div>

### 1️⃣ Clone the repository

```bash
git clone https://github.com/srigakollumounika/breast-cancer-prediction.git
cd breast-cancer-prediction
```

### 2️⃣ Backend setup

```bash
# Create a virtual environment
python -m venv venv

# Activate it
venv\Scripts\activate        # Windows
source venv/bin/activate     # macOS / Linux

# Install dependencies
pip install -r requirements.txt
```

<details>
<summary><b>📦 No requirements.txt yet?</b></summary>
<br/>

```bash
pip install fastapi uvicorn pydantic scikit-learn tensorflow numpy pandas joblib
pip freeze > requirements.txt
```

</details>

### 3️⃣ Train the models *(optional — pre-trained models are included)*

```bash
python ml/load_data.py
python ml/data_preprocessing.py
python ml/train_model.py
python ml/compare_models.py
```

### 4️⃣ Run the backend

```bash
uvicorn backend.main:app --reload
```

<div align="center">

| Service | URL |
|---|---|
| ![API](https://img.shields.io/badge/API-009688?style=flat-square&logo=fastapi&logoColor=white) | http://127.0.0.1:8000 |
| ![Docs](https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black) | http://127.0.0.1:8000/docs |

</div>

### 5️⃣ Run the frontend

```bash
cd frontend
npm install
npm run dev
```

<div align="center">

![App](https://img.shields.io/badge/App_running_at-localhost:5173-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## 🔌 API Reference

<div align="center">

**Base URL** · `http://127.0.0.1:8000/api/v1`

</div>

<details open>
<summary><b>🔮 Prediction</b></summary>
<br/>

| Method | Endpoint | Description |
|:---:|---|---|
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/predict` | Predict tumor class from 30 features |

</details>

<details>
<summary><b>🤖 Models</b></summary>
<br/>

| Method | Endpoint | Description |
|:---:|---|---|
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/models/` | List all trained models |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/models/best` | Get the best-performing model |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/models/comparison` | Full metric comparison |

</details>

<details>
<summary><b>📈 Analytics</b></summary>
<br/>

| Method | Endpoint | Description |
|:---:|---|---|
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/analytics/overview` | Summary statistics |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/analytics/dataset` | Dataset information |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/analytics/performance` | Model performance metrics |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/analytics/system` | System information |

</details>

<details>
<summary><b>🕓 History</b></summary>
<br/>

| Method | Endpoint | Description |
|:---:|---|---|
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/history/` | All past predictions |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/history/{id}` | A single prediction |
| ![DELETE](https://img.shields.io/badge/DELETE-F93E3E?style=flat-square) | `/history/{id}` | Delete a prediction |

</details>

### 🔄 Request lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant U as 👤 User
    participant R as 🎨 React
    participant F as ⚙️ FastAPI
    participant S as 📐 Scaler
    participant M as 🤖 Model
    participant H as 📁 History

    U->>R: Enter 30 features
    R->>F: POST /api/v1/predict
    F->>F: Validate with Pydantic
    F->>S: Transform features
    S->>M: Scaled input
    M-->>F: Class + probabilities
    F->>H: Persist record
    F-->>R: Prediction + confidence
    R-->>U: 🩺 Malignant / Benign
```

### 📤 Sample response

```json
{
  "prediction": "Malignant",
  "prediction_value": 0,
  "confidence": 100,
  "probabilities": {
    "malignant": 1,
    "benign": 0
  },
  "model_used": "logistic_regression"
}
```

---

## 🖥 Application Pages

<div align="center">

| | Page | What it shows |
|:---:|---|---|
| 🏠 | **Dashboard** | Total predictions, dataset samples, best model, accuracy, system info, project insights |
| 🔮 | **Prediction** | 30 inputs, Fill Sample Data / Generate / Reset, result with confidence and probabilities |
| 🤖 | **Models** | All 4 models with accuracy, precision, recall, F1, AUC and a best-model indicator |
| 📈 | **Analytics** | Top statistics, dataset information and model performance breakdown |
| 🕓 | **History** | Full prediction history with view and delete support |

</div>

> All frontend requests flow through a single centralized Axios service at `frontend/src/services/api.jsx`, handling health, system status, prediction, models, analytics and history.

---

## 📉 Visualizations

<div align="center">

Generated into `ml/reports/figures/`

| | | |
|:---:|:---:|:---:|
| 🎯 `confusion_matrix.png` | 🔥 `correlation_heatmap.png` | 📦 `feature_boxplots.png` |
| 📊 `feature_distributions.png` | 🏅 `model_accuracy_comparison.png` | 📈 `model_auc_comparison.png` |
| 📋 `model_metrics_comparison.png` | 〽️ `roc_curve.png` | 🥧 `target_distribution.png` |

</div>

---

## ✅ Project Status

<div align="center">

![ML](https://img.shields.io/badge/ML_Models-Complete-00C853?style=for-the-badge)
![Backend](https://img.shields.io/badge/FastAPI_Backend-Complete-00C853?style=for-the-badge)
![Frontend](https://img.shields.io/badge/React_Frontend-Complete-00C853?style=for-the-badge)
![API](https://img.shields.io/badge/API_Testing-Passed-00C853?style=for-the-badge)
![Git](https://img.shields.io/badge/GitHub-Pushed-00C853?style=for-the-badge)
![Deploy](https://img.shields.io/badge/Deployment-Planned-FFB300?style=for-the-badge)

</div>

| Component | Status | | Component | Status |
|---|:---:|---|---|:---:|
| Machine Learning Models | ✅ | | Models Page | ✅ |
| FastAPI Backend | ✅ | | Analytics Page | ✅ |
| React Frontend | ✅ | | History Page | ✅ |
| Prediction Flow | ✅ | | API Testing (Swagger) | ✅ |
| Dashboard | ✅ | | Git & GitHub | ✅ |

---

## 🔭 Roadmap

- [ ] 🌐 Deploy frontend and backend for public access
- [ ] 🔐 User authentication for private prediction history
- [ ] 🗄️ Migrate history from JSON to a database
- [ ] 🧠 Model explainability (SHAP / feature importance)
- [ ] 📑 Batch prediction via CSV upload
- [ ] 🐳 Dockerize the full stack
- [ ] ⚙️ CI/CD pipeline with automated tests

---

## 👩‍💻 Author

<div align="center">

**srigakollumounika**

[![GitHub](https://img.shields.io/badge/GitHub-srigakollumounika-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/srigakollumounika)
[![Repository](https://img.shields.io/badge/Repo-breast--cancer--prediction-C850C0?style=for-the-badge&logo=github&logoColor=white)](https://github.com/srigakollumounika/breast-cancer-prediction)

<br/>

### ⭐ If this project helped you, consider giving it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4158D0,50:C850C0,100:FF6B9D&height=140&section=footer" width="100%" />

</div>
