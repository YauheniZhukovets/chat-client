import {$host} from './index';
import {Message} from '../interface/interface';

export const fetchMessages = async (id: string) => {
    const {data} = await $host.get<Message[]>(`message/${id}`)
    return data
}
export const sendMessage = async (ownId: string, chatId: string, content: string) => {
    const {data} = await $host.post<Message>(`message`, {ownId, chatId, content})
    return data
}