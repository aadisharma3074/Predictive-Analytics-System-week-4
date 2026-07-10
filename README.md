# 📊 Predictive Analytics System

A Machine Learning-based web application that predicts customer purchase behavior using historical sales data. The system performs data preprocessing, exploratory data analysis (EDA), machine learning model training, customer prediction, and generates business insights through an interactive dashboard.

---

## 🚀 Project Overview

The **Predictive Analytics System** helps businesses analyze customer purchasing patterns and predict whether a customer is **New** or **Returning**. It combines Data Analytics and Machine Learning techniques to support data-driven business decisions.

---

## 🎯 Objectives

- Clean and preprocess customer purchase data
- Perform Exploratory Data Analysis (EDA)
- Visualize sales and customer trends
- Train and evaluate Machine Learning models
- Predict customer type using a trained ML model
- Generate business insights and recommendations
- Develop an interactive Flask dashboard

---

## 📂 Dataset Features

The dataset contains the following attributes:

- Customer ID
- Order ID
- Region
- Category
- Product
- Quantity
- Unit Price
- Sales
- Profit
- Customer Segment
- Age
- Gender
- Discount Percentage
- Customer Type

---

## 🔄 Project Workflow

Dataset Collection
⬇
Data Cleaning & Preprocessing
⬇
Exploratory Data Analysis (EDA)
⬇
Feature Engineering
⬇
Machine Learning Model Training
⬇
Model Evaluation
⬇
Customer Prediction
⬇
Business Insights & Recommendations
⬇
Flask Dashboard
⬇
Deployment on Render

---

## 🏗️ Architecture Overview

```
Customer Dataset
       │
       ▼
Data Cleaning
       │
       ▼
Exploratory Data Analysis
       │
       ▼
Feature Selection
       │
       ▼
Machine Learning Model
       │
       ▼
Prediction
       │
       ▼
Flask Web Application
       │
       ▼
Business Dashboard
```

---

## 📦 Modules Built

- Data Collection
- Data Cleaning
- Data Preprocessing
- Exploratory Data Analysis (EDA)
- Feature Engineering
- Machine Learning Model Training
- Model Evaluation
- Customer Prediction Module
- Business Insights
- Recommendation System
- Flask Dashboard

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Programming Language | Python |
| Data Analysis | Pandas, NumPy |
| Data Visualization | Matplotlib, Seaborn |
| Machine Learning | Scikit-learn |
| Model Serialization | Joblib |
| Backend | Flask |
| Frontend | HTML, CSS, JavaScript |
| Development Environment | Google Colab |
| Deployment | Render |
| Version Control | Git & GitHub |

---

## 🤖 Machine Learning Models

The following Machine Learning algorithms were implemented and evaluated:

- Logistic Regression
- Decision Tree Classifier
- Random Forest Classifier

The model with the highest accuracy was selected and saved as:

```
Customer_Prediction_Model.pkl
```

---

## 📈 Business Insights

- Identified high-performing sales regions
- Analyzed profitable product categories
- Studied customer purchasing behavior
- Measured the impact of discounts on sales
- Identified top-selling products
- Analyzed customer segments

---

## 💡 Business Recommendations

- Focus marketing campaigns on high-performing regions
- Increase inventory for top-selling products
- Introduce customer loyalty programs
- Optimize discount strategies
- Target valuable customer segments
- Use predictive analytics for better business decisions

---

## 📁 Project Structure

```
Predictive-Analytics-System-week4/
│
├── data/
│   ├── week2dataset.csv
│   └── customer_insights_cleaned.csv
│
├── model/
│   └── Customer_Prediction_Model.pkl
│
├── notebook/
│   └── Predictive_Analytics_System.ipynb
│
├── dashboard/
│   ├── app.py
│   ├── templates/
│   │    └── index.html
│   └── static/
│        ├── style.css
│        └── script.js
│
├── images/
│   ├── sales_by_region.png
│   ├── profit_by_category.png
│   ├── heatmap.png
│   └── dashboard.png
│
├── README.md
├── requirements.txt
├── LICENSE
```

---

## ▶️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/Predictive-Analytics-System.git
cd Predictive-Analytics-System
```

### Install Required Libraries

```bash
pip install -r requirements.txt
```

### Run the Flask Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## ☁️ Deployment

This project is deployed using **Render**.

### Deployment Steps

1. Push the project to GitHub.
2. Create a new **Web Service** on Render.
3. Connect the GitHub repository.
4. Set the Build Command:

```bash
pip install -r requirements.txt
```

5. Set the Start Command:

```bash
gunicorn app:app
```

6. Click **Deploy**.

---

## 📊 Results

- Successfully cleaned and preprocessed customer data
- Performed comprehensive Exploratory Data Analysis
- Built and evaluated multiple Machine Learning models
- Generated accurate customer predictions
- Developed a Flask-based predictive dashboard
- Produced actionable business insights and recommendations

---

## 🚀 Future Scope

- Real-time customer prediction
- Interactive dashboards
- Cloud database integration
- REST API development
- Recommendation engine
- Advanced Machine Learning models
- Mobile application support

---

## 👨‍💻 Author

**Aadi Sharma**

ReadyNest Data Analytics Internship

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
