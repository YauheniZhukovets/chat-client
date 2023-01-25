export interface User {
    _id: string
    name: string
}

export interface Chat {
    _id: string,
    chatName: string
    users: User[]
    latestMessage: Message
}

export interface Message {
    '_id': string,
    'sender': User
    'content': string
    'chat': Chat
    'createdAt': string
}