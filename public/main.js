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

function addMessage(e) {
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
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





