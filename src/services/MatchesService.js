import axios from "axios";
import dayjs from "dayjs";

export async function getMatches(){
    try {
        const date = dayjs().format('YYYY-MM-DD')
        const params = {
            date: date
        };
        console.log(date)
        // const resp = await axios.get('http://localhost:8080/match-display/v1/matches');
        const resp = await axios.get('https://match-display.herokuapp.com/match-display/v1/matches', {params});
        return await resp.data;
    } catch (error) {
        return [];
    }

}