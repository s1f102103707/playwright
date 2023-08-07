import axios from 'axios';
import { useState } from 'react';

const [turnRole, setTurnRole] = useState(1);
const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
const apiKey = 'APIKEY'; // あなたの実際のAPIキーを設定してください
const inputData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'あなたは悲観的な人間です。以下の質問にその性格に沿って回答してください。' },//contentの中で性格を設定する
    { role: 'user', content: '東京のイメージを簡潔に教えてください。' }//contentの中で質問の内容を設定する
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
    let message = response.data.choices[0]?.message?.content;
    if (message) {
      console.log('Response:', message);
      // exportMessage = message;
    } else {
    //   const totalTokens = response.data.usage?.total_tokens;
    //   console.log('Total Tokens:', totalTokens);
      console.error('Error: Response message not found.');
    }
    message = 'a';
    console.log(message);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });