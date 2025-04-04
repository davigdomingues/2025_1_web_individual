// Código original
function sortCities(informations) {
    for (let i = 0; i < informations.length - 1; i++) {
        for (let j = i + 1; j < informations.length; j++) {
            if (informations[j].name < informations[i].name) {
                let temporary = informations[i];
                informations[i] = informations[j];
                informations[j] = temporary;
            }
        }
    }
    return informations;
}

function filterCities(informations, criteria) {
    switch (criteria) {
        case "name": {
            let informationsNameFiltered = [];
            for (let i = 0; i < informations.length; i++) {
                if (informations[i].name[0].toLowerCase() < "j") {
                    informationsNameFiltered.push(informations[i]);
                }
            }
            return informationsNameFiltered;
        }

        case "population": {
            let informationsPopulationFiltered = [];
            for (let i = 0; i < informations.length; i++) {
                if (informations[i].population > 1000000) {
                    informationsPopulationFiltered.push(informations[i]);
                }
            }
            return informationsPopulationFiltered;
        }

        case "temperature": {
            let informationsTemperatureFiltered = [];
            for (let i = 0; i < informations.length; i++) {
                if (informations[i].temperature < 30) {
                    informationsTemperatureFiltered.push(informations[i]);
                }
            }
            return informationsTemperatureFiltered;
        }

        case "weatherDescription": {
            let informationsWeatherFiltered = [];
            for (let i = 0; i < informations.length; i++) {
                if (informations[i].weatherDescription != "Dry") {
                    informationsWeatherFiltered.push(informations[i]);
                }
            }
            return informationsWeatherFiltered;
        }

        default:
            return [];
    }
}

function processCities(informations, filterCriteria) {
    let filteredOrderedObjectsByName = sortCities(filterCities(informations, filterCriteria));

    console.log("The answer is: ");
    for (let i of filteredOrderedObjectsByName) {
        console.log(`${i.name} - Population: ${i.population}, Temperature: ${i.temperature}, Weather: ${i.weatherDescription}`);
    }
}

let informations = [
    {
        name: "New York",
        population: 8405837,
        temperature: 20,
        weatherDescription: "Sunny"
    },
    {
        name: "Brasília",
        population: 2000000,
        temperature: 27,
        weatherDescription: "Dry"
    },
    {
        name: "São Paulo",
        population: 11000000,
        temperature: 24,
        weatherDescription: "Cloudy"
    },
    {
        name: "Nairobi",
        population: 700000,
        temperature: 32,
        weatherDescription: "Windy"
    }
];

console.log("Hello, now some informations will be sorted. Let's see the results!");
let filterCriteria = prompt("First, choose the criteria (name, population, temperature, weatherDescription)");
processCities(informations, filterCriteria);

/* Versão otimizada 1
function sortCities(informations) {
    for (let i = 0; i < informations.length - 1; i++) {
        for (let j = i + 1; j < informations.length; j++) {
            if (informations[j].name < informations[i].name) {
                let temporary = informations[i];
                informations[i] = informations[j];
                informations[j] = temporary;
            }
        }
    }
    return informations;
}

function filterCities(informations, criteria) {
    switch (criteria) {
        case "name": {
            let informationsNameFiltered = [];
            for (let city of informations) {
                if (city.name[0].toLowerCase() < "j") {
                    informationsNameFiltered.push(city);
                }
            }
            return informationsNameFiltered;
        }

        case "population": {
            let informationsPopulationFiltered = [];
            for (let city of informations) {
                if (city.population > 1000000) {
                    informationsPopulationFiltered.push(city);
                }
            }
            return informationsPopulationFiltered;
        }

        case "temperature": {
            let informationsTemperatureFiltered = [];
            for (let city of informations) {
                if (city.temperature < 30) {
                    informationsTemperatureFiltered.push(city);
                }
            }
            return informationsTemperatureFiltered;
        }

        case "weatherDescription": {
            let informationsWeatherFiltered = [];
            for (let city of informations) {
                if (city.weatherDescription != "Dry") {
                    informationsWeatherFiltered.push(city);
                }
            }
            return informationsWeatherFiltered;
        }

        default:
            return [];
    }
}

function processCities(informations, filterCriteria) {
    let filteredObjects = filterCities(informations, filterCriteria);
    let filteredOrderedObjectsByName = sortCities(filteredObjects);

    console.log("The answer is:");
    for (let city of filteredOrderedObjectsByName) {
        console.log(`${city.name} - Population: ${city.population}, Temperature: ${city.temperature}, Weather: ${city.weatherDescription}`);
    }
}

let informations = [
    {
        name: "New York",
        population: 8405837,
        temperature: 20,
        weatherDescription: "Sunny"
    },
    {
        name: "Brasília",
        population: 2000000,
        temperature: 27,
        weatherDescription: "Dry"
    },
    {
        name: "São Paulo",
        population: 11000000,
        temperature: 24,
        weatherDescription: "Cloudy"
    },
    {
        name: "Nairobi",
        population: 700000,
        temperature: 32,
        weatherDescription: "Windy"
    }
];

console.log("Hello, now some informations will be sorted. Let's see the results!");
let filterCriteria = prompt("First, choose the criteria (name, population, temperature, weatherDescription)");
processCities(informations, filterCriteria);
*/