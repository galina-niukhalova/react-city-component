const CityType = require('./city_type');
const graphql = require('graphql');
const axios = require('axios');
const cache = require('memory-cache');

const URL = 'https://recruitment.theasiadev.com/Cities/getCitySlider';

const {
    GraphQLObjectType,
    GraphQLInt
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        city: {
            type: CityType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                let cities = cache.get('cities');
                if(cities) {
                    return cities.find(el => el.id === args.id);
                }
                else {
                    return axios.get(URL).then((resp) => {
                        cities = resp.data.cities;
                        cache.put('cities', cities, 60*1000);
                        return cities.find(el => el.id === args.id);
                    });
                }
            }
        }
    }
});


module.exports = RootQuery;