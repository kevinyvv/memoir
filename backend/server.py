import numpy as np
import pandas as pd
#import tensorflow as tf
from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/",methods=["POST","GET"])
def obtain_graph():
    return jsonify("graph")

@app.route('/users')
def get_users():
    client = MongoClient("mongodb+srv://kevin31422005:31422005@cluster0.x8tyvu2.mongodb.net/?retryWrites=true&w=majority")
    database = client.db("memoir")
    users = database.collection("memoir_users")

    return users


if __name__ == "__main__":
    app.run(debug=True, port=5001)
