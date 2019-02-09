from flask import Flask, jsonify, request, render_template
import csv
from flask_cors import CORS
app = Flask(__name__,
            static_folder="./dist/static",
            template_folder="./dist")
CORS(app)


@app.route('/', methods=['GET'])
def get_all_list():
    f = open('churn_case_data.csv')
    csv_f = csv.reader(f, delimiter=';')
    arr = []

    for row in csv_f:
        arr.append(row[0])
        arr.append(row[1])
        arr.append(row[2])
        arr.append(row[3])
        arr.append(row[4])
        arr.append(row[5])
    return jsonify(arr)


if __name__ == '__main__':
    app.run(debug=True)
