import { Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Matches } from "../models/matches.interface";
import { TableToolBar } from "./toolbar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
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
        <Box sx={{ width: '100%' }}>
            <TableToolBar gameName={matchData.game_name} />
                <Stack spacing={1}>
                    {matchData.match_list.map((match) => (
                        <Item>
                           {match.player1_name} vs. {match.player2_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{match.round < 0 ? `Losers Round ${Math.abs(match.round)}` :`Winners Round ${match.round}`}
                        </Item>
                    ))}
                </Stack>
        </Box>
    );
}
