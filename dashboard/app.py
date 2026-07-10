from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

# -----------------------------
# Load Trained Model
# -----------------------------
model = joblib.load("Customer_Prediction_Model.pkl")

# -------------------------------------------------------
# IMPORTANT:
# Replace these names with the exact columns used in X
# during model training.
# -------------------------------------------------------
feature_columns = [
    "Region",
    "Category",
    "Product",
    "Quantity",
    "Unit_Price",
    "Sales",
    "Profit",
    "Customer_Segment",
    "Age",
    "Gender",
    "Discount_Percent"
]


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    try:

        region = float(request.form["Region"])
        category = float(request.form["Category"])
        product = float(request.form["Product"])
        quantity = float(request.form["Quantity"])
        unit_price = float(request.form["Unit_Price"])
        sales = float(request.form["Sales"])
        profit = float(request.form["Profit"])
        customer_segment = float(request.form["Customer_Segment"])
        age = float(request.form["Age"])
        gender = float(request.form["Gender"])
        discount = float(request.form["Discount_Percent"])

        input_data = pd.DataFrame([[
            region,
            category,
            product,
            quantity,
            unit_price,
            sales,
            profit,
            customer_segment,
            age,
            gender,
            discount
        ]], columns=feature_columns)

        prediction = model.predict(input_data)[0]

        if prediction == 1:
            result = "Returning Customer"
            color = "green"
        else:
            result = "New Customer"
            color = "red"

        return render_template(
            "index.html",
            prediction_text=result,
            prediction_color=color
        )

    except Exception as e:

        return render_template(
            "index.html",
            prediction_text=f"Error : {str(e)}",
            prediction_color="red"
        )


if __name__ == "__main__":
    app.run(debug=True)