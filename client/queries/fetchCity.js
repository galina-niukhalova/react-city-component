import gql from 'graphql-tag';

export default gql`
    query CityQuery($index: Int!) {
        city(index: $index) {
            name
            slug
            main_image
            description
        }
    }
`;