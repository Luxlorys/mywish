import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import '../styles/signup.css';
import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="container">
            <div className="left-container">
                <div className="left-content">
                    <Text as='b'> #1 Create an acoount</Text>
                    <Text as='b'>🛡️</Text>

                    <Text as='b'>#2 Fill your wish list</Text>
                    <Text as='b'>📝</Text>

                    <Text as='b'>#3 Create a couple</Text>
                    <Text as='b'>🥰</Text>
                    

                    <Text as='b'>#4 Reserve a gift</Text>
                    <Text as='b'>✅</Text>
                    

                    <Text as='b'>#5 Present!</Text>
                    <Text as='b'>❤️</Text>
                </div>
            </div>

            <div className="right-container">
                <div className="right-content">

                    <Text fontSize='3xl' color='teal.600'>Create an account</Text>
                    <FormControl mt={5}>
                        {/* <FormLabel>Username</FormLabel> */}
                        <Input placeholder="username "/>
                    </FormControl>

                    <FormControl mt={5}>
                        {/* <FormLabel>Email</FormLabel> */}
                        <Input placeholder="email"/>
                    </FormControl>

                    <FormControl mt={5}>
                        {/* <FormLabel>Password</FormLabel> */}
                        <Input type="password" placeholder="password"/>
                        <Input mt={5} type="password" placeholder="repeat password" />
                    </FormControl>
                    {/* <Center> */}
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        mt={5}
                        // w='20vw'
                        variant='outline'
                        colorScheme="teal">
                            sign up
                    </Button>

                    <Button mt={5}
                        variant='ghost'
                        colorScheme="teal"
                        rightIcon={<CheckCircleIcon />}>
                            <Link to='/signin'>sign in</Link>
                    </Button>
                    {/* </Center> */}
                </div>
            </div>
        </div>
    );
}