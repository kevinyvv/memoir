import numpy as np
import pandas as pd
import tensorflow as tf
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

"mongodb+srv://kevin31422005:31422005@cluster0.x8tyvu2.mongodb.net/?retryWrites=true&w=majority"

@app.route("/",methods=["POST","GET"])
def obtain_graph():
    return jsonify("graph")

if __name__ == "__main__":
    app.run(debug=True, port=5001)
