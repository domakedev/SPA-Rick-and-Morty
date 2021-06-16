console.log("Hola! Aqui empieza lo chido!");

import router from './routes/index';

window.addEventListener('hashchange', router)//Cuando el hash cambie que se llame a router

window.addEventListener('load', router);//cuando termine de cargar la pagina, que cargue la funcion router.

//window.onhashchange=router;