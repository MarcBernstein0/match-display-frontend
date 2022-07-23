import axios, { AxiosResponse } from "axios";
import { Moment } from "moment";
import { Matches } from "../models/matches.interface";

const instance = axios.create({
    baseURL: "https://match-display.herokuapp.com/",
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, params: { date: string }) => instance.get(url, {params}).then(responseBody),
	// post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	// put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	// delete: (url: string) => instance.delete(url).then(responseBody),
};

// const pad2Digits = (val: number): string => {
//     return val.toString().padStart(2, '0');
// }

export const Match = {
    getMatches: (date: Moment): Promise<Matches[]> => {
        const dateStr = date.format("YYYY-MM-DD");
        console.log(dateStr);
        const params = {
            date: dateStr
        }
        return requests.get('matches', params)
    },
	// getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
	// createPost: (post: PostType): Promise<PostType> =>
	// 	requests.post('posts', post),
	// updatePost: (post: PostType, id: number): Promise<PostType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};



// export function GetMatches(date: Date) 

// const instance = axios.create({
//     baseURL: "localhost:8080",
//     timeout: 15000,
// })


// export async function GetMatches(date: Date) {
//     try{
//         // const dateStr = `;
//         const params = {
//             date: `${date.getFullYear}-${date.getMonth}-${date.getDate}`
//         }
//         const response = await instance.get("/matches", { params });
//         console.log(response);
        
//         // return await response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }
