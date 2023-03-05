import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div id="error-page" className="container m-auto">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error?.statusText:number || error?.message:string}</i>
      </p> */}
    </div>
  )
}

export default ErrorPage
