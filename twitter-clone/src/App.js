import {useMoralis} from "react-moralis";
import { Container, Heading, Box } from "@chakra-ui/layout";
import {
  Button
} from "@chakra-ui/react"
import {Auth} from "./Auth";


function App() {
  const {isAuthenticated, logout} = useMoralis();


  if(isAuthenticated) {
    return (<Container>
    <Heading>
      Welcome to the Twitter Clone
    </Heading>
    <Button onClick={() => logout()}>Log Out</Button>

    </Container>
    )
  }
  return (
    <Container>
      <Heading mb={6} textAlign="center">
      Twitter Clone
    </Heading>
      <Auth />
      </Container>
  );
}

export default App;
