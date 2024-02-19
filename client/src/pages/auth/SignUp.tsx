import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './auth.module.css';
import { Button, Center, FormControl, Heading, Input, Link, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function SignUp() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const navigate = useNavigate();

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUsername(value);
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handleSignInClick = async () => {
        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, email }),
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigate("/signin"); // Перенаправление на другую страницу
              } else {
                const errorData = await response.json(); // Получение данных об ошибке
                console.error("Login error:", errorData.message);
              }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <Heading>Sign up to mywish</Heading>
                <FormControl>
                    <Center>
                        <Input onChange={handleUsernameChange} w='70%' mt={10} placeholder="username" type="text"/>
                    </Center>
                    
                    <Center>
                      <Input onChange={handlePasswordChange} w='70%' mt={7} placeholder="password" type="password"/>
                    </Center>
                    
                    <Center>
                      <Input onChange={handleEmailChange} w='70%' mt={7} placeholder="email" type="email"/>
                    </Center>

                    <Center mt={5}>
                        <Button onClick={handleSignInClick} rightIcon={<ArrowRightIcon />} minW="30%" mt={25} colorScheme="teal" variant="outline">Sign up</Button>
                    </Center>

                    <Center>
                        <Text mt={5}>
                            Have an account?
                            <Link ml={2} color='blue' href="/signin">Sign in</Link>
                        </Text>
                    </Center>
                </FormControl>
            </div>
        </div>
    );
}