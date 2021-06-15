import Header from '../templates/Header';
import Home from '../pages/home';
import Character from '../templates/Character';
import Error404 from '../pages/Error404';

const routes = { //Aqui definimos nuestras rutas! en un objeto
    '/': Home,
    '/:id':Character,//Nos dice que el valor de id sera dinamico
    '/contact':'Contact'
};

const router= async () => {
    const header = null || document.getElementById('header');//Identificamos en el HTML
    //const content = null || document.getElementById('content');

    
    header.innerHTML = await Header()()//Insertamos HTML en el HTML pero esperamos que haya render

};

export default router;

