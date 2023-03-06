export function answerFormat(answer: string | unknown): string | void {
  if (typeof answer === "string") {
    return answer
      .replaceAll("The ", "")
      .replaceAll("A ", "")
      .replaceAll(" ", "")
      .toLowerCase()
  }
}
