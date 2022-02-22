import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: 1000,
      backgroundColor: theme.palette.text.disabled,
      color: theme.palette.common.white
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
  export default function MyTable(props) {
    const matches = props.matches
    let id = 0
    return (
      <TableContainer sx={{
        boxShadow: 10,
        width: '80%',
        margin: '0 auto',
        
      }} component={Paper}>
        <Table sx={{
           
            // border: 'none'
        }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Player 1</StyledTableCell>
              <StyledTableCell align="center">Player 2</StyledTableCell>
              <StyledTableCell align="center">Round</StyledTableCell>
              <StyledTableCell align="center">Game</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((match) => {
                id++
                return (
                <StyledTableRow key={id}>
                    <StyledTableCell component="th" scope="row" align="center">
                        {match.player1_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{match.player2_name}</StyledTableCell>
                    <StyledTableCell align="center">{match.round}</StyledTableCell>
                    <StyledTableCell align="center">{match.tournament_game_name}</StyledTableCell>
                </StyledTableRow>
                )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

// function MyTable(props) {
//     const matches = props.matches;
//     return (
//         <Container style={{

//             paddingLeft: '5%',
//             paddingRight: '5%'
//         }}>
//             <Table striped style={{
//                 textAlign: 'center',
//                 backgroundColor: 'lightgray',
//                 borderBottomLeftRadius: '5%',
//                 borderBottomRightRadius: '5%',
//                 borderBottom: 'grey'
                
//             }}>
//                 <thead>
//                     <tr>
//                         <th>Player 1</th>
//                         <th>Player 2</th>
//                         <th>Round</th>
//                         <th>Game</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {matches.length > 0 ?
//                     matches.map(match =>
//                         <tr>
//                             <td>{match.player1_name}</td>
//                             <td>{match.player2_name}</td>
//                             <td>{match.round}</td>
//                             <td>{match.tournament_game_name}</td>
//                         </tr>
//                     ):
//                     <tr>
//                         <td colSpan={4}>No Matches Avail</td>
//                     </tr>
//                     }
//                 </tbody>
//             </Table>
//         </Container>

//     );
// }
