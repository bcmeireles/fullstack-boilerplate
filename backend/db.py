from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongodb://localhost:27017/')
db = client['[MAIN_DB]']
collection = db['[COLLECTION]']

def get_all():
    return list(collection.find())

def get_by_id(id):
    return collection.find_one({'_id': ObjectId(id)})

def get_by_key(key, value, multiple=False):
    if multiple:
        return list(collection.find({key: value}))
    return collection.find_one({key: value})

def create(data):
    return collection.insert_one(data).inserted_id

def update(id, data):
    return collection.update_one({'_id': ObjectId(id)}, {'$set': data})

def delete(id):
    return collection.delete_one({'_id': ObjectId(id)})
