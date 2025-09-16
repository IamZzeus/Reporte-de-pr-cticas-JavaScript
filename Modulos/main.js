//main
import { saludo } from './Saludo.js';
import { despedida } from './despedida.js';
import mensaje  from './mensaje.js';

const Ver = document.getElementById('Ver-mod');
Ver.addEventListener('click', () => {
    alert( "Revisa la consola para ver los mensajes de los módulos" );
    saludo();
    mensaje();
    despedida();
});