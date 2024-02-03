// flux.js
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planets: [],
            characters: [],
            // Adicione outros estados necessários aqui
        },
        actions: {
            // Função para buscar planetas
            fetchPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                .then(res => res.json())
                .then(data => {
                    setStore({ planets: data.result });
                })
                .catch(err => console.error(err));
            },
            // Função para buscar personagens
            fetchCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                .then(res => res.json())
                .then(data => {
                    setStore({ characters: data.result });
                })
                .catch(err => console.error(err));
            },
            // Adicione outras ações conforme necessário
        }
    };
};

export default getState;
