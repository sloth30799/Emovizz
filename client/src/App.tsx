import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { MovieContextProvider } from "./context/MovieContext"
import ErrorPage from "./components/ErrorPage"
import Quiz, { action as quizAction } from "./routes/Quiz"
import Homepage from "./routes/Homepage"
import { CountContextProvider } from "./context/CountContext"
import Result from "./routes/Result"

const styles = {
  container: `bg-black font-body tracking-wide w-screen h-screen flex flex-col text-white`,
  logo: `tracking-tighter cursor-default p-3`,
  box: `flex justify-center items-center`,
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="quiz/:id" element={<Quiz />} action={quizAction} />
      <Route path="quiz/result" element={<Result />} />
    </Route>
  )
)

function App() {
  return (
    <div className={styles.container}>
      <nav>
        <h1 className={styles.logo}>#EMovizz</h1>
      </nav>
      <CountContextProvider>
        <MovieContextProvider>
          <RouterProvider router={router} />
        </MovieContextProvider>
      </CountContextProvider>
    </div>
  )
}

export default App
