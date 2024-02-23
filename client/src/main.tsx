import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './pages/auth/SignIn.tsx'
import SignUp from './pages/auth/SignUp.tsx'
import { SignUpApi } from './api/auth/SignUpApi.ts'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/signin",
    element: <SignIn />
  },

  {
    path: "/signup",
    element: <SignUp signUpApi={ new SignUpApi() }/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}   />
    </ChakraProvider>
  </React.StrictMode>,
)
