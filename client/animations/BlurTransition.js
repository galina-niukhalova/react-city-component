import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'

export default class BlurTransition extends Component {
    render() {
        const { children, duration } = this.props;

        const classNames = {
            entering: 'animation__blur animation__blur--active',
            entered: 'animation__blur animation__blur--disable',
            exiting: 'animation__blur animation__blur--active',
            exited: 'animation__blur animation__blur--disable'
        }

        return (
            <Transition in={this.props.in} timeout={{
                enter: duration,
                exit: duration
            }} appear={true}>
                {
                    (status) => React.cloneElement(children, {
                        className: classNames[status]
                    })
                }
            </Transition >
        )
    }
}