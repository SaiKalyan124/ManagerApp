from typing import Union, Tuple
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse
from fastapi import APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel,validator,Field
from pymongo import MongoClient
from bson.objectid import ObjectId
import json
from datetime import datetime
import requests


mongo= APIRouter()
# Set up a connection to MongoDB
myclient = MongoClient("mongodb+srv://admin:admin@cluster0.vo5ipzy.mongodb.net/?retryWrites=true&w=majority")

class getEmployeeName(BaseModel):
    name:str

class getEmployeeNameOfOneOnOne(BaseModel):
    name:str

class ActionItem(BaseModel):
    label: str
    checked: bool

class Feedback(BaseModel):
    wins: str
    concerns: str
    sentiment: float
    constructive_selfFeedback: str
    constructive_FeedbackForManager: str
    positive_selfFeedback: str
    positive_FeedbackForManager: str
    actions_items_for_team_member: list[ActionItem]
    actions_items_for_Manager: list[ActionItem]

#global variable
employee_name=""

@mongo.post("/employeeName/")
async def employeeName(employee: getEmployeeName):
    # create a new database for the employee with the provided name
    global employee_name
    employee_name=employee.name
    return {"employee_name":employee_name}

@mongo.post("/OneOnOneInfo/")
async def getEmployeeNameFromForm(employee :getEmployeeNameOfOneOnOne):
    return{"name":employee}

@mongo.get("/get-data/")
def getOneOnOneFormDate():
    global employee_name
    print(employee_name)
    db_name="Manager"
    employee_db=myclient[db_name]
    employee_collection = employee_db[employee_name]
    documents=employee_collection.find({},{"_id":0})

    data= [doc for doc in documents]
    print(data)
    return data
    


    
@mongo.post("/submit-form/")
async def submit_form( feedback: Feedback):
    global employee_name
    print("creating db for", employee_name)

    db_name = "Manager"
    employee_db = myclient[db_name]

    # create collections in the new database for feedback data
    if employee_name not in employee_db.list_collection_names():
        employee_db.create_collection(employee_name)
        print(f"Created collection {employee_name} in database {db_name}")
    else:
        print(f"Collection {employee_name} already exists in database {db_name}")

    print(f"Created database for employee {employee_name}")
    feedback_dict = feedback.dict()
    feedback_dict["timestamp"] = datetime.now()

    # insert the feedback data into employee's collection
    employee_db[employee_name].insert_one(feedback_dict)

    return {"success": True}







