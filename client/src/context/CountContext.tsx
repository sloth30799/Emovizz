import { createContext, ReactNode, useContext, useState } from "react"

type CountContextProviderProps = {
  children: ReactNode
}

type CountContextProps = {
  count: number
  increaseCount: () => void
  resetCount: () => void
}

const CountContext = createContext({} as CountContextProps)

export const useCountContext = () => {
  return useContext(CountContext)
}

export const CountContextProvider = ({
  children,
}: CountContextProviderProps) => {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount((prev) => prev + 1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <CountContext.Provider value={{ count, increaseCount, resetCount }}>
      {children}
    </CountContext.Provider>
  )
}
