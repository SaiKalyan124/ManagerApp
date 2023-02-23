
# @mongo.post("/submit-form/")
# async def submit_form(request: Request,feedback: Feedback):
#     global employee_name
#     print("creating db for",employee_name)
    
#     db_name = employee_name.replace(" ", "_")
#     employee_db = myclient[db_name]    

#     # create collections in the new database for each type of feedback data, if they don't exist
#     collections = ["wins", "concerns", "sentiment", "constructive_selfFeedback",
#                 "constructive_feedbackForManager", "positive_selfFeedback",
#                 "positive_feedbackForManager", "actions_items_for_team_member",
#                 "actions_items_for_manager", "unshared_private_notes"]
#     for collection in collections:
#         if collection not in employee_db.list_collection_names():
#             employee_db.create_collection(collection)
#             print(f"Created collection {collection} in database {db_name}")
#         else:
#             print(f"Collection {collection} already exists in database {db_name}")

#     print(f"Created database for employee {employee_name}")
#     feedback_dict = feedback.dict()

    
#     # insert the feedback data into their respective collections
#     feedback_id = employee_db["wins"].insert_one({"wins": feedback_dict["wins"]}).inserted_id
#     feedback_concerns = employee_db["concerns"].insert_one({"concerns": feedback_dict["concerns"]}).inserted_id
#     feedback_sentiment = employee_db["sentiment"].insert_one({"sentiment": feedback_dict["sentiment"]}).inserted_id
#     feedback_constructive_selfFeedback = employee_db["constructive_selfFeedback"].insert_one({"constructive_selfFeedback": feedback_dict["constructive_selfFeedback"]}).inserted_id
#     feedback_constructive_feedbackForManager = employee_db["constructive_feedbackForManager"].insert_one({"constructive_FeedbackForManager": feedback_dict["constructive_FeedbackForManager"]}).inserted_id
#     feedback_positive_selfFeedback = employee_db["positive_selfFeedback"].insert_one({"positive_selfFeedback": feedback_dict["positive_selfFeedback"]}).inserted_id
#     feedback_feedbackForManager = employee_db["positive_feedbackForManager"].insert_one({"positive_FeedbackForManager": feedback_dict["positive_FeedbackForManager"]}).inserted_id
    
    
#     actions_items_TteamMember_dict = {"actions_items_for_team_member": feedback_dict["actions_items_for_team_member"]}
#     employee_db["actions_items_for_team_member"].insert_one(actions_items_TteamMember_dict)
#     actions_items_manager_dict = {"actions_items_for_Manager": feedback_dict["actions_items_for_Manager"]}
#     employee_db["actions_items_for_manager"].insert_one(actions_items_manager_dict)
#     print(feedback_id)

#     for collection in collections:
#         feedback_data = {collection: feedback_dict.get(collection)}
#         employee_db[collection].insert_one(feedback_data)

#     return {"success": True}



# @validator('wins', 'concerns')
# def empty_string_validator(cls, value):
#     if not value:
#         raise ValueError('Field must not be empty')
#     return value

# @validator('sentiment')
# def sentiment_validator(cls, value):
#     if value < -1 or value > 1:
#         raise ValueError('Sentiment value must be between -1 and 1')
#     return value








# print(myclient.list_database_names())
