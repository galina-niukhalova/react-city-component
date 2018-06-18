import React, { Component } from 'react';
import City from '../components/City';
import { graphql } from 'react-apollo';
import GET_CITY from '../queries/fetchCity';


class Query extends Component {
    shouldComponentUpdate(nextProps) {
        return !nextProps.data.loading;
    }

    render() {
        const { data, index } = this.props;

        if (data.loading) return null;
        if (data.error) return <div>{data.error}</div>

        return (
            <City
                city={data.city}
                index={index}
            />
        )
    }
}


export default graphql(GET_CITY, {
    options: ({ index }) => { return { variables: { index } } }
})(Query);
