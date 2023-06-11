import axios from 'axios';
import { ResponseAPI } from "../interface/interface"
import { AxiosError } from 'axios';

const ACCESS_KEY = "cjEhbEeH9xYtpn2DcrGNVxgk0YKxyb5rWSZGo6aGtxs"

export const getImages = async (query: string): Promise<ResponseAPI> => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        throw new Error((error as AxiosError).message)
    }
}