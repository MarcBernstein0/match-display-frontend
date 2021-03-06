import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

export default function MyNavbar() {
  return (
    <Box color="primary" component={Paper} sx={{ 
        flexGrow: 1,
        width: '80%',
        margin: '0 auto', 
        boxShadow: 10,
        background: 'black'
        }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 50 }}>
            Upcoming Matches
          </Typography>
          <Button color="inherit" href="https://challonge.com/users/travelingcontroller/tournaments" target="_blank">Brackets</Button>
          <Button color="inherit" href="https://www.twitch.tv/travelingcontroller" target="_blank">Stream</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


// import { Container, Navbar, Nav } from "react-bootstrap";


// function MyNavbar() {
//     return (
//         <Container style={{
//             paddingLeft: '5%',
//             paddingRight: '5%'
//         }}>
//             <Navbar bg="light" variant="light">
//                 <Container>
//                     <Navbar.Brand>Upcoming Matches</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link href="https://challonge.com/users/travelingcontroller/tournaments" target="_blank">Bracket</Nav.Link>
//                         <Nav.Link href="https://www.twitch.tv/travelingcontroller" target="_blank">Stream</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </Container>
//     );
// }

// export default MyNavbar;