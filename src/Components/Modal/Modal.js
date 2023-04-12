import '../../css/Modal.css';
import React from 'react';

export const Modal = (props) => {
    const {active, setActive, children} = props;
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => {setActive()}}>
            <div className={active ? 'modal__content active' : "modal__content"} onClick={e => e.stopPropagation()}>
                    {children}
            </div>
        </div>
    );
};