import axios from 'axios';


export  default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9ea1c127d2814cd253337bec06dad5ed34c2861a271c59e344e758df668bbff2'
    }
});