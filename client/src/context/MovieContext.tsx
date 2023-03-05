// imdb api urls
const tvShowURL = "https://imdb-api.com/en/API/Top250TVs/k_olmb166b"
const movieURL = "https://imdb-api.com/en/API/Top250Movies/k_olmb166b"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { getMovies } from "../data/api"

type MovieContextProviderProps = {
  children: ReactNode
}

type Movies = string[]
type MovieContextProps = {
  movies: Movies
  chooseQuiz: (quizType: string) => void
}

const MovieContext = createContext({} as MovieContextProps)

export const useMovieContext = () => {
  return useContext(MovieContext)
}

export const MovieContextProvider = ({
  children,
}: MovieContextProviderProps) => {
  const [url, setUrl] = useState<string | undefined>(undefined)
  const [movies, setMovies] = useState<Movies>([])

  function chooseQuiz(quizType: string | undefined) {
    setUrl(quizType)
  }

  useEffect(() => {
    async function fetchMovies() {
      if (url === "movies") {
        const quizData = await getMovies(movieURL)
        setMovies(quizData)
      } else if (url === "tvShows") {
        const quizData = await getMovies(tvShowURL)
        setMovies(quizData)
      }
    }
    fetchMovies()
  }, [url])

  return (
    <MovieContext.Provider value={{ movies, chooseQuiz }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext
