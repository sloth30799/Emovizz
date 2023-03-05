import { useCountContext } from "../context/CountContext"

const styles = {
  box: `w-1/2 h-1/2 flex flex-col place-self-center justify-center items-center rounded-lg shadow-lg bg-grey gap-3`,
  scoreBox: `bg-white rounded-lg p-3 text-2xl text-black`,
  text: `text-xl`,
  btn: `bg-purple text-white hover:text-purple hover:bg-white p-2 rounded-lg shadow-lg`,
}

function Result() {
  const { count } = useCountContext()
  const endingText =
    count <= 5 ? "You have a lot more movies to guess!" : "Great job!"

  return (
    <div className={styles.box}>
      <h1 className={styles.scoreBox}>Score: {count}</h1>
      <p className={styles.text}>{endingText}</p>
      <a href="/">
        <button className={styles.btn} title="button">
          Reset
        </button>
      </a>
    </div>
  )
}

export default Result
