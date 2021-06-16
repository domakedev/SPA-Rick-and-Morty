import getData from '../utils/getdata';
import getHash from '../utils/getHash';

const Character = async ()=>{
    const id=await getHash()
    console.log("Id desde Character:"+id);
    const character=await getData(id);//Traigo la Data ya en formato JSON
    //console.log(character);
    debugger
    const view = `
    <div class="Characters-inner">
        <article class="Character-card">
            <img src="${character.image}" alt"name">
            <h2>${character.name}</h2>
        </article>
        <article class="Character-card">
            <h3>Epsiodes: <span> ${character.episode.length}</span></h3>
            <h3>Status:   <span>${character.status}</span></h3>
            <h3>Species:  <span>${character.species}</span></h3>
            <h3>Gender:   <span>${character.gender}</span></h3>
            <h3>Origin:   <span>${character.origin.name}</span></h3>
            <h3>Last Location:${character.location.name}</span></h3>
        </article>
    </div>
    `;

    return view;
}

export default Character;