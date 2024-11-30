import { returnAPI } from './conect_API.js';

// Referências aos elementos
const chatContainer = document.getElementById('chat');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Função para adicionar uma mensagem ao chat
function addMessage(content, sender) {
  // Cria um novo elemento de mensagem
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  
  // Adiciona uma classe para diferenciar mensagens do usuário e do assistente
  if (sender === 'user') {
    messageElement.classList.add('user-message');
    messageElement.textContent = `Você: ${content}`;
  } else if (sender === 'assistant') {
    messageElement.classList.add('assistant-message');
    messageElement.textContent = `Assistente: ${content}`;
  }

  // Adiciona a mensagem ao contêiner de chat
  chatContainer.appendChild(messageElement);
  
  // Rola para a última mensagem
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Evento de clique no botão "Enviar"
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim(); // Pega o valor do input e remove espaços desnecessários
  if (message) {
    // Adiciona a mensagem do usuário ao chat
    addMessage(message, 'user');
    
    // Limpa o campo de entrada
    messageInput.value = '';
    
    // Simula uma resposta do assistente (substitua esta parte com lógica real, se necessário)
    setTimeout(() => {
      const response = `${returnAPI(message)}`;
      addMessage(response, 'assistant');
    }, 1000); // Resposta após 1 segundo
  }
});

// Permite enviar mensagem pressionando "Enter"
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});
