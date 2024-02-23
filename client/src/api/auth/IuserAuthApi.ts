
interface userLoginProps {
    username: string,
    password: string
}

interface userSignupProps {
    username: string,
    password: string,
    email: string
}


export interface ISignIn {
    post (data: userLoginProps): Promise<Response>
}

export interface ISignUp {
    post (data: userSignupProps): Promise<Response>
}