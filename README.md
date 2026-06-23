# AI-Enhanced Intrusion Detection System

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)
![Machine Learning](https://img.shields.io/badge/Machine-Learning-red.svg)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.0+-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A smart, automated cybersecurity framework that uses machine learning to monitor network environments, detect intrusions, and classify cyberattacks in real-time.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Performance Metrics](#performance-metrics)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Model Training Pipeline](#model-training-pipeline)
- [Usage Guide](#usage-guide)
- [Future Enhancements](#future-enhancements)
- [Security Considerations](#security-considerations)
- [Contributors](#contributors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

The **AI-Enhanced Intrusion Detection System** leverages Artificial Intelligence and Machine Learning to detect, classify, and respond to network threats in real-time. By combining a Random Forest classifier with SMOTE-based data balancing and an interactive Flask dashboard, it provides a practical, high-accuracy solution for network security monitoring.

---

## Key Features

- **Real-time Attack Detection** — Instantly identify and classify network intrusions
- **Multiple ML Models** — Utilizes Random Forest, SVM, and Deep Learning (CNN/LSTM) algorithms
- **Imbalanced Data Handling** — Implements SMOTE for effective handling of class imbalance
- **Interactive Dashboard** — User-friendly web interface for monitoring and analysis
- **Automated Alerts** — Instant notifications for detected threats
- **Scalable Architecture** — Designed to handle large-scale network traffic
- **Adaptive Learning** — Continuously improves with new data

---

## Performance Metrics

| Metric | Value |
|---|---|
| Accuracy | 95.23% |
| Precision (Avg) | 0.93 |
| Recall (Avg) | 0.93 |
| F1-Score (Avg) | 0.93 |

---

## Project Structure

```
AI-Enhanced-Intrusion-Detection-System/
│
├── Documentations/                          # Project documentation
│   ├── Report.pdf
│   └── Presentation.pptx
│
├── static/                                  # Static frontend assets
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── background-video.mp4
│
├── templates/                               # HTML templates
│   └── index.html                          # Main dashboard interface
│
├── app.py                                   # Flask backend application
├── Cyber_AI.ipynb                           # Jupyter notebook for model training
├── random_forest_model_4_features.joblib    # Serialized trained ML model
├── web_attacks_balanced.csv                 # SMOTE-balanced dataset
├── requirements.txt                         # Python dependencies
└── README.md                               # Project documentation
```

---

## Technologies Used

### Backend
- **Flask** — Web framework for API and server
- **Python** — Core programming language
- **Joblib** — Model serialization and loading
- **NumPy** — Numerical computations

### Machine Learning
- **Scikit-learn** — ML algorithms and preprocessing
- **Random Forest** — Primary classification model
- **SMOTE** — Handling class imbalance
- **Pandas** — Data manipulation and analysis

### Frontend
- **HTML5** — Structure
- **CSS3** — Styling and animations
- **JavaScript** — Interactivity and dynamic content
- **Font Awesome** — Icons

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Python 3.8 or higher
- Git
- Virtual environment (recommended)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Siddhesh0389/AI-Enhanced-Intrusion-Detection-System.git
cd AI-Enhanced-Intrusion-Detection-System
```

**2. Create and activate a virtual environment**

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux / macOS
python3 -m venv venv
source venv/bin/activate
```

**3. Install dependencies**

```bash
pip install -r requirements.txt
```

**4. Train the model (optional — a pre-trained model is included)**

```bash
jupyter notebook Cyber_AI.ipynb
```

**5. Run the application**

```bash
python app.py
```

**6. Open in browser**

Navigate to: [http://localhost:5000](http://localhost:5000)

---

## Model Training Pipeline

### 1. Data Collection

Uses `web_attacks_balanced.csv` with the following network traffic features:

- Flow Duration
- Total Forward Packets
- Total Backward Packets
- Total Length of Forward Packets

### 2. Data Preprocessing

- Handling missing values
- Feature extraction and selection
- Data normalization

### 3. Handling Class Imbalance

SMOTE (Synthetic Minority Oversampling Technique) is applied to balance the dataset for better model generalization.

### 4. Model Training

Random Forest Classifier with optimized hyperparameters:

- 100 decision trees
- Max depth: 10

### 5. Model Evaluation

The trained model achieves >95% accuracy across all major classification metrics.

---

## Usage Guide

### Making a Prediction

1. Open [http://localhost:5000](http://localhost:5000) in your browser
2. Enter the following network feature values:
   - Flow Duration
   - Total Forward Packets
   - Total Backward Packets
   - Total Length of Forward Packets
3. Click the **Predict** button
4. View the result in the modal popup

### Example

**Input:**
```
Flow Duration:                  12345
Total Fwd Packets:              250
Total Backward Packets:         150
Total Length of Fwd Packets:    5000
```

**Output:**
```
Prediction: Attack Detected! 🚨
```

### Adding New Features

1. **Update Dataset** — Add new features to `web_attacks_balanced.csv`
2. **Retrain Model** — Run all cells in `Cyber_AI.ipynb`
3. **Update Backend** — Modify `app.py` to handle new feature inputs
4. **Update UI** — Edit `templates/index.html` to add new input fields

---

## Security Considerations

- **Data Encryption** — All communications use HTTPS
- **Authentication** — Role-based access control
- **Audit Logs** — Tamper-proof logging of all activities
- **Input Validation** — Proper validation of all user inputs
- **Model Security** — Protected model files and configurations

---

## Future Enhancements

- Integration with live network traffic (real-time packet capture)
- Deep learning models — CNN and LSTM implementation
- Cloud deployment (AWS, Azure, GCP)
- Advanced visualization dashboards
- Mobile application for push alerts
- Automated threat response system
- Multi-tenant support for enterprise deployment

---

## Contributors

| Name | Role | Institution |
|---|---|---|
| Siddhesh Dattatray Patil | Developer | D Y Patil Agriculture and Technical University Talsande |

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Smart-Internz** — For providing the platform and guidance
- **D Y Patil Agriculture and Technical University Talsande** — For institutional support
- **Open-source community** — For the libraries and tools that made this possible

---

## Contact & Support

- **GitHub:** [@Siddhesh0389](https://github.com/Siddhesh0389)
- **Project Link:** [AI-Enhanced-Intrusion-Detection-System](https://github.com/Siddhesh0389/AI-Enhanced-Intrusion-Detection-System)

---

> ⭐ If you found this project helpful, please consider giving it a star on GitHub!

<div align="center">Made with ❤️ by Siddhesh Dattatray Patil</div>
