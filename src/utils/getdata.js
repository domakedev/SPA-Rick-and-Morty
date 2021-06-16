const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    const apiUrl = id ? `${API}${id}`: API;

    try {
        const response = await fetch(apiUrl)//Trae la data desde la apiUrl
        const data= await response.json()//Convierte la respuesta en formato JSON
        return data
    } catch (error) {
        console.log('Fetch error', error);
    }
}

export default getData;