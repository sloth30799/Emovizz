import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useMovieContext } from "../context/MovieContext"

const styles = {
  box: `w-1/2 h-1/2 flex flex-col place-self-center justify-center items-center rounded-lg shadow-lg bg-grey gap-3`,
  btn: `bg-teal hover:bg-white hover:text-purple rounded-lg p-2`,
  select: `bg-teal text-center rounded-lg p-1`,
  formBox: `flex flex-col gap-6`,
}

export default function Homepage() {
  const quizTypeRef = useRef<HTMLSelectElement>(null)
  const { chooseQuiz } = useMovieContext()
  const navigate = useNavigate()

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const type = quizTypeRef.current?.value
    if (type !== undefined) {
      chooseQuiz(type)
      navigate("/quiz/0", { replace: true })
    }
  }

  return (
    <div className={styles.box}>
      <h1 className="text-teal">Welcome to Emovizz!</h1>
      <p className="m-6 text-center text-teal">
        Simply guess the movie title based on the emojis shown, type it in, and
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        see if you're correct.
      </p>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <select
          name="quizType"
          id="quizType"
          title="quizType"
          className={styles.select}
          ref={quizTypeRef as React.LegacyRef<HTMLSelectElement>}
        >
          <option value="movies">Movies</option>
          <option value="tvShows">TV Shows</option>
        </select>
        <button className={styles.btn} type="submit">
          Start the quiz!
        </button>
      </form>
    </div>
  )
}
