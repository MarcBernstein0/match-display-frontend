import { Box, Grid, Paper, Stack, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { match } from "assert";
import { Matches } from "../models/matches.interface";
import { TableToolBar } from "./toolbar";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
// ){
//     return {
//         name, 
//         calories,
//         fat, 
//         carbs,
//         protein
//     };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
interface TableProps {
    matchData: Matches;
}

export default function CustomizedTables({matchData}: TableProps): JSX.Element {
    // console.log("call in CustomizedTables component", matchData);
    // const game1 = matchData[0];
    console.log(matchData);
    return (
        <Grid alignItems="flex-start" container spacing={1}>
            <Grid container direction="column" item xs={6} spacing={1}>
                    {/* // <Grid item xs={12} style={{ border: "1px solid black" }}> */}
                    <Box sx={{ width: '50%' }}>
                        <TableToolBar gameName={matchData.game_name} />
                        <Stack spacing={2}>
                        {matchData.match_list.map((match) => (
                            <Item>
                                {match.player1_name}&nbsp;vs.&nbsp;{match.player2_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{match.round < 0 ? `Losers Round ${Math.abs(match.round)}` :`Winners Round ${match.round}`}
                            </Item>
                        ))}
                        </Stack>
                    </Box>
                    {/* // </Grid> */}

            </Grid>
        </Grid>

    );
}

        /* <Box sx={{ width: "25%" }}> */

  // <Paper sx={{ width: "60%", mb: 2 }}>
                //     <TableToolBar gameName={game.game_name} />
                //     <TableContainer component={Paper}>
                //         <Table sx={{ minWidth: 700 }} aria-label="customized table">
                //             <TableHead>
                //                 <TableRow>
                //                     <StyledTableCell>Match</StyledTableCell>              
                //                 </TableRow>
                //             </TableHead>
                //             <TableBody>
                //                 {game.match_list.map((match) => (
                //                     <StyledTableRow key={match.id}>
                //                         <StyledTableCell scope="row" align="justify">
                //                             {match.player1_name}&nbsp;vs.&nbsp;{match.player2_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{match.round < 0 ? `Losers Round ${Math.abs(match.round)}` :`Winners Round ${match.round}`}
                //                         </StyledTableCell>
                //                     </StyledTableRow>
                //                 ))}
                //             </TableBody>
                //         </Table>
                //     </TableContainer>
                // </Paper>
                /* </Box> */
