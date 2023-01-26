import {$host} from './index';

export const getAllUsers = async (search:string) => {
    const {data} = await $host.get(`user?search=${search}`)
    return data
}