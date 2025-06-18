import { GROK_API_KEY } from './Constants';

const BASE_URL = 'https://api.groq.com/openai/v1/chat/completions';

const openai = {
  chat: {
    completions: {
      create: async ({ messages, model }) => {
        const response = await fetch(BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${GROK_API_KEY}`,
          },
          body: JSON.stringify({
            model: model || 'mixtral-8x7b-32768',
            messages,
            temperature: 0.7
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("❌ GPT Search Error: ", data);
          throw new Error(data.error?.message || 'Unknown error');
        }

        return data;
      },
    },
  },
};

export default openai;
