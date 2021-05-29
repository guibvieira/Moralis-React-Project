import {useMoralis} from "react-moralis";
import { Container, Heading, Stack } from "@chakra-ui/layout";
import {
  Button
} from "@chakra-ui/react"
import {Auth} from "./Auth";
import {Monsters} from "./Monsters";


function App() {
  const {isAuthenticated, logout} = useMoralis();


  if(isAuthenticated) {
    return (<Container>
    <Heading>
      Welcome to the Monster Factory
    </Heading>
    <Stack spacing="24px">
    <Monsters />
    <Button onClick={() => logout()}>Log Out</Button>
    </Stack>
    </Container>
    )
  }
  return (
    <Container>
      <Heading mb={6} textAlign="center">
      Monster Factory
    </Heading>
      <Auth />
      </Container>
  );
}

export default App;
