import { Button, Center, Divider, FormControl, Image, Input, Text } from "@chakra-ui/react";
import '../styles/signup.css';
import { ArrowForwardIcon } from "@chakra-ui/icons";
import gmailLogo from '/assets/img/gmail_logo.png';
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
                        <Input placeholder="username "/>
                    </FormControl>

                    <FormControl mt={5}>
                        <Input placeholder="email"/>
                    </FormControl>

                    <FormControl mt={5}>
                        <Input type="password" placeholder="password"/>
                        <Input mt={5} type="password" placeholder="repeat password" />
                    </FormControl>

                    
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        mt={5}
                        variant='outline'
                        colorScheme="teal">
                            sign up
                    </Button>

                    <Divider mt={7} />

                    <Button mt={5}>
                        <Image src={gmailLogo} alt="gmail logo" w={6} h={5} mr={2} />
                        or sign up with google
                    </Button>

                    <Text mt={5}>have an account? <Link className="link" color="red" to='/signin'>sign in</Link></Text>
                </div>
            </div>
        </div>
    );
}