import React, { useState, useEffect } from "react";
import { getMatches } from "./services/MatchesService";
import { Spinner, Table } from "react-bootstrap";

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
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>

        );
        // return <div>Loading...</div>
    } else {
        return (
            <Table striped bordered hover options={ { noDataText: 'No matches available' } }>
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Player 1</th>
                        <th>Player 2</th>
                        <th>Game</th>
                    </tr>
                </thead>
                <tbody>
                {matches.map(match => 
                    <tr>
                        <td>{match.round}</td>
                        <td>{match.player1_name}</td>
                        <td>{match.player2_name}</td>
                        <td>{match.tournament_game_name}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        );
    }
}
export default App;