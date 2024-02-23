import { ISignUp } from "./IuserAuthApi";


interface userSignupProps {
    username: string;
    password: string;
    email: string;
}


export class SignUpApi implements ISignUp {
  async post({ username, password, email}: userSignupProps): Promise<Response> {

    return await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
      credentials: "include",
    });
  }  
}