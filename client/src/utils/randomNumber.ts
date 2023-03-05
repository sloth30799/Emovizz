export function randomNumbers(array: string[]): string[] {
  // Shuffle the array using Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  // Get the first 10 numbers
  const result = array.slice(0, 10)

  return result
}
