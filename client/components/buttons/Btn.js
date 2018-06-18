import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool
};

function Button({ onClick, active, children }) {
    const classNames = {
        btn: `btn ${active && 'btn--active'}`
    };

    return (
        <button onClick={onClick} className={classNames.btn}>
            {children}
        </button>
    )
}

export default Button;