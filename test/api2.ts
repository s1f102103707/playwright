import axios from 'axios';
import { exportMessage } from './api.ts';
console.log(exportMessage);
const message = require('./api.ts');
const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
const apiKey = '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'; // あなたの実際のAPIキーを設定してください
const inputData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'こんにちは' }
  ]
};

axios.post(apiEndpoint, inputData, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log('API Response:', response.data);
    const message2 = response.data.choices[0]?.message?.content;
    if (message2) {
      console.log('Response:', message2);
    } else {
    //   const totalTokens = response.data.usage?.total_tokens;
    //   console.log('Total Tokens:', totalTokens);
      console.error('Error: Response message not found.');
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
  console.log(responseMessage);
