import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './auth.module.css';
import { Button, Center, FormControl, Heading, Input, Link, Text, useToast } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function SignIn() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();
    const toast = useToast();

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUsername(value);
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleSignInClick = async () => {
        try {
          const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
            credentials: 'include',
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            navigate("/"); // Перенаправление на другую страницу
          } else {
            const errorData = await response.json(); // Получение данных об ошибке
            toast({
              title: errorData.message,
              status: 'warning'
            })
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <Heading>Authentication</Heading>
                <FormControl>
                    <Center>
                        <Input onChange={handleUsernameChange} w='70%' mt={10} placeholder="username" type="text"/>
                    </Center>
                    
                    <Center>
                      <Input onChange={handlePasswordChange} w='70%' mt={5} placeholder="password" type="password"/>
                    </Center>

                    <Center mt={5}>
                        <Button onClick={handleSignInClick} rightIcon={<ArrowRightIcon />} minW="30%" mt={25} colorScheme="teal" variant="outline">Sign in</Button>
                    </Center>

                    <Center>
                        <Text mt={5}>
                            Don't have an account?
                            <Link ml={2} color='blue' href="/signup">Sign up</Link>
                        </Text>
                    </Center>
                </FormControl>
            </div>
        </div>
    );
}