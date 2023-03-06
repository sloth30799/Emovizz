const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

module.exports = {
  quiz: async (req, res) => {
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

      const emoji = response.data.choices[0].text
      res.status(200).json(emoji)
    } catch (error) {
      console.log(error)
      res.status(404).json({ success: false, message: error })
    }
  },
}
