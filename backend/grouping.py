from sklearn.cluster import Birch
import networkx as nx
import numpy as np
import cohere
import os
import json
import math
from dotenv import load_dotenv
load_dotenv()
COHERE_API_KEY = os.environ.get('COHERE_API_KEY')

def distance(v1, v2):
    v1 = np.array(v1)
    v2 = np.array(v2)
    return np.linalg.norm(v1 - v2)

def cosine_similarity(v1,v2):
    v1 = np.array(v1)
    v2 = np.array(v2)
    return np.dot(v1,v2)/(np.linalg.norm(v1)*np.linalg.norm(v2))


posts = []

with open("test.txt", 'r') as file:
        for line in file:
            posts.append(line.strip())


co = cohere.Client(COHERE_API_KEY)

embeddings = co.embed(
    texts=posts,
    model='embed-english-v3.0',
    input_type='classification',
).embeddings

m = [[0 for i in range(51)] for j in range(51)]

for i in range(len(embeddings)):
    for j in range(len(embeddings)):
         m[i][j] = (embeddings[i], embeddings[j])

db = Birch(n_clusters=int(math.sqrt(len(embeddings)))).fit(embeddings)
labels = db.labels_
for i in range(max(labels)+1):
    print("Group", i)
    for j in range(len(labels)):
        if labels[j] == i:
            print(posts[j])
    print()

#take all relations between groups and softmax from each leaving node
groups = {}
for i in range(max(labels)+1):
    groups[i] = {"n": 0, "messages": [], "sum": 0}
    for j in range(len(labels)):
        if labels[j] == i:
            groups[i]["n"] += 1
            groups[i]["messages"].append(posts[j])
            groups[i]["sum"] += np.array(embeddings[j])

for key in groups.keys():
    groups[key]["average"] = groups[key]["sum"] / groups[key]["n"]

group_connections = [[0 for i in range(len(groups.keys()))] for j in range(len(groups.keys()))]

for i in range(len(groups.keys())):
    for j in range(len(groups.keys())):
        group_connections[i][j] = distance(groups[i]["average"], groups[j]["average"])


graph = {"nodes": [], "links":[]}
for i in range(len(groups.keys())):
    graph["nodes"].append({"id":i, "name": groups[i]["messages"], "group": i, })
for i in range(len(group_connections)):
    for j in range(len(group_connections)):
        if group_connections[i][j] == 1:
            graph["links"].append({"source":i, "target": j, "value": float(distance(groups[i]["average"], groups[j]["average"]))})

for i in range(len(posts)):
    graph["nodes"].append({"id": "m"+str(i), "group": int(labels[i])})
    graph["links"].append({"source": "m"+str(i), "target": int(labels[i]), "value": float(distance(embeddings[i], groups[labels[i]]["average"]))})

with open("sample.json", "w") as outfile: 
    json.dump(graph, outfile)