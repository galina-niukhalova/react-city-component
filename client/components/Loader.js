import React from 'react';

const classNames = {
    loaderWrapper: 'loader__wrapper',
    loader: 'loader'
};

function Loader() {
    return (
        <div className={classNames.loaderWrapper}>
            <div className={classNames.loader} />
        </div>
    )
}

export default Loader;

