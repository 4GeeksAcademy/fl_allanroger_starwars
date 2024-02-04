// // flux.js
// const getState = ({ getStore, getActions, setStore }) => {
//     return {
//         store: {
//             planets: [],
//             characters: [],
// 			vehicles: [],
//             // Adicione outros estados necessários aqui
//         },
//         actions: {
//             // Função para buscar planetas
//             fetchPlanets: () => {
//                 fetch("https://www.swapi.tech/api/planets/")
//                 .then(res => res.json())
//                 .then(data => {
//                     setStore({ planets: data.result });
//                 })
//                 .catch(err => console.error(err));
//             },
//             // Função para buscar personagens
//             fetchCharacters: () => {
//                 fetch("https://www.swapi.tech/api/people/")
//                 .then(res => res.json())
//                 .then(data => {
//                     setStore({ characters: data.result });
//                 })
//                 .catch(err => console.error(err));
//             },
// 			fetchVehicle: () => {
//                 fetch("https://www.swapi.tech/api/vehicles/")
//                 .then(res => res.json())
//                 .then(data => {
//                     setStore({ vehicles: data.result });
//                 })
//                 .catch(err => console.error(err));
//             },
//         }
//     };
// };

// export default getState;
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
                // .then(data => {
                //     console.log(data);
                //     setStore({ planets: data.result.map(item => item.properties) });
                // })
                .then(data => {
                    if (data && data.result) {
                        setStore({ planets: data.result.map(item => item.properties) });
                    } else {
                        console.error("Data format from API is unexpected:", data);
                    }
                })
                
                .catch(err => console.error(err));
            },
            // Função para buscar personagens
            fetchCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setStore({ characters: data.result.map(item => item.properties) });
                })
                .catch(err => console.error(err));
            },
            // Função para buscar veículos
            fetchVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setStore({ vehicles: data.result.map(item => item.properties) });
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
