import { Alert } from "react-bootstrap";

function Example(){
    return (
        <Alert dismissible variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <p>
                Change this and that and try again.
            </p>
        </Alert>
    )
}

export default Example;