from fastapi import FastAPI,Form 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from networkx import DiGraph, is_directed_acyclic_graph



app = FastAPI()

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}    

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)
class Node(BaseModel):
  id: str
  data: Dict[str, Any] 

class Edge(BaseModel):
  source: str
  target: str

class Pipeline(BaseModel):
  nodes: List[Node]
  edges: List[Edge]

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

      # Create a directed graph
    graph = DiGraph()

      # Add nodes
    for node in pipeline.nodes:
          graph.add_node(node.id)

      # Add edges
    for edge in pipeline.edges:
          graph.add_edge(edge.source, edge.target)

      # Check if the graph is a DAG
    is_dag = is_directed_acyclic_graph(graph)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}