import gql from 'graphql-tag';

export default gql`
    query CityQuery($index: Int!) {
        city(index: $index) {
            name
            main_image
            description
        }
    }
`;