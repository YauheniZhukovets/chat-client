import {$host} from "./index";
import {User} from '../interface/interface';

export const login = async (name: string) => {
    const {data} = await $host.post<User>('user/login', {name})
    localStorage.setItem('userInfo', JSON.stringify(data))
    return data
}