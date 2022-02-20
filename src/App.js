import React, { useState, useEffect } from "react";
import { getMatches } from "./services/MatchesService";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [matches, setMatches] = useState([]);


    useEffect(() => {
        getMatches()
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result);
                    setMatches(result.match_list);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        const interval = setInterval(() => {
            getMatches()
            .then(
                (result) => {
                    console.log(result);
                    setMatches(result.match_list);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        }, 30000);
        return () => clearInterval(interval);
      
    }, []);

   
    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    } else if (!isLoaded){
        return <div>Loading...</div>
    } else if (matches.length === 0) {
        return <div>No matches available</div>
    } else {
        return (
            <ul>
            {matches.map(match => 
                <li >{match.player1_name} {match.player2_name} {match.round} {match.tournament_game_name}</li>)}
            </ul>
        );
    }
}

export default App;