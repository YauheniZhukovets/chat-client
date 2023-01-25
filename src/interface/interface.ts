export interface User {
    '_id': string
    'name': string
}

export interface Chat {
    '_id': string,
    'chatName': string
    'users': User[]
    latestMessage: Message
}

export interface Message {
    '_id': string,
    'sender': User
    'content': string
    'chat': Chat
    'createdAt': string
}


/*
{
    "_id": "63cec427d681e5051e56f7ba",
        "chatName": "Первый чат Евгений(own) и Кирилл",
        "users": [
        {
            "_id": "63cec3ded681e5051e56f7b3",
            "name": "Евгений"
        },
        {
            "_id": "63cec3e6d681e5051e56f7b6",
            "name": "Кирилл"
        }
    ],
        "createdAt": "2023-01-23T17:30:15.508Z",
        "updatedAt": "2023-01-23T19:42:21.169Z",
        "__v": 0,
        "latestMessage": "63cee31cdda1e46dc8324bd0"
*/
