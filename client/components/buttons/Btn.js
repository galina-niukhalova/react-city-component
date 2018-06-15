import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool
}

function Button({ onClick, active, children }) {
    return (
        <button onClick={onClick} className={`btn ${active && 'btn--active'}`}>
            {children}
        </button>
    )
}

export default Button;