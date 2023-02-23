from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from services import merge
from pydantic import BaseModel
from typing import Union, Tuple
from db import docu

app=FastAPI()
app.include_router(docu.mongo)
origins = [
    "http://localhost",
    "http://localhost:8000"
    "http://localhost:3000",
]

# add CORS middleware to app
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    print("in root")    
    #call getManager from merge.py file
    managerName = merge.getManager()
    teamName = merge.getTeamName()
    employees = merge.getEmployeesInfo()

    return {
        "id":managerName[0],
        "display_name": managerName[1],
        "teams": [{
            "team_name": teamName,
            "employees": [{
                "id": employee[0],
                "display_name": employee[1]
            } for employee in employees]
        }]
    }


