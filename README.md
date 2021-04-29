# fadeScroll

Fade Scroll

Agrega los estilos y el script js

<link rel='stylesheet' type='text/css' href='css/fadeScroll.css'>
<script src='js/main.js' type='module'></script> //TIPO DE SCRIPT MODULO

crea un div con una clase

<div class='fade'></div>

agrega la clase -> fade_transition

<div class='fade fade_transition'></div>

Importa la clase

import 'fade' from './modules/fadeScroll.js'

Instancia la clase

Primero el tag -> EL TAG UTILIZA -> querySelectorAll
Segundo la direccion -> 'up', 'left', 'right', 'down'
Tercero si quieres un overflow hidden -> overflow: true 

const fadeScroll = new fade({
    tag: '.fade',
    direction: 'up',
    overflow: true
})

