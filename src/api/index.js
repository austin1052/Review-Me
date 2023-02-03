const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const fetchResponse = async (type, title, details) => {
  return await openai.createCompletion("text-curie-001", {
    prompt: createPrompt(type, title, details),
    temperature: 0.7,
    max_tokens: 150
  });
}

const createPrompt = (type, title, details) => {
  return `
    Write a ${type} review.
    ${type} Name: ${title}
    ${type} Details: ${details}
    Review:
  `
}