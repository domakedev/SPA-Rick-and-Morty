import Header from '../templates/Header';
import Home from '../pages/home';
import Character from '../templates/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = { //Aqui definimos nuestras rutas! en un objeto
    '/': Home,
    '/:id':Character,//Nos dice que el valor de id sera dinamico
    '/contact':'Contact',
};

const router= async () => {
    const header = null || document.getElementById('header');//Identificamos en el HTML
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();//Insertamos HTML en el HTML pero esperamos que 

    let getHashId=getHash();
    console.log("Hash desde Routes A:"+getHashId);
    let route= await resolveRoutes(getHashId);
    let render = routes[route]?routes[route]:Error404
    
    content.innerHTML = await render();
};

export default router;

