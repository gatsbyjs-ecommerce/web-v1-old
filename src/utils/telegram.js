import axios from 'axios';

export const sendTelegram = (message, chat = '-1001188547752') => {
  console.log('');

  return new Promise((resolve, reject) => {
    axios
      .post(
        'https://api.telegram.org/bot981614812:AAG8y16lMYlo1k7mUcexgC1zurC2zUnhPS8/sendMessage',
        {
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
          chat_id: chat,
          text: message,
        },
      )
      .then(response => {
        if (!response.data.ok) {
          reject(response.data.result);
        }

        resolve({
          id: response.data.result.message_id,
          status: response.data.ok,
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};
