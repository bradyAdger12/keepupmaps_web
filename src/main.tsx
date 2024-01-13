import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import { authStore, AuthContext } from './stores/stores'
import { Provider as URQLProvider } from 'urql'
import { client as urqlClient } from './graphql'

import RootLayout from './layouts/RootLayout.tsx'
import ErrorPage from './ErrorPage.tsx'
import HomePage from './pages/HomePage.tsx'
import LoginExcludedRoute from './components/auth/LoginExcludedRoute.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import 'primeicons/primeicons.css'
import './index.css'
import Healthcheck from './pages/Healthcheck.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.tsx'
import MapPage from './pages/MapPage.tsx'
import LoginRequiredRoute from './components/auth/LoginRequiredRoute.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<RootLayout><HomePage /></RootLayout>} />
      <Route path="/healthcheck" element={<LoginExcludedRoute><Healthcheck /></LoginExcludedRoute>} />
      <Route path="auth/register" element={<LoginExcludedRoute><RegisterPage /></LoginExcludedRoute>} />
      <Route path="auth/login" element={<LoginExcludedRoute><LoginPage /></LoginExcludedRoute>} />
      <Route path="auth/forgot" element={<LoginExcludedRoute><ForgotPasswordPage /></LoginExcludedRoute>} />
      <Route path="map/:map_id" element={<LoginRequiredRoute><RootLayout><MapPage /></RootLayout></LoginRequiredRoute>} />
    </Route>
  )
)

const queryClient = new QueryClient()
if (import.meta.env.VITE_SCHEMA_VERSION && localStorage.getItem('version') != import.meta.env.VITE_SCHEMA_VERSION) {
  localStorage.clear()
  localStorage.setItem('version', import.meta.env.VITE_SCHEMA_VERSION)
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>{ /*value={{ unstyled: true }} */}
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
