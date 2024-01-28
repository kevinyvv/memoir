import numpy as np
import pandas as pd
#import tensorflow as tf
from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from grouping import group 
from dotenv import load_dotenv
load_dotenv()
MONGO_DB=os.environ.get('MONGO_DB')

app = Flask(__name__)
CORS(app, support_credentials=True)

client = MongoClient(MONGO_DB)
db = client['memoir']
posts_collection = db['memoir_posts']
users_collection = db['memoir_users']


@app.route("/",methods=["POST","GET"])
def obtain_graph():
    return jsonify("graph")

@app.route('/users', methods=["GET"])
def get_users():
    data = users_collection.find()  # Fetches all documents in the collection
    data_list = list(data)  # Converts cursor to list
    for document in data_list:  # Convert ObjectId to string
        document['_id'] = str(document['_id'])
    return jsonify(data_list)

@app.route('/posts', methods=['GET'])
def get_posts():
    data = posts_collection.find()  # Fetches all documents in the collection
    data_list = list(data)  # Converts cursor to list
    for document in data_list:  # Convert ObjectId to string
        document['_id'] = str(document['_id'])
    return jsonify(data_list)

@app.route('/create-post', methods=['POST'])
def create_post():
    data = request.get_json()
    posts_collection.insert_one(data)
    return jsonify("Post created successfully")


@app.route('/update-graph', methods=['GET'])
def update_graph():
    #data will have user, content(string)
    data = posts_collection.find() 
    data_list = list(data)
    for document in data_list:  # Convert ObjectId to string
        document['_id'] = str(document['_id'])

    user_list = []
    content_list = []

    for element in data_list:
        user_list.append(element['user'])
        content_list.append(element['content'])
    print(content_list, user_list)
    
    groupings = group(content_list + user_list)
    
    return jsonify(groupings)

@app.route('/update-user', methods=['GET'])
def update_user():
    #data will have user, content(string)
    data = posts_collection.find() 
    data_list = list(data)
    for document in data_list:  # Convert ObjectId to string
        document['_id'] = str(document['_id'])

    user_list = []
    content_list = []

    for element in data_list:
        if element['user'] == "kevin" or element['user'] == "Kevin":
            user_list.append(element['user'])
            content_list.append(element['content'])
    print(content_list, user_list)
    
    groupings = group(content_list + user_list)
    
    return jsonify(groupings)
    response.headers.add('Access-Control-Allow-Origin', '*') 
    

if __name__ == "__main__":
    app.run(debug=True, port=5001)
