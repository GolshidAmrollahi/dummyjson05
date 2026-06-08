import { Navigate, UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom"

export const ErrorBoundary : React.FC = () => {
  const error = useRouteError();
  
  if ((error as UNSAFE_ErrorResponseImpl).status === 404) {
    return <Navigate to="/404" />
  }
  
  return (
   <div>
     <p>something went wrong</p>
    <p>{(error as Error).message}</p>
   </div>
  )
}