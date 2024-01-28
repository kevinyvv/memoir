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


client = MongoClient(MONGO_DB)
db = client['memoir']
posts_collection = db['memoir_posts']
users_collection = db['memoir_users']

names = ["Ryan","Philip", "Kellen", "Kevin"]
lines = []
with open('./test.txt', 'r') as file:
    for line in file:
        lines.append(line.strip())

for i in range(148):
    if i%3==0:
        posts_collection.insert_one({"user": names[0], "content": lines[i],"timestamp":"July 30, 2024"})
    elif i%3==1:
        posts_collection.insert_one({"user": names[1], "content": lines[i],"timestamp":"July 30, 2024"})
    elif i%3==2:
        posts_collection.insert_one({"user": names[2], "content": lines[i],"timestamp":"July 30, 2024"})
    elif i%3==3:
        posts_collection.insert_one({"user": names[3], "content": lines[i],"timestamp":"July 30, 2024"})