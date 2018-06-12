import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import cityQuery from '../queries/fetchCity';

class City extends Component {
    renderCity() {
        const { city } = this.props.data;
        console.log(city.main_image)
        return (
            <div>
                <img src={city.main_image} />
                <p>{city.name}</p>
                <p>{city.description}</p>
            </div>
        );
    }

    render() {
        const { data } = this.props;
        if (data.loading) 
            return <div></div>
        else 
            return this.renderCity();
    }
};


export default graphql(cityQuery, {
    options: props => { return { variables: { id: props.cityID } } }
})(City);