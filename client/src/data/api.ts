import { randomNumbers } from "../utils/randomNumber"

type DataType = {
  title: string
}

export async function getMovies(url: string): Promise<string[]> {
  // fetch movies from imdb
  const fetchedData = await fetch(url)
  const movieData = await fetchedData.json()

  // change data to 10 movies array
  const movies = await movieData.items.map((data: DataType) => data.title)
  const quizMovies = await randomNumbers(movies)

  return quizMovies
}
