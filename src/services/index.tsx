import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'https://surfmappers-back-end-git-master-cauaflemos.vercel.app',
    timeout: 30000, 
});
