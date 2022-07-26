import { Grid } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Match } from './api/api';
import LoadingAnimation from './components/loading';
import CustomizedTables from './components/table';
import { Matches } from './models/matches.interface';

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [matchResult, setMatches] = useState<Matches[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  useEffect(() => {
    const parsedDate = moment("2022-07-20", "YYYY-MM-DD");
    Match.getMatches(parsedDate)
      .then((data) => {
        setIsLoaded(true);
        setMatches(data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
        setError(err);
      });
  }, []);

  if (isLoaded){
  console.log("in App function", matchResult, error);
    if (!isError){
      return (
        // <Grid display="flex"
        //     justifyContent="center"
        //     alignItems="center"
        //     minHeight="100vh" 
        // >
        <div>
          {matchResult.map((game) => (
            <CustomizedTables matchData={game} />
          ))}
        </div>
          // <CustomizedTables matchData={matchResult}/>
        // </Grid>
      );
    } else {
      return (
        <div>{error}</div>
      );
    }
    
  } else {
    return (
      <Grid display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh" 
      >
        <LoadingAnimation />
      </Grid>
    );
  }

  
  // const [matchResult, setMatches] = useState<Matches[]>([]);
  // const [isError, setIsError] = useState<boolean>(false);
  
  // useEffect(() => {
  //   const parsedDate = moment("2022-07-19", "YYYY-MM-DD");
  //   Match.getMatches(parsedDate)
  //     .then((data) => {
  //       setMatches(data);
  //     })
  //     .catch((err) => {
  //       setIsError(true);
  //     });
  // }, []);

  // return (
  //   <DenseTable />
    // <div className="App">
    //   <ul className="Books">
    //     {matchResult.map((matchMetaData) => (
    //       <li key={matchMetaData.tournament_id}>
    //         <h3>{matchMetaData.game_name}</h3>
    //         {matchMetaData.match_list.map((match) => (
    //           <p>{match.id} {match.player1_name} {match.player2_name} {match.round}</p>
    //         ))}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  // );
}

export default App;
