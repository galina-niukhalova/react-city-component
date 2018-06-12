const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql;

const CityType = new GraphQLObjectType({
    name: 'City',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        main_image: { type: GraphQLString },
        description: { type: GraphQLString }
    }
});

module.exports = CityType;