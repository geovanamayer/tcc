const fetch = require('node-fetch');

// Define os parâmetros da solicitação
const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const API_KEY = 'YOUR_API_KEY';

const prompt = 'Olá, gostaria de ajuda com alguma coisa.';
const maxTokens = 50;

// Configura o corpo da solicitação
const data = {
  prompt: prompt,
  max_tokens: maxTokens
};

// Configura os cabeçalhos da solicitação
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`
};

// Faz a solicitação para a API
fetch(API_ENDPOINT, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    // Extrai e exibe a resposta
    const completions = result.choices;
    completions.forEach(completion => {
      console.log(completion.text);
    });
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });


  // codigo original
const forumForm = document.getElementById('forum-form');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const postsContainer = document.getElementById('posts-container');
const cycleDurationInput = document.getElementById('cycle-duration');
const calculateBtn = document.getElementById('calculate-btn');
const resultContainer = document.getElementById('result-container');

forumForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = nameInput.value;
  const message = messageInput.value;
  
  if (name.trim() !== '' && message.trim() !== '') {
    const post = document.createElement('div');
    post.className = 'post';
    
    const author = document.createElement('div');
    author.className = 'post-author';
    author.textContent = name;
    
    const content = document.createElement('div');
    content.className = 'post-content';
    content.textContent = message;
    
    post.appendChild(author);
    post.appendChild(content);
    
    postsContainer.appendChild(post);
    
    nameInput.value = '';
    messageInput.value = '';
  }
});

calculateBtn.addEventListener('click', () => {
  const cycleDuration = parseInt(cycleDurationInput.value);
  
  if (!isNaN(cycleDuration) && cycleDuration > 0) {
    const currentDate = new Date();
    const nextMenstruation = new Date(currentDate.getTime() + (cycleDuration * 24 * 60 * 60 * 1000));
    const formattedDate = nextMenstruation.toLocaleDateString();
    
    resultContainer.textContent = `Seu próximo período provavelmente começará em ${formattedDate}.`;
  } else {
    resultContainer.textContent = 'Digite uma duração válida para o ciclo menstrual.';
  }
});

