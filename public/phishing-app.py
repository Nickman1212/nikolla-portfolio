from flask import Flask, request, render_template
import joblib

app = Flask(__name__)
model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        email_text = request.form["email"]
        X = vectorizer.transform([email_text])
        prediction = model.predict(X)[0]
        return f"Prediction: {'Phishing' if prediction == 1 else 'Legitimate'}"
    return '''<form method="post">
                <textarea name="email"></textarea>
                <br><input type="submit">
              </form>'''

if __name__ == "__main__":
    app.run(debug=True)
