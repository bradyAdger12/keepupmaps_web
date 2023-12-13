import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let message = (<p>
    <i>An error of unknown type occurred.</i>
  </p>)
  if (isRouteErrorResponse(error)) {
    message = (<p>
      <i>{error.statusText}</i>
    </p>)
  } else if (error instanceof Error) {
    message = (<p>
      <i>{error.message}</i>
    </p>) 
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      { message }
    </div>
  );
}
