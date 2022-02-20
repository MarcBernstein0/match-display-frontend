export async function getMatches(){
    try {
        const resp = await fetch('http://localhost:8080/match-display/v1/matches')
        return await resp.json();
    } catch (error) {
        return [];
    }

}