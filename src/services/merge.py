import requests
import json
api_key = "A-sHqPeGC9sr3ZLJDtm_ouqhTbLrzxniQTBiRPu-yHftx0zZuM0V3A"


headers = {
    "Authorization": f"Bearer {api_key}",
    "X-ACCOUNT-TOKEN": "dBX7SAf-pRxrTa-o0Q12y0oqlwRosE2VfOkFKephuQZy4YVPo0zhcg"
}


#get manager team_id
def getManager():
    response_manager = requests.get("https://api.merge.dev/api/hris/v1/employees/aa7f3611-c0b5-4541-b51d-e2d9c4ed320a", headers=headers)
    if response_manager.status_code == 200:
        manager = response_manager.json()
        print(manager)
        return [manager["employee_number"],manager["display_full_name"]]
    else:
        print(f"Request failed with status code: {response_manager.status_code}")

#get team name
def getTeamName():
    response_teams = requests.get("https://api.merge.dev/api/hris/v1/teams/40512773-4c36-40ba-a4a7-db1af38bf1c3", headers=headers)
    if response_teams.status_code == 200:
        manager_team = response_teams.json()
        return manager_team["name"]
    else:
        print(f"Request failed with status code: {response_teams.status_code}")


#get Employee names
def getEmployeesInfo():
    response_getTeam = requests.get("https://api.merge.dev/api/hris/v1/employees?team_id=40512773-4c36-40ba-a4a7-db1af38bf1c3", headers=headers)
    if response_getTeam.status_code == 200:
        team = json.loads(response_getTeam.text)
        names = []
        manager = getManager()
        for employee in team["results"]:
            if employee["employee_number"] not in manager:
                names.append([employee["employee_number"],employee["display_full_name"]])
        return names
    else:
        print(f"Request failed with status code: {response_getTeam.status_code}")



