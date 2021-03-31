const sourcePath = {
  films: 'https://swapi.dev/api/films/',
  people: 'https://swapi.dev/api/people/',
  planets: 'https://swapi.dev/api/planets/',
  species: 'https://swapi.dev/api/species/',
  starships: 'https://swapi.dev/api/starships/',
  vehicles: 'https://swapi.dev/api/vehicles/',
};

export const getPeople = async () => {
  try {
    console.log('Hello');
    const response = await fetch(sourcePath.people);
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const people = await response.json();
    return people;
  } catch (error) {
    console.error('ups');
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
