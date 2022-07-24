import axios, { AxiosResponse } from "axios";
import { Moment } from "moment";
import { Matches } from "../models/matches.interface";

const instance = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, params: { date: string }) => instance.get(url, {params}).then(responseBody),
};

export const Match = {
    getMatches: (date: Moment): Promise<Matches[]> => {
        const dateStr = date.format("YYYY-MM-DD");
        // console.log("date string in getMatches func", dateStr);
        const params = {
            date: dateStr
        }
        return requests.get('matches', params)
    },
};
