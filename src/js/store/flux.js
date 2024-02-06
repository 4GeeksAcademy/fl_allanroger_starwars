
// flux.js
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planets: [],
            characters: [],
            vehicles: [],
            charactersDetails: [],
            vehiclesDetails: [],
            planetsDetails: [],
            // Adicione outros estados necessários aqui
        },
        actions: {
            // Função para buscar planetas
            fetchPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                .then(res => res.json())
                .then(data => {
                    console.log(data.results);
                    setStore({ planets: data.results });
                })
                .catch(err => console.error(err));
            },
            // Função para buscar personagens
            fetchCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                .then(res => res.json())
                .then(data => {
                    console.log(data.results);
                    setStore({ characters: data.results });
                })
                .catch(err => console.error(err));
            },
            // Função para buscar veículos
            fetchVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                .then(res => res.json())
                .then(data => {
                    console.log(data.results);
                    setStore({ vehicles: data.results });
                })
                .catch(err => console.error(err));
            },
            // Função para buscar detalhes de um personagem específico
            fetchCharacterDetails: (id) => {
                fetch(`https://www.swapi.tech/api/people/${id}/`)
                .then(response => response.json())
                .then(data => {
                    const prevState = getStore();
                    setStore({ charactersDetails: { ...prevState.charactersDetails, [id]: data.result.properties } });
                })
                .catch(error => console.error("Error loading character details:", error));
            },
            // Função para buscar detalhes de um veículo específico
            fetchVehicleDetails: (id) => {
                fetch(`https://www.swapi.tech/api/vehicles/${id}/`)
                .then(response => response.json())
                .then(data => {
                    const prevState = getStore();
                    setStore({ vehiclesDetails: { ...prevState.vehiclesDetails, [id]: data.result.properties } });
                })
                .catch(error => console.error("Error loading vehicle details:", error));
            },
            // Função para buscar detalhes de um planeta específico
            fetchPlanetDetails: (id) => {
                fetch(`https://www.swapi.tech/api/planets/${id}/`)
                .then(response => response.json())
                .then(data => {
                    const prevState = getStore();
                    setStore({ planetsDetails: { ...prevState.planetsDetails, [id]: data.result.properties } });
                })
                
                .catch(error => console.error("Error loading planet details:", error));
            },
            // Adicione outras ações conforme necessário
        }
    };
};

export default getState;
