import getData from "../utils/getdata";

const Home=async() => {

    const Characters=await getData();//Traigo la Data ya en formato JSON
    console.log(Characters);
    const view=`
    <div class="Characters">

        ${Characters.results.map(character =>  //Cuando se usa {} se tiene que usar return
            `
            <article class="Character-item">
            <a href="#/${character.id}/"> 
            <img src=${character.image} alt="name">
            <h2>${character.name}</h2>
            </a>
        </article>
            `
        ).join('') //Usamos join('') para quitar las comas en la impresion
        }

        
    </div>
    `;
    return view;
}

export default Home();