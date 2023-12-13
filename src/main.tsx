import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import { authStore, AuthContext } from './stores/stores'
import { Provider as URQLProvider } from 'urql'
import { client as urqlClient } from './graphql'

import RootLayout from './layouts/RootLayout.tsx'
import ErrorPage from './ErrorPage.tsx'
import HomePage from './pages/HomePage.tsx'
import LoginExcludedRoute from './components/LoginExcludedRoute'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import 'primeicons/primeicons.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/auth/register",
        async lazy() {
          const RegisterPage = await import('./pages/RegisterPage.tsx')
          return {
            Component: () => {
              return (
                <LoginExcludedRoute>
                  <RegisterPage.default />
                </LoginExcludedRoute>
              );
            },
          }
        }
      },
      {
        path: "/auth/login",
        async lazy() {
          const LoginPage = await import('./pages/LoginPage.tsx')
          return {
            Component: () => {
              return (
                <LoginExcludedRoute>
                  <LoginPage.default />
                </LoginExcludedRoute>
              );
            },
          }
        }
      },
      {
        path: "/auth/forgot",
        async lazy() {
          const ForgotPasswordPage = await import('./pages/ForgotPasswordPage.tsx')
          return {
            Component: () => {
              return (
                <LoginExcludedRoute>
                  <ForgotPasswordPage.default />
                </LoginExcludedRoute>
              );
            },
          }
        }
      },
      {
        path: "/me/profile",
        async lazy() {
          const ProfilePage = await import('./pages/ProfilePage.tsx')
          return {
            Component: () => {
              return ( 
                <ProfilePage.default />
              );
            },
          }
        }
      },
      {
        path: "/verify-email/:code",
        async lazy() {
          const VerifyEmailLandingPage = await import('./pages/VerifyEmailLandingPage.tsx')
          return {
            Component: VerifyEmailLandingPage.default
          }
        }
      },
      {
        path: "/reset-password/:code",
        async lazy() {
          const ResetPasswordPage = await import('./pages/ResetPasswordPage.tsx')
          return {
            Component: ResetPasswordPage.default
          }
        }
      },
      {
        path: "/contact",
        async lazy() {
          const ContactPage = await import('./pages/ContactPage.tsx')
          return {
            Component: ContactPage.default
          }
        }
      },
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>{ /*value={{ unstyled: true }} */ }
      <QueryClientProvider client={queryClient}>
        <URQLProvider value={urqlClient}>
          <AuthContext.Provider value={authStore}>
            <RouterProvider router={router} />
          </AuthContext.Provider>
        </URQLProvider>
      </QueryClientProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
