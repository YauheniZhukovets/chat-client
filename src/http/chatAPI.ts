import {$host} from "./index";
import {Chat} from '../interface/interface';

export const createChat = async (nameChat: string, ownId: string, userId: string) => {
    const {data} = await $host.post<Chat>('chat', {nameChat, ownId, userId})
    return data
}

export const fetchAllChats = async (ownId: string, userId: string) => {
    const {data} = await $host.get<Chat[]>(`chat/fetch?ownId=${ownId}&userId=${userId}`)
    return data
}
