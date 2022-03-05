import React, { useState, useEffect } from "react";
import { getMatches } from "./services/MatchesService";
import MyTable from "./display/myTable";

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
            )
            .catch(
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.error("error occured", error)
                }
            );
        }, 90000); // 1min 30sec
        return () => {
            clearInterval(interval);
            setIsLoaded(false);
        };
      
    }, []);

   
   
    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    } else if (!isLoaded){
        return (
            <div>Loading...</div>
            // <Spinner animation="border" role="status">
            //     <span className="visually-hidden">Loading...</span>
            // </Spinner>

        );
        // return <div>Loading...</div>
    } else {
        return (
            <MyTable matches={matches} />
        );
    }
}
export default App;