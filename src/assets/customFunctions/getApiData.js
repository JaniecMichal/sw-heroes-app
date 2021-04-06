const sourcePath = {
  films: 'https://swapi.dev/api/films/',
  people: 'https://swapi.dev/api/people/',
  planets: 'https://swapi.dev/api/planets/',
  species: 'https://swapi.dev/api/species/',
  starships: 'https://swapi.dev/api/starships/',
  vehicles: 'https://swapi.dev/api/vehicles/',
};

export const getApiData = async (url) => {
  try {
    if (url === null || url === undefined) url = sourcePath.people;
    if (url === 'films') url = sourcePath.films;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const apiData = await response.json();
    return apiData;
  } catch (error) {
    console.error('ups... we have a some problem :(');
  }
};

/* export const getPersonDetails = async (personId) => {
  try {
    const response = await fetch(pathSource);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const details = await response.json();
    return details;
  } catch (error) {
    console.error('ups');
  }
}; */
