import {$host} from './index';
export const getAllUsers = async () => {
    const {data} = await $host.get('user')
    return data
}