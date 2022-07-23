import { useEffect, useState } from 'react';
import './App.css';
import { Matches } from './models/matches.interface';
import { Match } from './api/api';
import moment from 'moment';
import DenseTable from './components/table';

function App() {
  const [matchResult, setMatches] = useState<Matches[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  
  useEffect(() => {
    const parsedDate = moment("2022-07-19", "YYYY-MM-DD");
    Match.getMatches(parsedDate)
      .then((data) => {
        setMatches(data);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  return (
    <DenseTable />
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
  );
}

export default App;
