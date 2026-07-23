from flask import Flask,render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

import re

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    expression = data.get("expression", "")

    try:
        # Allow only digits, operators, parentheses, decimal point and spaces
        if not re.fullmatch(r"[0-9+\-*/(). ]+", expression):
            raise ValueError("Invalid expression")

        result = eval(expression)

        return jsonify({"result": result})

    except Exception:
        return jsonify({"result": "Error"})

if __name__ == "__main__":
    app.run(debug=True)