from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def index():
    return jsonify({'m': 'Welcome to the Purchase Prediction API'})


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Giả lập mô hình dự đoán
    prediction = "yes" if int(data['age']) % 2 == 0 else "no"
    print(prediction)
    return jsonify({'prediction': prediction})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
