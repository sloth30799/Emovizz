import React, { useEffect, useState } from "react"
import { Form, Link, useActionData, useParams } from "react-router-dom"
import { useMovieContext } from "../context/MovieContext"
import axios from "axios"
import { useCountContext } from "../context/CountContext"

const styles = {
  box: `w-1/2 h-1/2 flex flex-col place-self-center justify-center items-center rounded-lg shadow-lg bg-grey gap-3`,
  emojiBox: `bg-white rounded-lg p-3 text-4xl`,
  formBox: `flex gap-3`,
  btn: `bg-purple text-white hover:text-purple hover:bg-white p-2 rounded-lg shadow-lg`,
}

type RouteParams = {
  id: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function action({ request }: { request: any }) {
  const formData = await request.formData()
  const name = formData.get("movieName")
  return name
}

export default function Quiz() {
  const { movies } = useMovieContext()
  const { increaseCount } = useCountContext()
  const { id } = useParams<RouteParams>()
  const [emoji, setEmoji] = useState("")
  const userAnswer = useActionData()
  const answer = movies[Number(id)]

  // if (movies.length < 1)
  //   return <h1 className="text-center text-white">Loading...</h1>

  useEffect(() => {
    async function getEmoji() {
      const { data }: { data: string } = await axios.post(
        `/openai/quiz/${id}`,
        {
          data: movies,
        }
      )
      setEmoji(data)
    }
    getEmoji()
  }, [id, movies])

  useEffect(() => {
    if (answer === userAnswer) {
      increaseCount()
      console.log("reight")
    }
  }, [userAnswer])

  const checkAnswer = answer === userAnswer ? "text-green" : "text-red"

  const nextLink = Number(id) < 9 ? Number(id) + 1 : "result"

  return (
    <div className={styles.box}>
      <h1 className={styles.emojiBox}>{emoji}</h1>
      <Form action={`/quiz/${id}`} method="post" className={styles.formBox}>
        <input
          type="text"
          title="movie name"
          placeholder="Movie"
          name="movieName"
          className="indent-2 text-black"
        />
        <button type="submit" title="submit" className={styles.btn}>
          Check
        </button>
      </Form>
      <h2 className={`${checkAnswer} ${!userAnswer ? `hidden` : ""}`}>
        {answer}
      </h2>
      <Link to={`/quiz/${nextLink}`}>
        <button className={styles.btn}>Next</button>
      </Link>
    </div>
  )
}
