# file to group similar posts together
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

import matplotlib.pyplot as plt

'''# # Plot histogram
# plt.hist(distances, bins=30, alpha=0.7)
# plt.axvline(mean_dist, color='red', linestyle='dashed', linewidth=2, label='Mean')
# plt.axvline(median_dist, color='green', linestyle='dashed', linewidth=2, label='Median')
# plt.axvline(percentile_20, color='purple', linestyle='dashed', linewidth=2, label='20th Percentile')
# plt.axvline(percentile_30, color='orange', linestyle='dashed', linewidth=2, label='30th Percentile')
# plt.title('Histogram of Distances')
# plt.xlabel('Distance')
# plt.ylabel('Frequency')
# plt.legend()
# plt.show()


# print(m)
# grouping done at arbitrary cutoff of 1.2?
# need a strongly connected component where all cutoff below 1.2?

# seen = [0 for i in range(50)]
# groups = []
# while sum(seen)<50:
#     cur = 0
#     while seen[cur]==1:
#         cur += 1
#     seen[cur] = 1
#     curgroup = [cur+1]
#     queue = [cur]
#     while queue:
#         cur = queue.pop(0)
#         for i in range(50):
#             if m[i][cur] < 0.9:
#                 if seen[i] == 0:
#                     seen[i] = 1
#                     curgroup.append(i+1)
#                     queue.append(i)
#     groups.append(curgroup)

# print(groups)

# idea two: Use like kruskal's algo and stop at arbitrary cutoff'''

from sklearn.cluster import Birch
db = Birch(n_clusters=int(math.sqrt(len(embeddings)))).fit(embeddings)
labels = db.labels_
for i in range(max(labels)+1):
    print("Group", i)
    for j in range(len(labels)):
        if labels[j] == i:
            print(posts[j])
    print()


import networkx as nx
#take all relations between groups and softmax from each leaving node
print(labels)
groups = {}
for i in range(max(labels)+1):
    groups[i] = {"n": 0, "messages": [], "sum": 0}
    for j in range(len(labels)):
        if labels[j] == i:
            groups[i]["n"] += 1
            groups[i]["messages"].append(posts[j])
            groups[i]["sum"] += np.array(embeddings[j])

print(groups)
for key in groups.keys():
    groups[key]["average"] = groups[key]["sum"] / groups[key]["n"]

print(groups)
group_connections = [[0 for i in range(len(groups.keys()))] for j in range(len(groups.keys()))]

for i in range(len(groups.keys())):
    for j in range(len(groups.keys())):
        group_connections[i][j] = distance(groups[i]["average"], groups[j]["average"])

print(group_connections)
# find mean, take greater than mean 
for i in range(len(group_connections)):
    mean = sum(group_connections[i])/(len(group_connections[i])-1)
    for j in range(len(group_connections)):
        if group_connections[i][j] > mean:
            group_connections[i][j] = 1
        else:
            group_connections[i][j] = 0

print(group_connections)

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


print(graph)


import json

with open("sample.json", "w") as outfile: 
    json.dump(graph, outfile)