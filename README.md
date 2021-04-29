# fadeScroll

FADE SCROLL

AGREGA LOS ESTILOS Y EL SCRIPT JS

<link rel='stylesheet' type='text/css' href='css/fadeScroll.css'>
<script src='js/main.js' type='module'></script> //TIPO DE SCRIPT MODULO

CREA UN DIV CON UNA CLASE

<div class='fade'></div>

AGREGA LA CLASE fade_transition

<div class='fade fade_transition'></div>

IMPORTA LA CLASE

import 'fade' from './modules/fadeScroll.js'

INSTANCIA LA CLASE

PRIMERO EL TAG -> EL TAG UTILIZA -> querySelectorAll
SEGUNDO LA DIRECCION -> 'up', 'left', 'right', 'down'
TERCERO SI QUIERES UN overflow: hidden

const fadeScroll = new fade({
    tag: '.fade',
    direction: 'up',
    overflow: true
})

