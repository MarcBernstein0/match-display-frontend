import { CssBaseline, Grid } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Match } from './api/api';
import LoadingAnimation from './components/loading';
import CustomizedTables from './components/table';
import { Matches } from './models/matches.interface';

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
  // palette: {
  //   mode: "dark",
  //   primary: "#1A2027",
  //   divider: deepOrange[700],
  //   background: {
  //     default: deepOrange[900],
  //     paper: deepOrange[900],
  //   },
  //   text: {
  //     primary: "#fff",
  //     secondary: grey[500],
  //   },
  // },
});

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

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {isLoaded ? (
        <span>
          {!isError ? (
            <Grid display="flex"
              justifyContent="center"
              minHeight="100vh"
          >
              {matchResult.map((game) => (
                <CustomizedTables matchData={game} />
              ))}
          </Grid>
          ) : <div>{error}</div>}
        </span>
        )
        : 
        <Grid display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
          >
          <LoadingAnimation />
        </Grid>}
    </ThemeProvider>
  );
}

export default App;
