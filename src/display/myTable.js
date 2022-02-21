import { Container, Table } from "react-bootstrap";


function MyTable(props) {
    const matches = props.matches;
    return (
        <Container>
            <Table striped style={{
                textAlign: 'center',
                backgroundColor: 'lightgray',
                borderBottomLeftRadius: '5%',
                borderBottomRightRadius: '5%',
                borderBottom: 'white'
                
            }}>
                <thead>
                    <tr>
                        <th>Player 1</th>
                        <th>Player 2</th>
                        <th>Round</th>
                        <th>Game</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map(match =>
                        <tr>
                            <td>{match.player1_name}</td>
                            <td>{match.player2_name}</td>
                            <td>{match.round}</td>
                            <td>{match.tournament_game_name}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>

    );
}

export default MyTable;