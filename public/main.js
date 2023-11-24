var socket = io.connect('https://chathostferrer2.onrender.com/');
//Parte del cliente conectamos con localhost
//escuchamos el evento messages
// data tendr� el array de mensajes  que env�a el servidor
socket.on('messages', function (data) {
  console.log(data);
  render(data);
})
// esta funci�n se encarga de pintar en el HTML los mensajes
function render(data) {
  var html = data.map(function (elem, index) {
    return (`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>`);
  }).join(" ");


  document.getElementById('messages').innerHTML = html;


}


// main.js


import { sent } from '../main.js';

function addMessage(e) {

  var USER = document.getElementById('username').value;
  var TEXT = document.getElementById('texto').value;

  sent(USER, TEXT);



  var message = {
    author: USER,
    text: TEXT
  };


  var alerta = document.getElementById('alerta');

  

 
  if (message.author == "" || message.text == "") {
    alerta.style.display = 'block';
    
  } else {
    alerta.style.display = 'none';
  
    
    socket.emit('new-message', message);
    document.getElementById('texto').value = '';
  }

  return false;
}





