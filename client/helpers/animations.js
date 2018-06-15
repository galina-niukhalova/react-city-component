import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

const animateSlider = Target => {
    return class extends Component {
        state = {
            isActive: true
        }

        componentDidMount() {
            this.setState({ isActive: false });
        }

        componentWillReceiveProps() {
            this.setState({
                isActive: true
            });
        }

        componentDidUpdate() {
            if (this.state.isActive)
                this.setState({ isActive: false });
        }

        render() {
            return (
                <Transition in={this.state.isActive} timeout={300}>
                    {(state) => {
                        let className = state === 'exited'
                            ? 'animation__blur--disable animation__blur'
                            : 'animation__blur--active'

                        return <Target
                            additionalClass={{ blur: className }}
                            props={{ ...this.props }}
                        />
                    }}
                </Transition>
            )
        }

    }
}

export default animateSlider;