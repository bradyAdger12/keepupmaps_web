import { useContext } from 'react'
import { AuthContext } from '../../stores/stores'
import { observer } from "mobx-react-lite"
import { Navigate, useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';

const LoginExcludedRoute = observer(({ children }: PropsWithChildren) => {
  const auth = useContext(AuthContext)
  const location = useLocation();
  if (auth.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
})

export default LoginExcludedRoute
