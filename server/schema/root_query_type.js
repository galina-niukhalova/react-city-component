const CityType = require('./city_type');
const graphql = require('graphql');
const axios = require('axios');
const cache = require('memory-cache');

const URL = 'https://recruitment.theasiadev.com/Cities/getCitySlider';

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} = graphql;


async function getCitiesList() {
    let cities = cache.get('cities');

    if (!cities) {
        const result = await axios.get(URL);
        cities = result.data.cities;
        cache.put('cities', cities, 60 * 1000);
    }

    return cities;
}

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        city: {
            type: CityType,
            args: { index: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return getCitiesList().then(cities => cities[args.index]);
            }
        },
        totalCities: {
            type: GraphQLInt,
            resolve(parentValue, args) {
                return getCitiesList().then(cities => cities.length);
            }
        }
    }
});


module.exports = RootQuery;