import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API_URL;
const characters= 'character';

export function getCharacters(page) {
    return axios.get(`${baseUrl}/${characters}?page=${page}`);
}