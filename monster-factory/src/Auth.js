import {useMoralis} from "react-moralis";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import {
    Stack,
  CloseButton,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Text
} from "@chakra-ui/react"

const SignUp = () => {
    const {signup} = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
      <Stack spacing={6}>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)}></Input>
        <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.currentTarget.value)}></Input>
        <Button onClick={() => signup(email, password, email)}>Sign Up</Button>
      </Stack>
    )
  } 
  
const Login = () => {
    const {login} = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Stack spacing={6}>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)}></Input>
        <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.currentTarget.value)}></Input>
        <Button onClick={() => login(email, password)}>Log In</Button>
        </Stack>
    )
} 

export const Auth = () => {
    const {authenticate,  isAuthenticating, logout, authError} = useMoralis();

    return <Stack spacing={6}>
            { authError && (<Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Authentication Has Failed!</AlertTitle>
          <AlertDescription display="block">
            {authError.message}
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>)
      }
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authenticate with MetaMask</Button>
      <Text textAlign="center"><em>Or</em></Text>
    <SignUp/>
    <Text textAlign="center"><em>Or</em></Text>
    <Login/>
    </Stack>
}