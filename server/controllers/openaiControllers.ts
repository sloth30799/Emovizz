// import { Request, Response } from "express"
// import { Configuration, OpenAIApi } from "openai"

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)

// interface QuizRequest extends Request {
//   params: {
//     id: string
//   }
//   body: {
//     data: string[]
//   }
// }

// interface ErrorResponse {
//   success: boolean
//   message: any
// }

// interface QuizResponse extends Response<string> {}

// module.exports = {
//   quiz: async (
//     req: QuizRequest,
//     res: Response<QuizResponse | ErrorResponse>
//   ) => {
//     try {
//       const { id } = req.params
//       const { data } = req.body
//       const movie = data[Number(id)]

//       // chatgpt api
//       const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `Convert movie into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n ${movie}: `,
//         temperature: 0.8,
//         max_tokens: 60,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//         stop: ["\n"],
//       })

//       const emoji: any = response.data.choices[0].text
//       res.status(200).json(emoji)
//     } catch (error) {
//       console.log(error)
//       res.status(404).json({ success: false, message: error })
//     }
//   },
// }

import { Request, Response } from "express"
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
})

const openai = new OpenAIApi(configuration)

interface QuizRequest extends Request {
  params: {
    id: string
  }
  body: {
    data: string[]
  }
}

interface ErrorResponse {
  success: boolean
  message: any
}

interface QuizResponse extends Response<string> {}

export const quiz = async (
  req: QuizRequest,
  res: Response<QuizResponse | ErrorResponse>
) => {
  try {
    const { id } = req.params
    const { data } = req.body
    const movie = data[Number(id)]

    // chatgpt api
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Convert movie into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n ${movie}: `,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    })

    const emoji: any = response.data.choices[0].text
    res.status(200).json(emoji)
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, message: error })
  }
}
