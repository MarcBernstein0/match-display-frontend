import { Navbar, Container, Nav } from "react-bootstrap";

function MyNavbar() {
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Matches</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="https://challonge.com/users/travelingcontroller/tournaments" target="_blank">Challonge</Nav.Link>
                        <Nav.Link href="https://www.twitch.tv/travelingcontroller" target="_blank">Stream</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
}

export default MyNavbar;