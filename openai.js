 // This is also the default, can be omitted
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'Enter Your API Key' , dangerouslyAllowBrowser: true// This is also the default, can be omitted
});

export async function sendMsgToOpenAi(message){

    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt:message,
        max_tokens: 256,
      });
    //   console.log(completion.choices[0].text);
    return completion.choices[0].text
    }