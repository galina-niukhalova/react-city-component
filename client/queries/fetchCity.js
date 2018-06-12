import gql from 'graphql-tag';

export default gql`
    query CityQuery($id: Int!) {
        city(id: $id) {
            name
            slug
            main_image
            description
        }
    }
`;